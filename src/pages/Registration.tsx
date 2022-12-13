import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/useAppDispatch";
import {registrationThunk} from "../store/thunk/thunk";

const Registration = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const storeEmail = useAppSelector(state => state.userReducer.email)
    console.log(email)
    console.log(storeEmail)
    const onClickHandler = async () => {
        dispatch(registrationThunk(email, password))

    }
    useEffect(()=>{
        if(storeEmail)
            navigate('/email_confirmation')
    }, [storeEmail])
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: '100vh'}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: '3px solid black', borderRadius: '15px'}}>
                <div><input value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/></div>
                <div><input value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/></div>
                <button onClick={onClickHandler}>Send</button>
                <div style={{display: "flex", justifyContent: "right"}}>
                    <span>Have an account? <NavLink to={'/login'}>Login</NavLink></span></div>
            </div>
            </div>
    );
};

export default Registration;