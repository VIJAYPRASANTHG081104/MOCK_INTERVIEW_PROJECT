import React, { useState } from "react";
import "./style.css";
import axios from 'axios'
import { ADMINCHANGEACTIVEEVENT } from "../../routes/BackendPath";
import { ToastContainer, toast } from "react-toastify";
import Cookie from 'js-cookie';
import { useDispatch } from "react-redux";

const ChangeEventPopup = ({setLoading,setVisible,year,token}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    GDisActive: true,
    SIisActive: false,
    MIisActive: false,
    REisActive: false,
  });
  const handleChange = (e) => {
    const updatedValue = Object.fromEntries(
      Object.keys(value).map((key)=>[key,key===e.target.value])
    )
    setValue(updatedValue);
  };

  const handleChangeEvent = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page refresh)

    try {
      setLoading(true);
      const { data } = await axios.post(ADMINCHANGEACTIVEEVENT, { value, year },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }); 
      // console.log(data.data)
      Cookie.set("event",JSON.stringify(data.data))
      if(data&&data.data){
        console.log(data.data)
        dispatch({type:"FETCH",payload:data.data});
      }
      setTimeout(()=>{
        setLoading(false);
        setVisible(false);
      },1000);
      toast.success(data.msg);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.msg);
    }
  };
  return (
    <div className="blur">
      <div className="changeEvent_wrapper">
        <form onSubmit={(e)=>handleChangeEvent(e)}>
          <div className="exit_icon">
            <i onClick={()=>setVisible(false)} className="fa-regular fa-circle-xmark"></i>
          </div>
          <div>
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={"GDisActive"}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="flexRadioDefault1">Group discussion</label>
          </div>
          <div>
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value={"SIisActive"}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="flexRadioDefault2">Self Introduction</label>
          </div>
          <div>
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              value={"MIisActive"}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="flexRadioDefault3">Mock Interview</label>
          </div>
          <div>
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
              value={"REisActive"}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="flexRadioDefault4">Resume Evaluation</label>
          </div>
          <button type="submit" className="change_evt_btn">change</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ChangeEventPopup;
