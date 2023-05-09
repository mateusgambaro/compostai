import { combineReducers } from 'redux'
import songReducer from './songs'

export default combineReducers({
  songs: songReducer
})
