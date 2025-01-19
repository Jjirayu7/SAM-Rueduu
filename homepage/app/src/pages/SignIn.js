import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
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
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    } catch (e) {
      if (e.response && e.response.status === 401) {
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
    }
  };

  return (
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
