import axios, {AxiosResponse} from "axios";
import {UserReducer} from "../store/UserReducer";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {IUser} from "../interface/IUser";



const instance = axios.create({
    baseURL: window.location.href.includes('http://localhost') ? 'http://localhost:7542/2.0/' : process.env.REACT_APP_BACK_URL,
    withCredentials: true
})

class UserApi {
    //dispatch = useAppDispatch()
    login(email: string, password: string, rememberMe: boolean){
        return instance.post<any, AxiosResponse>('auth/login', {email, password, rememberMe})
            .then((res)=>{
                console.log(res)
                return res.data
            })
    }
    register(email: string, password: string){
        return instance.post<any, AxiosResponse>('auth/register', {email, password})
            .then((res)=>{
                return res.data
            })
    }
    checkUser(){
        return instance.post<any, AxiosResponse>('auth/register', {})
            .then((res)=>{
                return res.data
                /*dispatch(UserReducer.actions.setUser(res))*/
            })
    }
    changeUser(name: string, avatar: string){
        return instance.put<any, AxiosResponse>('auth/register', {name, avatar})
            .then((res)=>{
                return res.data
            })
    }
    logout(){
        instance.delete('auth/me', {})
    }
    forgot(email: string, from: string, message: string){
        instance.post<any, AxiosResponse>('auth/forgot', {email, from, message})

    }
    setNewPassword(password: string, resetPasswordToken: string){
        instance.post('auth/set-new-password', {password, resetPasswordToken})

    }
    /*block(id: string, blockReason: string){
        instance.post('auth/block', {id, blockReason})
            .then((res)=>{

            })
    }*/


}
export default new UserApi()