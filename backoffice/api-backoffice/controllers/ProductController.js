const express = require("express");
const app = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const exceljs = require("exceljs");
const fs = require("fs");
const path = require('path');  // เพิ่มบรรทัดนี้

dotenv.config();

app.use(fileUpload());



app.post("/upload", async (req, res) => {
    try {
        if (req.files != undefined) {
            if (req.files.img != undefined) {
                const img = req.files.img;
                const myDate = new Date();
                const y = myDate.getFullYear();
                const m = myDate.getMonth() + 1;  // Month is 0-based in JS
                const d = myDate.getDate();
                const h = myDate.getHours();
                const mi = myDate.getMinutes();
                const s = myDate.getSeconds();
                const ms = myDate.getMilliseconds();

                const arrFileName = img.name.split('.');
                const ext = arrFileName[arrFileName.length - 1];

                const newName = `${y}${m}${d}${h}${mi}${s}${ms}.${ext}`;

                img.mv('./uploads/' + newName, (err) => {
                    if (err) throw err;
                    res.send({ newName: newName });
                });
            }
        } else {
            res.status(400).send({ error: "No files were uploaded." });
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
});

app.post("/create", async (req, res) => {
    try {
        await prisma.product.create({
            data: req.body,
        });

        res.send({ message: 'success' });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

app.get("/list", async (req, res) => {
    try {
        const data = await prisma.product.findMany({
            orderBy: {
                id: 'desc',
            },
            where: {
                status: 'use',
            },
        });
        res.send({ result: data });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

app.delete("/remove/:id", async (req, res) => {
    try {
        await prisma.product.update({
            data: {
                status: "delete",
            },
            where: {
                id: parseInt(req.params.id),
            },
        });
        res.send({ message: "success" });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

app.put("/update", async (req, res) => {
    try {
        const oldData = await prisma.product.findFirst({
            where: {
                id: parseInt(req.body.id),
            },
        });

        if (oldData && oldData.img) {
            const imagePath = './uploads/' + oldData.img;
            if (fs.existsSync(imagePath)) {
                await fs.unlinkSync(imagePath);
            }
        }

        await prisma.product.update({
            data: req.body,
            where: {
                id: parseInt(req.body.id),
            },
        });

        res.send({ message: "success" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
});

app.post("/uploadFromExcel", async (req, res) => {
    try {
        const fileExcel = req.files.fileExcel;

        fileExcel.mv('./uploads/' + fileExcel.name, async (err) => {
            if (err) throw err;

            const workbook = new exceljs.Workbook();
            await workbook.xlsx.readFile('./uploads/' + fileExcel.name);
            const ws = workbook.getWorksheet(1);

            for (let i = 2; i <= ws.rowCount; i++) {
                const name = ws.getRow(i).getCell(1).value ?? "";
                const cost = ws.getRow(i).getCell(2).value ?? 0;
                const price = ws.getRow(i).getCell(3).value ?? 0;

                if (name !== "" && cost >= 0 && price >= 0) {
                    await prisma.product.create({
                        data: {
                            name: name,
                            cost: cost,
                            price: price,
                            img: '',
                        },
                    });
                }

                console.log(name, cost, price);
            }

            await fs.unlinkSync('./uploads/' + fileExcel.name);
            res.send({ message: 'success' });
        });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

app.delete('/remove-image', async (req, res) => {
    const { productId, imgToRemove } = req.body;

    try {
        // สร้างพาธของไฟล์
        const imagePath = path.join(__dirname, '..', 'uploads', imgToRemove);
        console.log('File path:', imagePath);  // ตรวจสอบพาธของไฟล์

        // ตรวจสอบว่าไฟล์มีอยู่หรือไม่
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // ลบไฟล์
        } else {
            return res.status(404).json({ message: 'File not found' });
        }

        // ค้นหาสินค้าในฐานข้อมูล
        const product = await prisma.product.findUnique({
            where: { id: productId },
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // อัปเดตข้อมูลสินค้า
        const updatedProduct = await prisma.product.update({
            where: { id: productId },
            data: {
                imgs: {
                    set: product.imgs.filter(img => img !== imgToRemove), // ลบรูปจาก array
                },
            },
        });

        res.send({ message: 'success' });
    } catch (error) {
        console.error('Error removing image:', error);
        res.status(500).json({ message: 'Error removing image' });
    }
});




module.exports = app;
