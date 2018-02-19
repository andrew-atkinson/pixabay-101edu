import query from './getImageQuery'
import currentSearch from './currentSearch' 
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  query,
  currentSearch
})

export default rootReducer