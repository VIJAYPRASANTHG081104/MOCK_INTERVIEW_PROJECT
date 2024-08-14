import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../../components/studentLogin/loginForm";
import RegisterForm from "../../../components/studentLogin/loginForm/registerForm/index";
import PulseLoader from "react-spinners/PulseLoader";

const Login = () => {
  const [visible,setVisible] = useState(false);
  const [loading,setLoading] = useState(false);
  return <div>
    <LoginForm setLoading={setLoading} setVisible={setVisible}/>
    {
      visible && <RegisterForm setLoading={setLoading} setVisible={setVisible}/>
    }
    {loading && (
        <div className="blur">
          <div className="loader">
            <PulseLoader color="blue" />
          </div>
        </div>
      )}
  </div>;
};

export default Login;
