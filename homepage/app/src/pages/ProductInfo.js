import React from "react";
import { Helmet } from "react-helmet";
import HomePage from "../components/HomePage";


function ProductInfo() {

  const pageTitle = "";

  return <HomePage title={pageTitle}>
    <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Cart page" />
      </Helmet>

      <div>
        <div className="d-flex justify-content-center">
          <div>
            <div
              className="card m-5 w-100 h-50"
              style={{
                maxWidth: "600px",
                borderRadius: "30px",
                borderColor: "#D8BABD",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="d-flex justify-content-center">
                <img src="imgnot.jpg" alt="Product" className="w-75 m-3 rounded-1" />
              </div>

              <ul className="d-flex justify-content-around mt-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li className="m-2">
                  <img src="imgnot.jpg" alt="Product" className="w-100 rounded-1" />
                </li >
                <li className="m-2">
                  <img src="imgnot.jpg" alt="Product" className="w-100 rounded-1" />
                </li>
                <li className="m-2">
                  <img src="imgnot.jpg" alt="Product" className="w-100 rounded-1" />
                </li>
              </ul>
            </div>
          </div>

          <div
            className="card m-5 w-100"
            style={{
              maxWidth: "600px",
              borderRadius: "50px",
              borderColor: "#D8BABD",
              backgroundColor: "#ffffff",
            }}
          >
            
            <div className="p-5">
              <div>
                <h4>
                  ชื่อสินค้า
                </h4>
              </div>
              <div>
                <h6>
                สับปะรด | รหัสสินค้า DR-123
                </h6>
                </div>
              
              <div className="d-flex justify-content-between" style={{ marginTop: "400px", marginBottom: "20px" }}>
                <div className="d-flex justify-content-start">                 
                    <h4 className="mt-1 m-2">200.00 B</h4>                    
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn rounded-pill" style={{backgroundColor: "#5B166C"}}>
                    <h6 className="mt-1 m-2 text-white">ชำระเงิน</h6>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      <div className="container">
        <div >
          <div className="d-flex justify-content-center" style={{ marginTop: "50px" }}>
          <div className="p-3" style={{ flex: 1, overflowWrap: 'break-word' }}>
          <h5 style={{ textAlign: 'right', marginRight: "20px" }}>รายละเอียดสินค้า</h5>
              <p >สับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระ สับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระ</p>
            </div>
            <div className="p-3 d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
              <img src="imgnot.jpg" alt="Product Detail" className="w-75 rounded-1" />
            </div>
          </div>
        </div>
        <div >
          <div className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
            <div className="p-3 d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
              <img src="imgnot.jpg" alt="Product Detail" className="w-75 rounded-1" />
            </div>
          <div className="p-3" style={{ flex: 1, overflowWrap: 'break-word' }}>
          <h5 style={{ textAlign: 'left', marginRight: "20px" }}>รายละเอียดสินค้า</h5>
              <p >สับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระ สับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระ</p>
            </div>            
          </div>
        </div>
        <div >
          <div className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
          <div className="p-3" style={{ flex: 1, overflowWrap: 'break-word' }}>
          <h5 style={{ textAlign: 'right', marginRight: "20px" }}>รายละเอียดสินค้า</h5>
              <p >สับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระ สับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระสับปะรดเป็นผลไม้ที่มีรสชาติหวานและเปรี้ยว มีประโยชน์ต่อสุขภาพมากมาย เช่น ช่วยย่อยอาหาร เสริมสร้างภูมิคุ้มกัน และมีสารต้านอนุมูลอิสระ</p>
            </div>
            <div className="p-3 d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
              <img src="imgnot.jpg" alt="Product Detail" className="w-75 rounded-1" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ margin: "70px" }}>
        <button className="btn rounded-pill" style={{backgroundColor: "#5B166C"}}>
            <h6 className="mt-1 m-2 text-white">เพิ่มสินค้า</h6>
            </button>
        </div>       
      </div>
      </div>

  </HomePage>
}

export default ProductInfo;