import BackOffice from "../components/BackOffice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../config";
import dayjs from "dayjs";
import MyModal from "./MyModal";

function BillSale() {
    const [billSales, setBillSeles] = useState([]);
    const [billSaleDetail, setBillSelesDetail] = useState([]);
    const [sumPrice, setSumPrice] = useState(0);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(config.apiPath + '/api/sale/list', config.headers());

            if (res.data.results !== undefined) {
                setBillSeles(res.data.results);
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    const openModalInfo = async (item) => {
        try {
            const res = await axios.get(config.apiPath + '/api/sale/billInfo/' + item.id, config.headers());

            if (res.data.results !== undefined) {
                setBillSelesDetail(res.data.results);

                let mySumPrice = 0;
                for (let i = 0; i < res.data.results.length; i++) {
                    mySumPrice += parseInt(res.data.results[i].price);
                }

                setSumPrice(mySumPrice);
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
            
        }
    }

    const handlePay = async (item) => {
        try {
            const button = await Swal.fire({
                title: 'ชำระเงิน',
                text: '',
                icon: 'question',
                showCancelButton: true,
                showConfirmButton: true
            });

            if (button.isConfirmed) {
                const res = await axios.get(config.apiPath + '/api/sale/updateStatusToPay/' + item.id, config.headers());

                if (res.data.message === 'success') {
                    Swal.fire({
                        title: 'save',
                        text: 'save',
                        icon: 'success',
                        timer: 1000
                    })

                    fetchData();

                }
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    const handleSend = async (item) => {
        try {
            const button = await Swal.fire({
                title: 'ส่งแล้ว',
                text: '',
                icon: 'question',
                showCancelButton: true,
                showConfirmButton: true
            });

            if (button.isConfirmed) {
                const res = await axios.get(config.apiPath + '/api/sale/updateStatusToSend/' + item.id, config.headers());

                if (res.data.message === 'success') {
                    Swal.fire({
                        title: 'save',
                        text: 'save',
                        icon: 'success',
                        timer: 1000
                    })

                    fetchData();

                }
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    const handleCancel = async (item) => {
        try {
            const button = await Swal.fire({
                title: 'ยกเลิก',
                text: '',
                icon: 'question',
                showCancelButton: true,
                showConfirmButton: true
            });

            if (button.isConfirmed) {
                const res = await axios.get(config.apiPath + '/api/sale/updateStatusToCancel/' + item.id, config.headers());

                if (res.data.message === 'success') {
                    Swal.fire({
                        title: 'save',
                        text: 'save',
                        icon: 'success',
                        timer: 1000
                    })

                    fetchData();

                }
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    const displayStatusText = (item) => {
        if (item.status === 'wait') {
            return <div>รอตรวจสอบ</div>
        }else if (item.status === 'pay') {
            return <div>ชำระเงินแล้ว</div>
        }else if (item.status === 'send') {
            return <div>ส่งแล้ว</div>
        }else if (item.status === 'cancel') {
            return <div>ยกเลิก</div>
        }
    }


    return<BackOffice>
        <div className="card">
            <div className="card-header">
                <div className="card-title">รายงานยอดขาย</div>
            </div>
            <div className="card-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>ลูกค้า</th>
                        <th>เบอร์</th>
                        <th>ที่อยู่</th>
                        <th>วันที่</th>
                        <th>เวลา</th>
                        <th>สถานะ</th>
                        <th width="500px"></th>
                    </thead>
                    <tbody>
                        {billSales.length > 0 ? billSales.map(item =>
                            <tr key={item.id}>
                                <td>{item.customerName}</td>
                                <td>{item.customerPhone}</td>
                                <td>{item.customerAddress}</td>
                                <td>{dayjs(item.payDate).format("YYYY-MM-DD")}</td>
                                <td>{item.payTime}</td>
                                <td>{displayStatusText(item)}</td>
                                <td className="text-center">
                                    <button className="btn btn-secondary mr-2"
                                    data-toggle ="modal"
                                    data-target ="#modalInfo"
                                    onClick={e => openModalInfo(item)}>
                                        <i></i>รายการ
                                    </button>
                                    <button className="btn btn-secondary mr-2"
                                    onClick={e => handlePay(item)}>
                                        <i></i>ชำเงินแล้ว
                                    </button>
                                    <button className="btn btn-secondary mr-2"
                                    onClick={e => handleSend(item)}>
                                        <i></i>จัดส่งแล้ว
                                    </button>
                                    <button className="btn btn-secondary mr-2"
                                    onClick={e => handleCancel(item)}>
                                        <i></i>ยกเลิก
                                    </button>
                                </td>
                            </tr>
                        ) : <></>}
                        
                    </tbody>
                </table>

            </div>
        </div>

        <MyModal id="modalInfo" title="รายการ">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>รายการ</th>
                        <th className="text-right">ราคา</th>
                        <th className="text-right">จำนวน</th>
                    </tr>
                </thead>
                <tbody>
                    {billSaleDetail.length > 0 ? billSaleDetail.map(item =>
                        <tr key={item.id}>
                            <td>{item.Product.name}</td>
                            <td className="text-right">{parseInt(item.price).toLocaleString('th-TH')}</td>
                            <td className="text-right">1</td>
                            </tr>
                    ): <></>}
                    
                </tbody>
            </table>
            <div>
                ราคารวม {sumPrice.toLocaleString('th-th')} บาท
            </div>
        </MyModal>
    </BackOffice>
}

export default BillSale;