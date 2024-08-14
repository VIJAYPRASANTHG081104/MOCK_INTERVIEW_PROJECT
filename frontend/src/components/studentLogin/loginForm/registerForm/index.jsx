import React, { useState } from "react";
import LoginInput from "../../../inputs/loginInput";
import { Form, Formik } from "formik";
import "./style.css";
import axios from "axios";
import { REGISTERROUTE } from "../../../../routes/BackendPath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterImg from "../../../../assets/registerBg.jpg";
import Logo from "../../../../assets/logo.png"
import { registerValidateUser } from "../../../../helpers/validation";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({setVisible,setLoading}) => {
  const navigate = useNavigate();
  const registerInfo = {
    name: "",
    rollnumber: "",
    department: "",
    batch: "",
    email: "",
    password: "",
  };
  const [register, setRegister] = useState(registerInfo);
  const { name, rollnumber, batch, email, password } = register;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const registerSubmit = async () => {
    try {
      if(registerValidateUser(register)){
        setLoading(true);
        const { data } = await axios.post(REGISTERROUTE, register);
        toast.success(data.msg);
        setTimeout(() => {
          setLoading(false);
          navigate("/student/portal");
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
            <button onClick={()=>setVisible(false)}>Back to Login</button>
          </div>
          <h3>Register</h3>
          <div className="register_form_wrap">
            <Formik
              enableReinitialize
              initialValues={{ email, password, name, batch, rollnumber }}
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
                    name="rollnumber"
                    placeholder="Roll number"
                    onChange={handleRegisterChange}
                    
                  />
                  <LoginInput
                    type="text"
                    name="department"
                    placeholder="department"
                    onChange={handleRegisterChange}
                  />
                  <label>Batch: </label>
                  <select
                    name="batch"
                    onChange={(e) => {
                      handleRegisterChange({
                        target: {
                          name: e.target.name,
                          value: e.target.value,
                        },
                      });
                    }}
                  >
                    <option className="option">2023-2027</option>
                    <option className="option">2022-2026</option>
                    <option className="option">2021-2025</option>
                    <option className="option">2020-2024</option>
                  </select>
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

export default RegisterForm;
