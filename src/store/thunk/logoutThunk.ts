import {DispatchType} from "../store";
import UserApi from "../../api/UserApi";
import {UserReducer} from "../UserReducer";

export const logoutThunk = () => async (dispatch: DispatchType) => {
    try {
        UserApi.logout()
        dispatch(UserReducer.actions.clearUser())
    } catch (e){
        console.log(e)
    }
}