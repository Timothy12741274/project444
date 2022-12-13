import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {UserReducer} from "./UserReducer";

const rootReducer = combineReducers({
  userReducer: UserReducer.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
export type StateType = ReturnType<typeof rootReducer>
export type StoreType = ReturnType<typeof setupStore>
export type DispatchType = StoreType['dispatch']