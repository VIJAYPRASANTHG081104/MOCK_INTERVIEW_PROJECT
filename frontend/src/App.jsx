import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/student/login/index";
import AdminLogin from "./pages/admin/login";
import AdminYears from "./pages/admin/portal/years/AdminYears";
import AdminEvent from "./pages/admin/portal/event/AdminEvent";
import Main from "./pages/admin/portal/main";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);
  const eventData = useSelector((state) => state.event);
  const currentEvent = useSelector((state)=>state.currentEvent)

  return (
    <div>
      <Routes>
        <Route path={"/admin/login"} element={<AdminLogin />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/admin/portal/year"} element={<AdminYears user={user}/>} />
        <Route
          path={"/admin/portal/event"}
          element={<AdminEvent eventData={eventData} user={user}/>}
        />
          <Route
            path={"/admin/portal/main"}
            element={<Main currentEvent={currentEvent}/>}
          />
      </Routes>
    </div>
  );
};

export default App;
