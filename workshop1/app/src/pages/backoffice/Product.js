import { useEffect, useRef, useState } from "react";
import BackOffice from "../../components/BackOffice";
import MyModal from "../../components/MyModal";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../../config";
import { Await } from "react-router-dom";

function Product() {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [img, setImg] = useState({});
    const [fileExcel, setFileExcel] = useState({});
    const refImg = useRef();
    const refExcel = useRef();
    
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
                text: 'e.message',
                icon: 'error'
            })
        }
    }
    const handleSave = async() => {
        try {
            product.img = await handleUpload(); 
            product.cost = parseInt(product.cost);
            product.price = parseInt(product.price);

            let res;
            
            if(product.id === undefined){
                res = await axios.post(config.apiPath + '/product/create', product, config.headers())
            }else{
                res = await axios.put(config.apiPath + '/product/update', product, config.headers())
            }

            if (res.data.message === 'success') {
                Swal.fire({
                    title: 'save',
                    text: 'success',
                    icon: 'success',
                    timer: 500
                })
                document.getElementById('modalProduct_btnClose').click();
                fetchData();
            }
        } catch (error) {
            Swal.fire({
                title: 'error',
                text: error.message,
                icon: 'error'
            })
            
        }
    }

    const clearForm = () => {
        setProduct({
            name: '',
            price: '',
            cost: ''
        })
        setImg(null);
        refImg.current.value = "";
    }

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

    const selectedFile = (inputFile) => {
        if (selectedFile !== undefined){
            if (inputFile.length>0){
                setImg(inputFile[0]);
            }
        }
    }
    const handleUpload = async() => {
        try {
            const formData = new FormData();
            formData.append('img', img);

            const res = await axios.post(config.apiPath + '/product/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('token')
                }
            })
            if (res.data.newName !== undefined) {
                return res.data.newName;
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
            return "";
        }
    }
    const showImage = (item) => {
        if (item.img !== "") {
            return <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                <img alt="" className="img-fluid" src={`${config.apiPath}/uploads/${item.img}`} style={{ maxHeight: "300px" }}/>
                </div>
        } else {
            return <span>No Image Available</span>;
        }
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
            

        

        <MyModal id="modalProduct" title="สินค้า">
            <div>
                <div>ชื่อสินค้า</div>
                <input value={product.name} className="form-control" onChange={e => setProduct({ ...product, name: e.target.value})}></input>
            </div>
            <div className="mt-3">
                <div>ราคาทุน</div>
                <input value={product.cost} className="form-control" onChange={e => setProduct({ ...product, cost: e.target.value})}></input>
            </div>
            <div className="mt-3">
                <div>ราคาขาย</div>
                <input value={product.price} className="form-control" onChange={e => setProduct({ ...product, price: e.target.value})}></input>
            </div>
            <div className="mt-3">
                <div className="mb-3">{showImage(product)}</div>
                <div>ภาพสินค้า</div>
                <input className="form-control" type="file" ref={refImg} onChange={e => selectedFile(e.target.files)}></input>
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
                                onClick={e => setProduct(item)}>
                                    <i className="fa fa-edit"></i> แก้ไข
                                </button>
                                <button className="btn btn-danger" onClick={e => handleRemove(item)}>
                                    <i className="fa fa-times"></i> ลบ
                                </button>
                            </td>
                        </tr>
                    ) : <></>}
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