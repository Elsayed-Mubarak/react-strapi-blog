import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AppTest.css';
import { Switch, Route } from "react-router-dom";
import Home from './BlogContainer/Home/home';

import Galary from './BlogContainer/Galary/galary'
import Channels from './BlogContainer/Channels/channel'
import ContactUs from './BlogContainer/ContactUs/contact'


function AppTest() {
    return (
        <div className="AppTest">
            <div className="Nav-Bar">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/galary" component={Galary} />
                    <Route path="/channels" component={Channels} />
                    <Route path="/contact" component={ContactUs} />
                </Switch>
            </div>



        </div>

    );
}

export default AppTest;