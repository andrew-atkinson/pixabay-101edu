import getImageQueryReducer from './getImageQuery'

const rootReducer = combineReducers({
  query: getImageQueryReducer
})

export default rootReducer