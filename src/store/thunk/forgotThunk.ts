import {DispatchType} from "../store";
import UserApi from "../../api/UserApi";
import {UserReducer} from "../UserReducer";
import {useNavigate} from "react-router-dom";

export const forgotThunk = (email: string, from: string, message: string) => async (dispatch: DispatchType) => {
    try {
        UserApi.forgot(email, from, message)

    } catch (e){
        console.log(e)
    }
}