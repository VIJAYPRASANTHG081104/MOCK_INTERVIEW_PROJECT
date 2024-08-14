import React from "react";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

const LoginInput = ({ placeholder,setError, ...props }) => {
  return (
    <div className="input_wrap">
      <input placeholder={placeholder}  {...props} />
    </div>
  );
};

export default LoginInput;
