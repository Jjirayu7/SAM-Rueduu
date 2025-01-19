import { useEffect, useRef, useState } from "react";
import BackOffice from "../../components/BackOffice";
import MyModal from "../../components/MyModal";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../../config";

function Product() {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    // const [img, setImg] = useState({});
    const [imgs, setImgs] = useState([]);
    const [fileExcel, setFileExcel] = useState({});
    const refImg = useRef();
    const refExcel = useRef();
    const [imgsToDelete, setImgsToDelete] = useState([]); 
    //const [newImgs, setNewImgs] = useState([]); 

    
    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async() => {
        try {
            const res = await axios.get(config.apiPath + '/product/list', config.headers());

            if (res.data.result !== undefined){
                setProducts(res.data.result);
            }
        } catch (error) {
            Swal.fire({
                title: 'error',
                text: error.message,
                icon: 'error'
            })
        }
    }
    
    const handleRemoveImage = async (item, imgToRemove) => {
        item.imgs = item.imgs.filter((img) => img !== imgToRemove);
        setProduct({ ...item });
        try {
            const response = await axios.delete(config.apiPath + '/product/remove-image', {
                
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    productId: item.id,
                    imgToRemove: imgToRemove,
                }
            });
           

            if (response.data.message === 'success') {
                // หากการลบไฟล์สำเร็จ ให้ลบรูปภาพออกจาก state
                item.imgs = item.imgs.filter((img) => img !== imgToRemove);
                setProduct({ ...item }); // อัปเดต state ของ product
            } else {
                console.error('Failed to remove image');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    
    
    const removeImage = (img) => {
        setImgsToDelete([...imgsToDelete, img]); // เก็บชื่อรูปภาพที่ต้องลบ
        setProduct({
            ...product,
            imgs: product.imgs.filter((image) => image !== img), // ลบรูปภาพออกจากรายการ
        });
    };
    
    const handleSave = async () => {
        try {
            const uploadedImages = await handleUpload();
            product.imgs = uploadedImages; 
    
            product.cost = parseInt(product.cost);
            product.price = parseInt(product.price);
    
            let res;
    
            if (product.id === undefined) {
                res = await axios.post(config.apiPath + '/product/create', product, config.headers());
            } else {
                res = await axios.put(config.apiPath + '/product/update', product, config.headers());
            }
    
            if (res.data.message === 'success') {
                Swal.fire({
                    title: 'save',
                    text: 'success',
                    icon: 'success',
                    timer: 500,
                });
                document.getElementById('modalProduct_btnClose').click();
                fetchData();
            }
        } catch (error) {
            Swal.fire({
                title: 'error',
                text: error.message,
                icon: 'error',
            });
        }
    };
    
    // const handleSav = async () => {
    //     try {
    //         // อัปโหลดรูปภาพใหม่
    //         const uploadedImages = await handleUpload();
    
    //         // รวมรูปภาพใหม่กับรูปภาพเดิมที่ไม่ได้ลบ
    //         const remainingImgs = product.imgs.filter((img) => !imgsToDelete.includes(img));
    //         product.imgs = [...remainingImgs, ...uploadedImages];
    
    //         product.cost = parseInt(product.cost);
    //         product.price = parseInt(product.price);
    
    //         let res;
    //         if (product.id === undefined) {
    //             res = await axios.post(config.apiPath + '/product/create', product, config.headers());
    //         } else {
    //             res = await axios.put(config.apiPath + '/product/update', product, config.headers());
    //         }
    
    //         if (res.data.message === 'success') {
    //             Swal.fire({
    //                 title: 'save',
    //                 text: 'success',
    //                 icon: 'success',
    //                 timer: 500,
    //             });
    //             document.getElementById('modalProduct_btnClose').click();
    //             fetchData();
    //             clearForm();
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             title: 'error',
    //             text: error.message,
    //             icon: 'error',
    //         });
    //     }
    // };
    

    // const clearForm = () => {
    //     setProduct({
    //         name: '',
    //         price: '',
    //         cost: ''
    //     })
    //     setImg(null);
    //     refImg.current.value = "";
    // }

    const clearForm = () => {
        setProduct({
            name: '',
            price: '',
            cost: '',
            detail1: '',
            detail2: '',
            detail3: ''
        });
        setImgs([]); // ล้าง array ของรูปภาพ
        refImg.current.value = ""; // ล้างค่า input file
    };
    

    const handleRemove = async (item) => {
        try {
            const button = await Swal.fire({
                title: "remove",
                text: "remove item",
                icon: "question",
                showCancelButton: true,
                showConfirmButton: true
            })
            if(button.isConfirmed){
                const res = await axios.delete(config.apiPath + '/product/remove/' + item.id, config.headers());
                if (res.data.message === "success"){
                    Swal.fire({
                        title: "remove",
                        text: "remove success",
                        icon: "success",
                        timer: 1000
                    })
                    fetchData();
                }
            }
        } catch (error) {
            Swal.fire({
                title: "error",
                text: error.messsage,
                icon: "error"
            })
        }
    }

    // const selectedFile = (inputFile) => {
    //     if (selectedFile !== undefined){
    //         if (inputFile.length>0){
    //             setImg(inputFile[0]);
    //         }
    //     }
    // }
    const selectedFiles = (inputFiles) => {
        if (inputFiles.length > 0) {
            setImgs([...imgs, ...Array.from(inputFiles)]);
        }
    };
    
    // const handleUpload = async() => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('img', img);

    //         const res = await axios.post(config.apiPath + '/product/upload', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //                 'Authorization': localStorage.getItem('token')
    //             }
    //         })
    //         if (res.data.newName !== undefined) {
    //             return res.data.newName;
    //         }
    //     } catch (e) {
    //         Swal.fire({
    //             title: 'error',
    //             text: e.message,
    //             icon: 'error'
    //         })
    //         return "";
    //     }
    // }
    const handleUpload = async () => {
        try {
            const uploadedImages = [];
    
            for (let img of imgs) {
                const formData = new FormData();
                formData.append('img', img);
    
                const res = await axios.post(config.apiPath + '/product/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': localStorage.getItem('token'),
                    },
                });
    
                if (res.data.newName !== undefined) {
                    uploadedImages.push(res.data.newName);
                }
            }
    
            return uploadedImages; // คืนค่าชื่อไฟล์ทั้งหมด
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error',
            });
            return [];
        }
    };
    

    const showImage = (item) => {
        if (item.imgs && item.imgs.length > 0) {
            return (
                <div className="d-flex flex-wrap">
                    {item.imgs.map((img, index) => (
                        <div
                            key={index}
                            className="position-relative mr-2 mb-2"
                            style={{ width: '100px', height: '100px' }}
                        >
                            <img
                                src={`${config.apiPath}/uploads/${img}`} // ใส่พาธสมบูรณ์
                                alt={`product-${item.id}-${index}`}
                                className="img-thumbnail"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <button
                                type="button"
                                className="btn btn-danger btn-sm position-absolute"
                                style={{ top: '5px', right: '5px' }}
                                onClick={() => handleRemoveImage(item, img)} // เพิ่มฟังก์ชันสำหรับลบรูป
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            );
        }
        return <span>No Image</span>;
    };
    
    const selectedFileExcel = (fileInput) => {
        if (fileInput !== undefined) {
            if (fileInput.length > 0){
                setFileExcel(fileInput[0]);
            }
        }
    }

    const handleUploadExcel = async () => {
        try {
            const formData = new FormData();
            formData.append('fileExcel', fileExcel);

            const res = await axios.post(config.apiPath + '/product/uploadFromExcel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('token')
                }
            });

            if (res.data.message === 'success') {
                Swal.fire({
                    title: 'upload file',
                    text: 'upload success',
                    icon: 'success',
                    timer: 1000
                });
                fetchData();

                document.getElementById('modalExcel_btnClose').click();
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }
    const clearFormExcel = () => {
        refExcel.current.value = '';
        setFileExcel(null);
    }
    
    return<BackOffice>
        <div className="h4 pl-3" style={{ color: '#5A0D6C' }}>Product</div>
            <div className="pl-3">
                <button onClick={clearForm} className="btn btn-primary mr-3" data-toggle="modal" data-target="#modalProduct">
                    <i className="fa fa-plus mr-2"></i>เพิ่มสินค้า
                </button>
                <button onClick={clearFormExcel} className="btn btn-success" data-toggle="modal" data-target="#modalExcel">
                    <i className="fa fa-arrow-down mr-2"></i>เพิ่มสินค้าด้วยไฟล์ Excel
                </button>
            </div>
        <MyModal id="modalProduct" title="สินค้า" >

             {/* general */}
            <div className="mt-3" >
                {showImage(product)}
            <div>อัปโหลดรูปภาพ</div>
                <input
                    className="form-control"
                    type="file"
                    multiple
                    ref={refImg}
                    onChange={(e) => selectedFiles(e.target.files)}
                />
            </div>

            <div>
                <div>ชื่อสินค้า</div>
                    <input 
                    value={product.name} 
                    className="form-control" 
                    onChange={e => setProduct({ ...product, name: e.target.value})}>
                    </input>
            </div>
            <div className="mt-3">
                <div>ราคาทุน</div>
                    <input 
                    value={product.cost} 
                    className="form-control"
                    onChange={e => setProduct({ ...product, cost: e.target.value})}>
                    </input>
            </div>
            <div className="mt-3">
                <div>ราคาขาย</div>
                    <input 
                    value={product.price} 
                    className="form-control" 
                    onChange={e => setProduct({ ...product, price: e.target.value})}>
                    </input>
            </div>
            {/* <div className="mt-3">
                <div className="mb-3">{showImage(product)}</div>
                <div>ภาพสินค้า</div>
                <input className="form-control" type="file" ref={refImg} onChange={e => selectedFile(e.target.files)}></input>
            </div> */}
            <div className="mt-3">
                <h6>ส่วนที่ 1</h6>
            </div>
            <div className="d-flex justify-content-between mt-3">        
                <div style={{ flex: 1, marginRight: '10px' }}>
                    <h6>คำบรรยาย</h6>
                    <input 
                        value={product.detail1} 
                        className="form-control"
                        onChange={e => setProduct({ ...product, detail1: e.target.value})}
                        />
                        
                </div>
                <div className="ml-3">
                    <h6>อัปโหลดรูปภาพบรรยาย</h6>
                    {showImage(product)}
                    <input
                        className="form-control"
                        type="file"
                        multiple
                        ref={refImg}
                        onChange={(e) => selectedFiles(e.target.files)}
                    />
                </div>
            </div> 
            <div className="mt-3">
                <h6>ส่วนที่ 2</h6>
            </div>
            <div className="d-flex justify-content-between mt-3">        
                <div>
                    <h6>อัปโหลดรูปภาพบรรยาย</h6>
                    {showImage(product)}
                    <input
                        className="form-control"
                        type="file"
                        multiple
                        ref={refImg}
                        onChange={(e) => selectedFiles(e.target.files)}
                    />
                </div>
                <div className="ml-3" style={{ flex: 1, marginRight: '10px' }}>
                    <h6>คำบรรยาย</h6>
                    <input 
                        value={product.detail2} 
                        className="form-control" 
                        onChange={e => setProduct({ ...product, detail2: e.target.value})}></input>
                </div>
                
            </div>
            <div className="mt-3">
                <h6>ส่วนที่ 3</h6>
            </div>
            <div className="d-flex justify-content-between mt-3">        
                <div style={{ flex: 1, marginRight: '10px' }}>
                    <h6>คำบรรยาย</h6>
                    <input 
                        value={product.detail3} 
                        className="form-control" 
                        onChange={e => setProduct({ ...product, detail3: e.target.value})}></input>
                </div>
                <div className="ml-3">
                    <h6>อัปโหลดรูปภาพบรรยาย</h6>
                    {showImage(product)}
                    <input
                        className="form-control"
                        type="file"
                        multiple
                        ref={refImg}
                        onChange={(e) => selectedFiles(e.target.files)}
                    />
                </div>
            </div>            
            
            <div className="mt-3">
                <button className="btn btn-primary" onClick={handleSave}>
                    <i className="fa fa-check mr-2"></i>save
                </button>
            </div>
        </MyModal>
        <div className="pl-3">
                <table className="mt-3 table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ภาพสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th width="150px" className="text-right">ราคาต้นทุน</th>
                            <th width="150px" className="text-right">ราคาขาย</th>
                            <th width="200px"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.length > 0 ? products.map(item =>
                        <tr key={item.id}>
                            <td>{showImage(item)}</td>
                            <td>{item.name}</td>
                            <td className="text-right">{item.cost}</td>
                            <td className="text-right">{item.price}</td>
                            <td className="text-center">
                                <button className="btn btn-primary mr-2" 
                                        data-toggle="modal" 
                                        data-target="#modalProduct" 
                                        onClick={() => setProduct(item)}>
                                    <i className="fa fa-edit"></i> แก้ไข
                                </button>
                                <button className="btn btn-danger" onClick={() => handleRemove(item)}>
                                    <i className="fa fa-times"></i> ลบ
                                </button>
                            </td>
                        </tr>
                    ) : <tr><td colSpan="5" className="text-center">ไม่มีข้อมูล</td></tr>}
                    </tbody>
                </table>
            <MyModal id="modalExcel" title="เลือกไฟล์">
                    <div>เลือกไฟล์</div>
                    <input className="form-control" type="file" ref={refExcel} onChange={e => selectedFileExcel(e.target.files)}></input>
                    <button className="mt-3 btn btn-primary" onClick={handleUploadExcel}>
                        <i className="fa fa-check mr-2"></i>Save
                    </button>
            </MyModal>
        </div>
        
    </BackOffice>
}

export default Product;