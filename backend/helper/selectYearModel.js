const IstmockModel = require("../models/main/1YEARmockmodel")
const IIstmockModel = require('../models/main/2YEARmockmodel')
const IIIstmockModel = require('../models/main/3YEARmockmodel')
const IVstmockModel = require('../models/main/4YEARmockmodel')

const selectYearModel = (year) =>{
    if(year === "I_year"){
        return IstmockModel
    }else if(year === "II_year"){
        return IIstmockModel
    }else if(year === "III_year"){
        return IIIstmockModel
    }else if(year === "IV_year"){
        return IVstmockModel
    }else{
        return 0;
    }
}

module.exports = {selectYearModel};