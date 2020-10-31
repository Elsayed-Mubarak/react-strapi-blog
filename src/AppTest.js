import React from 'react';
import './AppTest.css';
import { Switch, Route } from "react-router-dom";
import Home from './BlogContainer/Home/home';
import BaseLine from '@material-ui/core/CssBaseline'
import Galary from './BlogContainer/Galary/galary'
import Channels from './BlogContainer/Channels/channel'
import ContactUs from './BlogContainer/ContactUs/contact'
import Articel from './BlogContainer/SingleArticel/Articel'
import CreateArticel from './BlogContainer/CreateArticel/index'

function AppTest() {
    return (
        <div className="AppTest">
            <BaseLine />
            <div className="Nav-Bar">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/galary" component={Galary} />
                    <Route path="/channels" component={Channels} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="/articel/:id" component={Articel} />
                    <Route path="/create" component={CreateArticel} />
                </Switch>
            </div>



        </div>

    );
}

export default AppTest;