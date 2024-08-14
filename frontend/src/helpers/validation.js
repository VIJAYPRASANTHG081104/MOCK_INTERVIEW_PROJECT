import { ToastContainer, toast } from "react-toastify";

const registerInfo = {
  name: "",
  staffnumber: "",
  email: "",
  password: "",
  department: "",
};
export const registerValidateAdmin = (value) => {
  if (value.name.length == 0) {
    toast.error("Name is required.");
    return false;
  } else if (value.staffnumber.length == 0) {
    toast.error("staffnumber is required.");
    return false;
  } else if (value.email.length <= 0) {
    toast.error("email is required.");
    return false;
  } else if (value.password.length <= 0) {
    toast.error("password is required.");
    return false;
  } else if (value.department.length <= 0) {
    toast.error("department is required.");
    return false;
  }
  return true;
};
export const registerValidateUser = (value) => {
    if (value.name.length == 0) {
      toast.error("Name is required.");
      return false;
    } else if (value.rollnumber.length == 0) {
      toast.error("rollnumber is required.");
      return false;
    } else if (value.email.length == 0) {
      toast.error("email is required.");
      return false;
    } else if (value.password.length == 0) {
      toast.error("password is required.");
      return false;
    } else if (value.department.length == 0) {
      toast.error("department is required.");
      return false;
    }
    else if (value.batch.length == 0) {
        toast.error("batch is required.");
        return false;
      }
    return true;
  };

  export const loginValidation = (value) =>{
    if(value.email.length == 0){
      toast.error("email is required.");
      return false;
    }
    else if(value.password.length == 0){
      toast.error("password is required.");
      return false;
    }
    return true;
  } 