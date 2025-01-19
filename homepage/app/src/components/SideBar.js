<<<<<<< HEAD
import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">         
      <button className="custom-btn" data-bs-toggle="modal" data-bs-target="#modalMenu">
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-list fs-1 text-color"></i>
          <h4 
          className="mt-1 ms-2 text-color text-bold d-none d-md-block">
            เมนู
          </h4>
        </div>
      </button>             
    </div>
  )
=======
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="sidebar">
        <button className="custom-btn" onClick={toggleSidebar}>
          <div className="d-flex align-items-center justify-content-center">
            <i className="bi bi-list fs-1 text-color"></i>
            <h4 className="mt-1 ms-2 text-color text-bold d-none d-md-block">เมนู</h4>
          </div>
        </button>
      </div>

      <div className={`sidebar-menu ${isOpen ? "open" : ""}`} ref={sidebarRef}>
        <div className="sidebar-content">
          <nav>
            <MenuBar></MenuBar>
          </nav>
        </div>
      </div>
    </>
  );
>>>>>>> 5f2f14a (update backoff)
};

export default SideBar;
