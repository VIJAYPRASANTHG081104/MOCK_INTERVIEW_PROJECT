import React, { useState } from "react";
import "./style.css";
import year1 from "../..//../../assets/1.png";
import year2 from "../..//../../assets/2.png";
import year3 from "../../../../assets/3.png";
import year4 from "../../../../assets/4.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { ADMINFETCHDATA } from "../../../../routes/BackendPath";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import Year from "../../../../components/Year";
import Navbar from "../../../../components/navbar/Navbar";

const AdminYears = ({ user }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fetchYearData = async (year) => {
    try {
      const { data } = await axios.get(ADMINFETCHDATA, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          year: year,
        },
      });
      toast.success("Fetch success");
      setTimeout(() => {
        dispatch({ type: "FETCH", payload: data });
        Cookie.set("event", JSON.stringify(data));
        navigate("/admin/portal/event");
      }, [500]);
    } catch (error) {
      toast.error(error.response.msg);
    }
  };

  return (
    <div className="year_wrapper">
      <Navbar />
      <h1>
        "Choose the class's timeless essence: 1st, 2nd, 3rd, or 4th year
        students."
      </h1>
      <div className="years">
        <Year
          yearImg={year1}
          yearfetch={"I_year"}
          yearInfo={"1st year"}
          fetchYearData={fetchYearData}
        />
        <Year
          yearImg={year2}
          yearfetch={"II_year"}
          yearInfo={"2nd year"}
          fetchYearData={fetchYearData}
        />
        <Year
          yearImg={year3}
          yearfetch={"III_year"}
          yearInfo={"3rd year"}
          fetchYearData={fetchYearData}
        />
        <Year
          yearImg={year4}
          yearfetch={"IV_year"}
          yearInfo={"4th year"}
          fetchYearData={fetchYearData}
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default AdminYears;
