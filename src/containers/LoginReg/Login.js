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
import firebaseui from 'firebaseui';

class LoginPage extends Component {
    const 
    render() {
        const ui = new firebaseui.auth.AuthUI(auth);
        const uiConfig = {
            callbacks: {
              signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
              },
              uiShown: function() {
                // The widget is rendered.
              }
            },
            signInSuccessUrl: '/upload',
            signInOptions: [
              // Leave the lines as is for the providers you want to offer your users.
              firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
          };

          ui.start('#login-container', uiConfig);

        return (
            <div className={classes.Login}>
                <Content title="Login">
                    <div id="login-container"></div>
                </Content>
            </div>
        );
    }
}

export default LoginPage;
