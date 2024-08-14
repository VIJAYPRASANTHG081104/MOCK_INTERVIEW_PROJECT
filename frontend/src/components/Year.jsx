import React from "react";

const Year = ({fetchYearData,yearImg,yearfetch,yearInfo,}) => {
  return (
    <div
      className="year"
      onClick={() => {
        fetchYearData(yearfetch);
      }}
    >
      <img src={yearImg} alt="" />
      <span>{yearInfo}</span>
    </div>
  );
};

export default Year;
