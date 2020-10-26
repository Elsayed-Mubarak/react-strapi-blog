import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Navbar';
import Galary from '../Galary/galary'
import Channels from '../Channels/channel'
import ContactUs from '../ContactUs/contact'
import Articel from '../SingleArticel/Articel'

export default function Routes() {

    return (
        <React.Fragment>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/galary" component={Galary} />
                        <Route path="/channels" component={Channels} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/articel/:id" component={Articel} />
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
}
