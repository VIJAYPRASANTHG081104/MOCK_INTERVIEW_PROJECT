const express = require('express');
const { register,login } = require('../controllers/user/userAuthController');
const { adminLogin, adminRegister } = require('../controllers/admin/adminAuthController');


const router = express.Router();

router.post('/auth/register',register);
router.post('/auth/login',login);
router.post('/auth/adminregister',adminRegister);
router.post('/auth/adminlogin',adminLogin);

module.exports = router