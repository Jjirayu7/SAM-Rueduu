import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config";
import Swal from "sweetalert2";
import MyModal from "../components/MyModal";
import dayjs from "dayjs";
import HomePage from "../components/HomePage";
import { Link, useNavigate } from "react-router-dom";

function ProductMain() {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [recordInCarts, setRecordInCarts] = useState(0);
    const [sumQty, setSumQty] = useState(0);
    const [sumPrice, setSumPrice] = useState(0);
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [payDate, setPayDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
    const [payTime, setPayTime] = useState('');
    
    useEffect(() => {
        fetchData();
        fetchDataFromLocal();
    }, []);

    const handleSave = async () => {
        try {
            const payLoad = {
                customerName: customerName,
                customerPhone: customerPhone,
                customerAddress: customerAddress,
                payDate: payDate,
                payTime: payTime,
                carts: carts  
            }

            const res = await axios.post(config.apiPath + '/api/sale/save', payLoad);

            if (res.data.message === 'success') {
                localStorage.removeItem('carts');
                setRecordInCarts(0);
                setCarts([]);

                Swal.fire({
                    title: 'บันทึกข้อมูล',
                    text: 'ระบบบันทึกข้อมูลของคุณแล้ว',
                    icon: 'success'
                })

                document.getElementById('modalCart_btnClose').click();
                setCustomerName('');
                setCustomerPhone('');
                setCustomerAddress('');
                setPayDate(new Date());
                setPayTime('');
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    const handleRemove = async (item) => {
        try {
            const button = await Swal.fire({
                title: 'ลบสินค้า',
                text: 'คุณต้องการลบสินค้าออกจากตะกร้าใช่หรือไม่',
                icon: 'question',
                showCancelButton: true,
                showConfirmButton: true
            })
        if (button.isConfirmed) {
            let arr = carts;

            for (let i = 0; i < arr.length; i++){
                const itemInCarts = arr[i];

                if (item.id === itemInCarts.id) {
                    arr.splice(i, 1);
                }
            }
            setCarts(arr);
            setRecordInCarts(arr.length);

            localStorage.setItem('carts', JSON.stringify(arr));

            callculatePriceAndQty(arr);
        }
        } catch (e) {
            Swal.fire({
                title: "error",
                text: e.message,
                icon: "error"
            })
        }
    }

    const callculatePriceAndQty = (itemInCarts) => {
        let sumQty = 0;
        let sumPrice = 0;

        for (let i = 0; i < itemInCarts.length; i++) {
            const item = itemInCarts[i];
            sumQty++;
            sumPrice += parseInt(item.price);
        }
        setSumPrice(sumPrice);
        setSumQty(sumQty);
    }
    const addToCart = (item) => {
        let arr = carts;
        if (arr === null) {
            arr = [];
        }
        arr.push(item);

        setCarts(arr);
        setRecordInCarts(arr.length);

        localStorage.setItem('carts', JSON.stringify(carts));

        fetchDataFromLocal();
    }

    const fetchDataFromLocal = () => {
        const itemInCarts = JSON.parse(localStorage.getItem('carts'));
        if (itemInCarts !== null) {
            setCarts(itemInCarts);
            setRecordInCarts(itemInCarts !== null ? itemInCarts.length : 0);

            callculatePriceAndQty(itemInCarts);
        }

    }

    const fetchData = async () => {
        try {
            const res = await axios.get(config.apiPath + '/product/list');
            if (res.data.result !== undefined) {
                setProducts(res.data.result);
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
            
        }
    }

    function showImage(item) {
        if (item.img !== undefined){
            let imgPath = config.apiPath + /uploads/ + item.img;
            if (item.img === "") imgPath = "imgnot.jpg";
            return <img className="card-img-top" height="150px" src={imgPath} alt=""></img>
        }
    }
    return<HomePage>
        <div className="container mt-3">
            <div className="banner" style={{ backgroundColor: "#C7D5E9", borderRadius: "30px" }}>
                <h1 className="banner-text">B</h1>
                <h1 className="banner-text">A</h1>
                <h1 className="banner-text">N</h1>
                <h1 className="banner-text">N</h1>
                <h1 className="banner-text">E</h1>
                <h1 className="banner-text">R</h1>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div
                        className="w-75 d-flex justify-content-center"
                        style={{ backgroundColor: "#C7D5E9", borderRadius: "30px" }}
                        >
                        {/* กล่อง 1: โค้งเฉพาะด้านซ้าย */}
                            <div
                                className="w-75 ms-2 my-2 d-le"
                                style={{
                                backgroundColor: "#FFF8DE",
                                borderTopLeftRadius: "30px",
                                borderBottomLeftRadius: "30px",
                                }}
                            >
                                <h5 className="m-3 text-center">คิมหันตฤดู</h5>
                            </div>
                            
                            {/* กล่อง 2: ไม่มีขอบโค้ง */}
                            <div
                                className="w-75 my-2 mx-1"
                                style={{
                                backgroundColor: "#C5D3E8",
                                }}
                            >
                                <h5 className="m-3 text-center">เหมันตฤดู</h5>
                            </div>
                            
                            {/* กล่อง 3: โค้งเฉพาะด้านขวา */}
                            <div
                                className="w-75 me-2 my-2"
                                style={{
                                backgroundColor: "#A6AEBF",
                                borderTopRightRadius: "30px",
                                borderBottomRightRadius: "30px",
                                }}
                            >
                                <h5 className="m-3 text-center">วสันตฤดู</h5>
                            </div>
                        </div>                   
                </div>
                      
            {/* <div className="float-end">
                ตะกร้าทดสอบ
                <button 
                data-bs-toggle="modal"
                data-bs-target="#modalCart"
                className="btn btn-outline-success ms-2 me-2">
                    <i className="fa fa-shopping-cart me-2"></i>
                    {recordInCarts}
                </button>
                ชิ้น
            </div> */}
            <div className="mt-5">
                <div className="clearfix">
                    <h5>สินค้ามาใหม่</h5>
                    </div>
                <div className="row">
                    {products.length > 0 ? products.map(item =>
                        <div className="col-2 mt-1" key={item.id}>
                            <div className="card">
                                <div className="m-3">{showImage(item)}</div>
                                <div className="card-body">
                                    <h5>{item.name}</h5>
                                    <h6>{item.price.toLocaleString('th-TH')}</h6>
                                    <div className="text-center">
                                        {/* <button className="btn btn-primary" onClick={e => addToCart(item)}>
                                            <i className="fa fa-shopping-cart me-2"></i>
                                            <h6>เพิ่มลงตะกร้า</h6>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) : <></>}
                </div>
            </div>
           

        </div>
        <MyModal id="modalCart" title="ตะกร้าสินค้า">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>name</th>
                        <th className="text-end">price</th>
                        <th className="text-end">piece</th>
                        <th width="60px"></th>
                    </tr>
                </thead>
                <tbody>
                    {carts.length > 0 ? carts.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td className="text-end">{item.price.toLocaleString('th-TH')}</td>
                            <td className="text-end">1</td>
                            <td className="text-center">
                                <button className="btn btn-danger" onClick={e => handleRemove(item)}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </td>
                        </tr>
                    ): <></>}
                </tbody>
            </table>
            <div className="text-center">
                    จำนวน {sumQty} ราคา {sumPrice}
            </div>
            <div className="mt-3">
                <div>
                    <div>ชื่อ</div>
                    <input className="form-control" onChange={e => setCustomerName(e.target.value)}></input>
                </div>
                <div className="mt-3">
                    <div>เบอร์ติดต่อ</div>
                    <input className="form-control" onChange={e => setCustomerPhone(e.target.value)}></input>
                </div>
                <div className="mt-3">
                    <div>ที่อยู่</div>
                    <input className="form-control" onChange={e => setCustomerAddress(e.target.value)}></input>
                </div>
                <div className="mt-3">
                    <div>วันที่</div>
                    <input className="form-control" type="date" value={payDate} onChange={e => setPayDate(e.target.value)}></input>
                </div>
                <div className="mt-3">
                    <div>เวลา</div>
                    <input className="form-control" onChange={e => setPayTime(e.target.value)}></input>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleSave}>
                    <i className="fa fa-check me-2"></i>ยืนยัน
                </button>
            </div>
        </MyModal>
    </HomePage>
}

export default ProductMain;