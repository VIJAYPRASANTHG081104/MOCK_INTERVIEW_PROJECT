import {combineReducers} from "redux"
import {userReducer} from './userReducer'
import { eventReducer } from "./eventReducer"
import { setEventReducer } from "./setEventReducer"

const rootReducer = combineReducers({
    user: userReducer,
    event:eventReducer,
    currentEvent:setEventReducer
})

export default rootReducer