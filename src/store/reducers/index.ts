import { combineReducers } from 'redux'
import compostReducer from './composts'

export default combineReducers({
  composts: compostReducer
})
