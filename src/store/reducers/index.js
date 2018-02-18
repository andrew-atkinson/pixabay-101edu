import getImageQueryReducer from './getImageQuery'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  query: getImageQueryReducer
})

export default rootReducer