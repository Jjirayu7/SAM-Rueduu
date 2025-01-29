import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import config from "../config";
import { Helmet } from "react-helmet";

function SignIn() {
  const pageTitle = "เข้าสู่ระบบ";
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user.userName || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all fields",
        icon: "error",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(config.apiPath + "/user/customer/signIn", user);

      if (res.data.token) {
=======
import { useState } from "react";
import config from "../config";

function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(config.apiPath + "/user/signIn", user);

      if (res.data.token !== undefined) {
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    } catch (e) {
<<<<<<< HEAD
      if (e.response?.status === 401) {
=======
      if (e.response && e.response.status === 401) {
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
        Swal.fire({
          title: "Sign In",
          text: "Username or password invalid",
          icon: "warning",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: e.message,
          icon: "error",
        });
      }
<<<<<<< HEAD
    } finally {
      setLoading(false);
=======
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Sign In page" />
      </Helmet>

      <div className="signin-container">
        <div className="signin-image">
          <img src="logo-2.png" alt="Sign In Visual" />
        </div>
        <div className="signin-box">
          <div className="p-5" style={{ borderRadius: "30px", backgroundColor: "#fff5f6" }}>
            <div>
              <h6 className="login-box-msg" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "20vw" }}>
                ล็อคอิน
              </h6>
              <form onSubmit={handleSignIn}>
                <h6>ชื่อผู้ใช้</h6>
                <div className="input-group mb-3">
                  <input
                    style={{ borderRadius: "30px" }}
                    type="text"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                  />
                </div>
                <h6>รหัสผ่าน</h6>
                <div className="input-group mb-3">
                  <input
                    style={{ borderRadius: "30px" }}
                    type="password"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                </div>
                <div className="d-flex justify-content-end">
                <Link to="/forgotPassword">
                    <h6>ลืมรหัสผ่าน?</h6>
                  </Link>
                </div>
                <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}></div>
                <div className="mt-4 d-flex justify-content-center">
                  <button type="submit" className="btn rounded-pill" style={{ backgroundColor: "#5B166C" }} disabled={loading}>
                    <h6 className="text-white mx-4">{loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}</h6>
                  </button>
                </div>
              </form>
              <p className="d-flex justify-content-center mt-3">
                <h6>ยังไม่เป็นสมาชิกหรอ</h6>
                <Link to="/register">
                  <h6 className="text-center">สมัครสมาชิกเลย</h6>
                </Link>
              </p>
            </div>
=======
    <div className="signin-container">     
      <div className="signin-image">
        <img src="imgnot.jpg" alt="Sign In Visual" />
      </div>      
      <div className="signin-box">
        <div className="p-5" style={{ borderRadius: "30px", backgroundColor: "#fff5f6" }}>
          <div>
            <h6 className="login-box-msg" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: '20vw' }}>ล็อคอิน</h6>
            <form onSubmit={handleSignIn}>
              <h6>อีเมล</h6>
              <div className="input-group mb-3 ">               
                <input
                  style={{ borderRadius: "30px" }}
                  type="email"
                  className="form-control"
                  placeholder=""
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <h6>รหัสผ่าน</h6> 
              <div className="input-group mb-3">
                <input
                  style={{ borderRadius: "30px"}}
                  type="password"
                  className="form-control"
                  placeholder=""
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />                
              </div> 
                <div className="d-flex justify-content-end">
                  <h6>ลืมรหัสผ่าน?</h6>
                </div>
                <div style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}>
                    </div>
                <div className="mt-4 d-flex justify-content-center">
                  <button type="submit" className="btn rounded-pill" style={{backgroundColor: "#5B166C"}}>
                    <h6 className="text-white mx-4">เข้าสู่ระบบ</h6>
                  </button>
                </div>
            </form>
            <p className="d-flex justify-content-center mt-3">
              <h6>ยังไม่เป็นสมาชิกหรอ</h6>
              <Link to="/register">
                <h6 className="text-center">
                  สมัครสมาชิกเลย
                </h6>
              </Link>             
            </p>
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
          </div>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default SignIn;
=======
export default SignIn;
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
