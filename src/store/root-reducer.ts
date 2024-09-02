import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'

const rootReducer = combineReducers({
  userReducer: userReducer
})

export default rootReducer
