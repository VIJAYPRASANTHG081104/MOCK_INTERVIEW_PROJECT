import React, { useState } from "react";

const Event = ({ eventData, eventImg, eventInfo, eventName,setEventType }) => {
   
  return (
    <div
      className={`event ${
        eventData.event[eventName].isActive === true ? "active_Event" : ""
      }`}
      onClick={()=>setEventType(eventName)}
    >
      <img src={eventImg} alt="" />
      <span>{eventInfo}</span>
    </div>
  );
};

export default Event;
