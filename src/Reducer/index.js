import { combineReducers } from 'redux'

import inventoryReducer from './inventorySlice'
import apiReducer from './apiSlice'

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    inventory: inventoryReducer,
    api: apiReducer
  })
  
  export default rootReducer;
  