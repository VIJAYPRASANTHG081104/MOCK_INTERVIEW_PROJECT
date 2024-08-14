import React, { useState } from "react";
import AdminLoginForm from "../../../components/adminLogin";
import AdminRegisterForm from "../../../components/adminLogin/registerForm";
import PulseLoader from "react-spinners/PulseLoader";

const AdminLogin = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <AdminLoginForm setLoading={setLoading} setVisible={setVisible} />
      {visible && (
        <AdminRegisterForm setLoading={setLoading} setVisible={setVisible} />
      )}
      {loading && (
        <div className="blur">
          <div className="loader">
            <PulseLoader color="blue" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
