import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { DiVim } from 'react-icons/di';
import firebase from 'firebase';

const UserAuth = (props) => {
    useEffect(()=> {
        //const ui = new firebaseui.auth.AuthUI(firebase.auth());
        const ui = new firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(props.auth); 
        ui.start(".firebase-auth-container", {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        })
    })

    return (
        <div className={'firebase-auth-container'}></div>
    )

}

export default UserAuth