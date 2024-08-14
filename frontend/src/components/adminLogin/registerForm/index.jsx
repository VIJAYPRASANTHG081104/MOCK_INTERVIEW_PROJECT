import React, { useState } from "react";
import LoginInput from "../../inputs/loginInput/index";
import { Form, Formik } from "formik";
import "./style.css";
import axios from "axios";
import { ADMINREGISTERROUTE } from "../../../routes/BackendPath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterImg from "../../../assets/registerBg.jpg";
import Logo from "../../../assets/logo.png";
import { registerValidateAdmin } from "../../../helpers/validation";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useDispatch } from "react-redux";

const AdminRegisterForm = ({ setVisible, setLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerInfo = {
    name: "",
    staffnumber: "",
    email: "",
    password: "",
    department: "",
  };
  const [register, setRegister] = useState(registerInfo);
  const { name, staffnumber, email, department, password } = register;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const registerSubmit = async () => {
    try {
      setLoading(true);
      if (registerValidateAdmin(register)) {
        const { data } = await axios.post(ADMINREGISTERROUTE, register);

        setTimeout(() => {
          toast.success(data.msg);
          setLoading(false);
          dispatch({ type: "LOGIN", payload: data });
          Cookie.set("user", JSON.stringify(data));
          navigate("/admin/portal/year");
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      return toast.error(error.response.data.msg);
    }
  };
  return (
    <div className="background">
      <div className="register_main">
        <div className="register_wrapper">
          <div className="navbar">
            <img src={Logo} alt="" />
            <button onClick={() => setVisible(false)}>Back to Login</button>
          </div>
          <h3>Register</h3>
          <div className="register_form_wrap">
            <Formik
              enableReinitialize
              initialValues={{ name, staffnumber, email, department, password }}
              onSubmit={registerSubmit}
            >
              {(formik) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleRegisterChange}
                  />
                  <LoginInput
                    type="text"
                    name="staffnumber"
                    placeholder="staffnumber"
                    onChange={handleRegisterChange}
                  />
                  <LoginInput
                    type="text"
                    name="department"
                    placeholder="department"
                    onChange={handleRegisterChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    placeholder="Email address"
                    onChange={handleRegisterChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleRegisterChange}
                  />
                  <button type="submit" className="register_btn">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="image">
          <img src={RegisterImg} alt="img" />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminRegisterForm;
