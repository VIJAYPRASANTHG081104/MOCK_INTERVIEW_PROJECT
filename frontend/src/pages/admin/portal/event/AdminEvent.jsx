import React, { useState,useEffect } from "react";
import "./style.css";
import group from "../../../../assets/group_event.png";
import mock from "../../../../assets/mock_event.png";
import self from "../../../../assets/self_event.png";
import resume from "../../../../assets/resume_event.png";
import event from "../../../../assets/event.jpg";
import { useDispatch } from "react-redux";
import ChangeEventPopup from "../../../../components/changeEventPopup";
import PulseLoader from "react-spinners/PulseLoader";
import Event from "../../../../components/Event";
import { useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'
import Navbar from "../../../../components/navbar/Navbar";

const AdminEvent = ({user,eventData}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventType,setEventType] = useState('');

  useEffect(() => {
    if(eventType){
      dispatch({type:"CURRENTEVENT",payload:eventType});
      Cookie.set('currentEvent',JSON.stringify(eventType));
      navigate('/admin/portal/main');
    }
  }, [eventType, dispatch, navigate]);
  return (
    <>
      <div className="event_wrapper">
        <div className="event_wrap">
          <Navbar/>
          <h1>"Chose a event."</h1>
          <div className="events">
            <Event
              eventName={"group_discussion"}
              eventData={eventData}
              eventImg={group}
              eventInfo={"Group Discussion"}
              setEventType={setEventType}
            />
            <Event
              eventName={"self_introduction"}
              eventData={eventData}
              eventImg={self}
              eventInfo={"Self Introduction"}
              setEventType={setEventType}
            />
            <Event
              eventName={"mock_interview"}
              eventData={eventData}
              eventImg={mock}
              eventInfo={"Mock Interview"}
              setEventType={setEventType}
            />
            <Event
              eventName={"resume_evaluation"}
              eventData={eventData}
              eventImg={resume}
              eventInfo={"Resume Evaluation"}
              setEventType={setEventType}
            />
          </div>
          <button onClick={() => setVisible(true)} className="event_btn">
            Change Active Event
          </button>
        </div>
        <img className="event_img" src={event} />
      </div>
      {visible && (
        <ChangeEventPopup
          setLoading={setLoading}
          setVisible={setVisible}
          token={user.token}
          year={eventData.year}
        />
      )}
      {loading && (
        <div className="blur">
          <div className="loader">
            <PulseLoader color="blue" />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminEvent;
