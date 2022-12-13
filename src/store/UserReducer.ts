import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../interface/IUser";

type initialStateType = {
    currentUser: Array<IUser>
    email: string
}


const initialState: initialStateType = {
    currentUser: [],
    email: ""
}


export const UserReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /*setUser(state, action){
            state.currentUser = action.payload
            return state
        },*/
        setUser(state, action: PayloadAction<IUser>){
            state.currentUser = [{...action.payload}]
            return state
            /*return {...state,
            currentUser: [...state.currentUser,
                {...state.currentUser, name: action.payload.name, avatar: action.payload.avatar}
            ]
            }*/
        },
        clearUser(state){
            state.currentUser = []
        },
        setEmail(state, action){
            state.email = action.payload
        }
    }
})

