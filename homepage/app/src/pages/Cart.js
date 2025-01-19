import { Helmet } from "react-helmet";
import MyModal from "../components/MyModal";
import Img from "../components/Img";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import HomePage from "../components/HomePage";


function Cart() {

  const pageTitle = "คำสั่งซื้อ";
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
            return <img className="w-25 p-5" height="150px" src={imgPath} alt=""></img>
        }
    }
    
  return<HomePage title={pageTitle}> 
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Cart page" />
      </Helmet>
      <div>
        <div className="d-flex justify-content-center">
          <div
            className="card w-100"
            style={{
              maxWidth: "900px",
              borderRadius: "30px",
              borderColor: "#D8BABD",
              backgroundColor: "#ffffff",
              marginBottom: "400px"
            }}
          >
            {carts.length > 0 ? carts.map(item =>
              <div className="d-flex flex-column flex-md-row align-items-center" key={item.id}>
              <div className="p-5">
                <input type="checkbox" className="custom-checkbox" />
              </div>
              {showImage(item)}
              <div className="text-wrap overflow-hidden p-3 w-50">
                <h5
                  className="mb-0 text-truncate"
                  data-bs-toggle="tooltip"
                  title="ชื่อสินค้าตัวอย่างยาวๆ เพื่อดูว่า responsive หรือไม่"
                >
                  {item.name}
                </h5>
              </div>

              <div className="d-flex quantity-buttons p-3 align-items-center">
                <button className="text-black">-</button>
                <span className="mx-2" text-black>1</span>
                <button className="text-black">+</button>
              </div>
            </div>
            ) : (
              <div className="text-center m-5">
                <i className="bi bi-cart-x fs-1 text-secondary"></i>
                <h6 className="mt-3 text-secondary">ไม่มีสินค้าในตะกร้า</h6>
              </div>
            )}
            
            <div style={{ borderTop: "1px solid #D8BABD", width: "90%", margin: "auto" }}>
            </div>
            <div className="d-flex justify-content-end p-5">
              <div className="d-flex mt-2">
                <h4>ราคารวม : </h4><h4>฿ 100</h4>
              </div>
              <button className="btn ms-3 rounded-pill" style={{backgroundColor: "#5B166C"}}>
                <h6 className="mt-1 m-2 text-white">ชำระเงิน</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomePage>
  
}

export default Cart;
