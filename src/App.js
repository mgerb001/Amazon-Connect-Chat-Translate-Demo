import React, { Component } from "react";
import Auth from "@aws-amplify/auth";
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from "./aws-exports";

import "./App.css";
import 'semantic-ui-less/semantic.less';

// Import components
import Ccp from "./components/ccp";
import appRegistry from "./components/app-registriy"

Auth.configure(awsconfig);

class App extends Component {
       render() {
              return (
                     
                     <div className="App">
                        <Ccp />
                     </div>
                     <div className="App">
                            <appRegistry />
                     </div>
              );
       }
}

export default withAuthenticator(App)
