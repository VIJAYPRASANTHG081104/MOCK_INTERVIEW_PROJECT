const { selectYearModel } = require('../../helper/selectYearModel');


const adminFetchInfo = async (req, res) => {
  try {
    const year = req.header('year');
    let updateModel = selectYearModel(year);
    if(!updateModel){
      return res.status(400).send({msg:"Give the correct year"})
    }
    const data = await updateModel.findOne();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

const changeActiveEvent = async (req, res) => {
  try {
    const { GDisActive, MIisActive, SIisActive, REisActive} = req.body.value;
    const {year} = req.body;
    let updateModel = selectYearModel(year);
    if(!updateModel){
      return res.status(400).send({msg:"Give the correct year"})
    }
    const data = await updateModel.findOne();
    data.event.group_discussion.isActive = GDisActive;
    data.event.mock_interview.isActive = MIisActive;
    data.event.self_introduction.isActive = SIisActive;
    data.event.resume_evaluation.isActive = REisActive;
    const update = await data.save();
    return res.status(200).send({msg:"Active event changed successfully",data:data});
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};
module.exports = {
  adminFetchInfo,
  changeActiveEvent,
};
