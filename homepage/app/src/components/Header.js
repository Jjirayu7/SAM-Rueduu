import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Header({ title }) {
  
  const [headerTitle, setHeaderTitle] = useState('');

  useEffect(() => {
    setHeaderTitle(title || 'สามฤดู'); 
  }, [title]);

  return (
    <div className="container p-3">
    <div className="row">
      <div className="col-12">
        <div className="rounded p-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
            <Link to={-1} className="nav-link">
              <button className="custom-btn">
                <h5 className="text-color mb-2 mb-md-0">ย้อนกลับ</h5>
              </button>
            </Link>
            {headerTitle === "สามฤดู" ? (
              <Link to="/" className="nav-link">
                <h3 className="text-color text-bold mb-2 mb-md-0">{headerTitle}</h3>
              </Link>
            ) : (
              <h3 className="text-color text-bold mb-2 mb-md-0">{headerTitle}</h3>
            )}
            <Link to="/cart" className="nav-link">
              <button style={{ borderColor: "#D8BABD", borderRadius: "15px" }} className="btn">                           
                <i className="bi bi-cart fs-4 text-color"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Header;
