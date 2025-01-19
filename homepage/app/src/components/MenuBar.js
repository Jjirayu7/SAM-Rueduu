import { Link } from "react-router-dom";

function MenuBar () {

    return(
<<<<<<< HEAD
        <>
    
        <div className="modal" tabIndex="-1" id="modalMenu" data-bs-backdrop="false">
            <div className="modal-dialog" style={{ position: "absolute", top: "10px", left: "10px", margin: 0, width:"350px"}}>
                <div className="modal-content">                  
                    <div className="modal-body m-3">
                        <div className="mt-1">
                            <nav>
                                <Link to="/" className="nav-link">
                                    <h6 className="ms-2 text-color">หน้าหลัก</h6>  
                                </Link>                                                
                            </nav>
                            <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                                </div>
                            <div className="mt-3">
                                <Link to="/productMain" class="nav-link">
                                    <h6 className="ms-2 text-color">สินค้า</h6>  
                                </Link>                  
                            </div>
                            <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                                </div>
                            <div className="mt-3">
                                <h6 className="ms-2 text-color">ความรู้</h6>                   
                            </div>
                            <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                                </div>
                            <div className="mt-3">
                                <h6 className="ms-2 text-color">ติดต่อเรา</h6>                   
                            </div>
                            <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                                </div>
                            <div className="mt-3">
                                <h6 className="ms-2 text-color">วิธีใช้งาน</h6>                   
                            </div>
                            <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                                </div>
                            <div className="mt-3">
                                <h6 className="ms-2 text-color">ประวัติการสั่งซื่อ</h6>                   
                            </div>
                            <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                                </div>
                            <div className="mt-3">
                                <Link to="/signIn" className="nav-link">
                                    <h6 className="ms-2 text-color">เข้าสู่ระบบ</h6>                   
                                </Link>
                            </div>
                        </div>      
                    </div>
                </div>               
            </div>
        </div>
=======
        <>                
            <div className="m-3">
                <div className="mt-1">
                    <nav>
                        <Link to="/" className="nav-link">
                            <h6 className="ms-2 text-color">หน้าหลัก</h6>  
                        </Link>                                                
                    </nav>
                    <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                        </div>
                    <div className="mt-3">
                        <Link to="/productMain" class="nav-link">
                            <h6 className="ms-2 text-color">สินค้า</h6>  
                        </Link>                  
                    </div>
                    <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                        </div>
                    <div className="mt-3">
                        <h6 className="ms-2 text-color">ความรู้</h6>                   
                    </div>
                    <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                        </div>
                    <div className="mt-3">
                        <h6 className="ms-2 text-color">ติดต่อเรา</h6>                   
                    </div>
                    <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                        </div>
                    <div className="mt-3">
                        <h6 className="ms-2 text-color">วิธีใช้งาน</h6>                   
                    </div>
                    <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                        </div>
                    <div className="mt-3">
                        <h6 className="ms-2 text-color">ประวัติการสั่งซื่อ</h6>                   
                    </div>
                    <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                        </div>
                    <div className="mt-3">
                        <Link to="/signIn" className="nav-link">
                            <h6 className="ms-2 text-color">เข้าสู่ระบบ</h6>                   
                        </Link>
                    </div>
                </div>      
            </div>
>>>>>>> 5f2f14a (update backoff)
        </>
    )
}

export default MenuBar;