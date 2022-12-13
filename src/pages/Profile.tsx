import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/useAppDispatch";
import {loginThunk} from "../store/thunk/loginThunk";
import {logoutThunk} from "../store/thunk/logoutThunk";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const {currentUser} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    //console.log(!currentUser[0])

    useEffect(()=>{
        console.log(!currentUser[0])
        if(!currentUser[0]) {
            console.log('a')
            return navigate('/login')
        }
    }, [])
    let urlPhoto = currentUser[0].avatar ? currentUser[0].avatar :
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    const onCLickHandler = () => {
        dispatch(logoutThunk())
    }

    console.log(currentUser)
    return (
        <div>
            <div style={{border: '1px solid black', width: '500px', height: '500px', display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                <h2>Profile</h2>
            <span><img src={urlPhoto} style={{borderRadius: '50%'}}/></span>
                <div style={{fontSize: 17}}>{currentUser[0].name}</div>
                <div style={{color: "gray", fontSize: 14}}>{currentUser[0].email}</div>
                <button onClick={onCLickHandler}>Logout</button>
            </div>
        </div>
    );
};

export default Profile;