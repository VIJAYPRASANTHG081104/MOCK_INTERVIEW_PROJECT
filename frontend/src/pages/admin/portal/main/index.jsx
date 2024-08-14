import React, { useState } from "react";
import "./style.css";
import Navbar from "../../../../components/navbar/Navbar";
import EventDefault from "./EventDefault";
import BookedStudents from "./BookedStudents";
import ViewAbsentees from "./ViewAbsentees";
import ViewPresent from "./ViewPresent";

const Main = ({ currentEvent }) => {
  const [select, setSelect] = useState(1);
  return (
    <div className="main_wrapper">
      <Navbar />
      <div className="main_wrap">
        <div className="main_menu_wrap">
          <div className="main_menu">
            <div
              className={`main_menu_item ${select == 1 ? "active" : ""}`}
              onClick={() => setSelect(1)}
            >
              <p>{currentEvent}</p>
            </div>
            <div
              className={`main_menu_item ${select == 2 ? "active" : ""}`}
              onClick={() => setSelect(2)}
            >
              <p>Booked Students & Evaluate</p>
            </div>
            <div
              className={`main_menu_item ${select == 3 ? "active" : ""}`}
              onClick={() => setSelect(3)}
            >
              <p>View Absentees</p>
            </div>
            <div
              className={`main_menu_item ${select == 4 ? "active" : ""}`}
              onClick={() => setSelect(4)}
            >
              <p>View Present</p>
            </div>
          </div>
        </div>
        <div className="main_component">
          {select === 1 && <EventDefault />}
          {select === 2 && <BookedStudents />}
          {select === 3 && <ViewAbsentees />}
          {select === 4 && <ViewPresent />}
        </div>
      </div>
    </div>
  );
};

export default Main;
