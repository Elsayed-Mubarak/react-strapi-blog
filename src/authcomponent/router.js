import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "../authcomponent/login.component";
import SignUp from "../authcomponent/signup.component";
import ProductBox from '../components/Product';
import Card from '../authcomponent/cards';


export default function Routes() {

    return (
        <React.Fragment>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={ProductBox} />
                        <Route path="/sign-in" component={Login} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/card" component={Card} />

                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
}