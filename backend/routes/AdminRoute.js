const express = require('express');
const { auth } = require('../middleware/auth');
const { adminFetchInfo, changeActiveEvent } = require('../controllers/admin/adminFetchController');
const {addFaculty, deleteFaculty,editFaculty} = require('../controllers/admin/adminFunctioncontroller')

const router = express.Router();

router.get('/admin/fetchinfo',auth,adminFetchInfo);
router.post('/admin/changeactiveevent',auth,changeActiveEvent)
router.post('/admin/addfaculty',addFaculty)
router.post('/admin/deletefaculty',deleteFaculty)
router.post('/admin/editfaculty',editFaculty)
module.exports = router;