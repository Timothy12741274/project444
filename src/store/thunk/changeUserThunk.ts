import {DispatchType} from "../store";
import UserApi from "../../api/UserApi";
import {UserReducer} from "../UserReducer";
import {useNavigate} from "react-router-dom";

export const changeUserThunk = (name: string, avatar: string) => async (dispatch: DispatchType) => {
    try {
        UserApi.changeUser(name, avatar).then((res)=>{
                dispatch(UserReducer.actions.setUser(res.updatedUser))
        })
    } catch (e){
        console.log(e)
    }
}