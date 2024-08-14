const emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@bitsathy\.ac\.in$/
);
};

const rollnumberValidation = (rollnumber) =>{
    if(rollnumber.length === 12){
        return true;
    }
    return false;
}

module.exports = {
    emailValidation,rollnumberValidation
}
