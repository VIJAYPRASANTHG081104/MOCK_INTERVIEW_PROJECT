const { findDucplicate } = require("../../helper/findDucplicate");
const { selectYearModel } = require('../../helper/selectYearModel');

const addFaculty = async (req, res) => {
  try {
    const { year, event, faculties } = req.body;
    let updateModel = selectYearModel(year);
    if(!updateModel){
      return res.status(400).send({msg:"Give the correct year"})
    }
    const data = await updateModel
      .findOne()
      .select(`event.${event}.faculties`);
    // if (findDucplicate(data, year, event, faculties.faculty)) {
    //   return res.status(400).send({ msg: "Already exist" });
    // }

    data.event[event].faculties.push(faculties);
    await data.save();
    return res.status(200).send(data);
  } catch (error) {}
};

const deleteFaculty = async (req, res) => {
  try {
    const { year, event, facultyId } = req.body;
    let updateModel = selectYearModel(year);
    if(!updateModel){
      return res.status(400).send({msg:"Give the correct year"})
    }
    const data = await updateModel
      .findOne()
      .select(`event.${event}.faculties`);

    const updatedFaculties = data.event[event].faculties.filter(
      (ele) => ele.faculty != facultyId
    );
    data.event[event].faculties = updatedFaculties;
    await data.save();

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const editFaculty = async(req,res) =>{
  try {
    const {year,event,facultyIndex,faculties} = req.body;
    const updateModel = selectYearModel(year);
    if(!updateModel){
      return res.status(400).send({msg:"Give the correct year"})
    }
    const data = await updateModel
      .findOne()
      .select(`event.${event}.faculties`);
    const updatedFaculties = data.event[event].faculties.with(facultyIndex,faculties)
    data.event[event].faculties = updatedFaculties;
    await data.save();
    return res.status(200).send({msg:data});
  } catch (error) {
    return res.status(500).send({msg:error.message})
  }
}

module.exports = {
  addFaculty,
  deleteFaculty,
  editFaculty
};
