import React, {useEffect, useState} from 'react';
import {NavLink, redirect, useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/useAppDispatch";
import {loginThunk} from "../store/thunk/loginThunk";

const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [rememberMe, setRememberMe] = useState(true)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(state => state.userReducer.currentUser[0])
    const onClickHandler = async () => {
        dispatch(loginThunk(email, password, rememberMe))
    }
    useEffect(()=>{
        if(currentUser)
            navigate('/profile')
    }, [currentUser])
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{width: '450px', height: '250px', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", border: '3px solid black', borderRadius: '15px'}}>
                <div><input value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/></div>
                <div><input value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/></div>
                <button onClick={onClickHandler}>Send</button>
                <div style={{width: '90%', display: "flex", justifyContent: "space-between"}}>
                    <span><input type={"checkbox"} checked={rememberMe} onChange={()=>setRememberMe(!rememberMe)}/> Remember me</span>
                    <span>Don't have an account? <NavLink to={'/registration'}>Register</NavLink></span></div>
            </div>
        </div>
    );
};

export default Login;