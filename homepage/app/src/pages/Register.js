import axios from "axios";
import Swal from "sweetalert2";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
import { useState } from "react";
import config from "../config";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
<<<<<<< HEAD
    userName: "",
=======
    username: "",
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
    email: "",
    password: "",
    repassword: "",
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======

>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
    if (user.password !== user.repassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match",
        icon: "error",
      });
      return;
    }
<<<<<<< HEAD
    try {
      const res = await axios.post(config.apiPath + "/user/customer/register", user);
=======

    try {
      const res = await axios.post(config.apiPath + "/user/register", user);
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe

      Swal.fire({
        title: "Success",
        text: "Registration completed",
        icon: "success",
      });
<<<<<<< HEAD
      navigate("/signIn");
=======
      navigate("/login");
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: e.response?.data?.message || "An error occurred",
        icon: "error",
      });
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-image">
<<<<<<< HEAD
        <img src="logo-2.png" alt="Sign In Visual" />
=======
        <img src="imgnot.jpg" alt="Sign In Visual" />
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
      </div>
      <div className="signin-box">
        <div className="p-5" style={{ borderRadius: "30px", backgroundColor: "#fff5f6" }}>
          <h6
            className="login-box-msg"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
          >
            สมัครสมาชิก
          </h6>
          <form onSubmit={handleRegister}>
            <div className="d-flex justify-content-between mt-4">
              <div className="mx-2">
                <h6>ชื่อ</h6>
                <div className="input-group mb-3">
                  <input
                    style={{ borderRadius: "30px" }}
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                  />
                </div>
              </div>
              <div className="mx-2">
                <h6>นามสกุล</h6>
                <div className="input-group mb-3">
                  <input
                    style={{ borderRadius: "30px" }}
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="mx-2">
              <h6>ชื่อผู้ใช้</h6>
              <div className="input-group mb-3">
                <input
                  style={{ borderRadius: "30px" }}
                  type="text"
                  className="form-control"
                  placeholder=""
<<<<<<< HEAD
                  value={user.userName}
                  onChange={(e) => setUser({ ...user, userName: e.target.value })}
=======
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
                />
              </div>
            </div>
            <div className="mx-2">
              <h6>อีเมล</h6>
              <div className="input-group mb-3">
                <input
                  style={{ borderRadius: "30px" }}
                  type="email"
                  className="form-control"
                  placeholder=""
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>
            <div className="mx-2">
              <h6>รหัสผ่าน</h6>
              <div className="input-group mb-3">
                <input
                  style={{ borderRadius: "30px" }}
                  type="password"
                  className="form-control"
                  placeholder=""
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
              </div>
            </div>
            <div className="mx-2">
              <h6>ยืนยันรหัสผ่าน</h6>
              <div className="input-group mb-3">
                <input
                  style={{ borderRadius: "30px" }}
                  type="password"
                  className="form-control"
                  placeholder=""
                  value={user.repassword}
                  onChange={(e) => setUser({ ...user, repassword: e.target.value })}
                />
              </div>
            </div>
            <div className="mt-5" style={{ borderTop: "1px solid #D8BABD", width: "100%", margin: "auto" }}></div>
            <div className="mt-5 d-flex justify-content-center">
              <button type="submit" className="btn rounded-pill" style={{ backgroundColor: "#5B166C" }}>
                <h6 className="text-white mx-4">สมัครสมาชิก</h6>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Register;
=======
export default Register;
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
