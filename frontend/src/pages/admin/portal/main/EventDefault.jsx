import React from "react";

// Note:
// Only display slot upto 5;
// if it is more use slide 

const EventDefault = () => {
  return (
    <div className="event_default_wrap">
      <div className="details_heading">
        <span>Name</span>
        <span>email</span>
        <span>Staff Number</span>
        <span>Department</span>
        <span>From Date</span>
        <span>To Date</span>
        <span>Slots</span>
      </div>
      <div className="details_wrap">
        <div className="name">Vijayalakshmi</div>
        <div className="email">vijayalakshmi.cb22@bitsathy.ac.in</div>
        <div className="staffNumber">123456</div>
        <div className="department">CSBS</div>
        <div className="fromDate">8.11.24</div>
        <div className="toDate">10.11.24</div>
        <div className="bookedSlots">
          <span className="slot">9.00-9.30</span>
          <span className="slot">9.30-10.00</span>
          <span className="slot">10.00-10.30</span>
          <span className="slot">11.00-11.30</span>
          <span className="slot">11.30-12.00</span>
          {/* <span className="slot">12.00-12.30</span>
          <span className="slot">1.00-1.30</span>
          <span className="slot">1.30-2.00</span>
          <span className="slot">2.00-2.30</span>
          <span className="slot">2.30-3.00</span>
          <span className="slot">3.30-4.00</span>
          <span className="slot">4.00-4.30</span> */}
        </div>
      </div>
      <div className="details_wrap">
        <div className="name">Vijayalakshmi</div>
        <div className="email">vijayalakshmi.cb22@bitsathy.ac.in</div>
        <div className="staffNumber">123456</div>
        <div className="department">CSBS</div>
        <div className="fromDate">8.11.24</div>
        <div className="toDate">10.11.24</div>
        <div className="bookedSlots">
          <span className="slot">9.00-9.30</span>
          <span className="slot">9.30-10.00</span>
          <span className="slot">10.00-10.30</span>
          <span className="slot">11.00-11.30</span>
          <span className="slot">11.30-12.00</span>
          <span className="slot">12.00-12.30</span>
          <span className="slot">1.00-1.30</span>
          <span className="slot">1.30-2.00</span>
          <span className="slot">2.00-2.30</span>
          <span className="slot">2.30-3.00</span>
          <span className="slot">3.30-4.00</span>
          <span className="slot">4.00-4.30</span>
        </div>
      </div>
      <div className="details_wrap">
        <div className="name">Vijayalakshmi</div>
        <div className="email">vijayalakshmi.cb22@bitsathy.ac.in</div>
        <div className="staffNumber">123456</div>
        <div className="department">CSBS</div>
        <div className="fromDate">8.11.24</div>
        <div className="toDate">10.11.24</div>
        <div className="bookedSlots">
          <span className="slot">9.00-9.30</span>
          <span className="slot">9.30-10.00</span>
          <span className="slot">10.00-10.30</span>
          <span className="slot">11.00-11.30</span>
          <span className="slot">11.30-12.00</span>
          <span className="slot">12.00-12.30</span>
        </div>
      </div>
      <div className="details_wrap">
        <div className="name">Vijayalakshmi</div>
        <div className="email">vijayalakshmi.cb22@bitsathy.ac.in</div>
        <div className="staffNumber">123456</div>
        <div className="department">CSBS</div>
        <div className="fromDate">8.11.24</div>
        <div className="toDate">10.11.24</div>
        <div className="bookedSlots">
          <span className="slot">9.00-9.30</span>
          <span className="slot">9.30-10.00</span>
          <span className="slot">10.00-10.30</span>
          <span className="slot">11.00-11.30</span>
          <span className="slot">11.30-12.00</span>
          <span className="slot">12.00-12.30</span>
          <span className="slot">1.00-1.30</span>
          <span className="slot">1.30-2.00</span>
          <span className="slot">2.00-2.30</span>
        </div>
      </div>
    </div>
  );
};

export default EventDefault;
