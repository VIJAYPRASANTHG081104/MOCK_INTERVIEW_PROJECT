import React, { useState } from "react";
import { Formik, Form } from "formik";
import LoginInput from "../inputs/loginInput/index";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ADMINLOGINROUTE } from "../../routes/BackendPath";
import { ToastContainer, toast } from "react-toastify";
import { loginValidation } from "../../helpers/validation";
import Cookie from 'js-cookie'
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const AdminLoginForm = ({ setVisible,setLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInfos = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;


  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginSubmit = async () => {
    try {
      if(loginValidation(login)){
      setLoading(true);
      const { data } = await axios.post(ADMINLOGINROUTE, login);

      toast.success(data.msg);
      setTimeout(() => {
        setLoading(false);
        dispatch({type:"LOGIN",payload:data});
        Cookie.set('user',JSON.stringify(data));
        navigate("/admin/portal/year");
      }, 1000);

      }
    } catch (error) {
      setLoading(false);
      return toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="login_wrapper">
      <div className="login_wrap">
        <div className="login_header">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login_form_wrap">
          <h2>ADMIN</h2>
          <h3>Welcome Back</h3>
          <p>Login to continue</p>
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            onSubmit={loginSubmit}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleLoginChange}
                />
                <button type="submit" className="blue_btn">
                  Login
                </button>
                <Link to={"/reset"}>forget Password</Link>
              </Form>
            )}
          </Formik>
          <div className="splitter"></div>
          <button className="green_btn" onClick={() => setVisible(true)}>
            Sign up
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLoginForm;
