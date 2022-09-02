import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";
import { auth } from '../../_action/user_action'
import { useNavigate } from "react-router";

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthCheck(props) {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth().then(response => {
            if(!response.payload.isAuth) {
                if(option){
                    navigate('/login')
                }
            } else {
                if(adminRoute && !response.payload.isAdmin){
                    navigate('/')
                } else {
                    if(option === false){
                        navigate('/')
                    }
                }
            }
            }))
        }, []);

        return <SpecificComponent />
    }

    return AuthCheck
}