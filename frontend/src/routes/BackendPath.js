const BACKEND_URI = 'http://localhost:8000'

export const LOGINROUTE = `${BACKEND_URI}/auth/login`;
export const REGISTERROUTE = `${BACKEND_URI}/auth/register`;
export const ADMINLOGINROUTE = `${BACKEND_URI}/auth/adminlogin`;
export const ADMINREGISTERROUTE = `${BACKEND_URI}/auth/adminregister`;


// admin 

export const ADMINFETCHDATA = `${BACKEND_URI}/admin/fetchinfo`;
export const ADMINCHANGEACTIVEEVENT = `${BACKEND_URI}/admin/changeactiveevent`;