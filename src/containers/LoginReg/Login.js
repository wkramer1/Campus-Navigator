/* Component Name: Login
 * Function: Content for the Login page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import Content from "../Content/Content";
import classes from "./LoginReg.css";

import {firebase, auth} from '../../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class LoginPage extends Component {
    const 
    render() {
        const uiConfig = {
            callbacks: {
                uiShown: function() {
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            signInSuccessUrl: '/upload',
            // We will display Google and Email as auth providers.
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
          };

        return (
            <div className={classes.Login}>
                <Content title="Login">
                    <div id="loader">Loading...</div>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                </Content>
            </div>
        );
    }
}

export default LoginPage;
