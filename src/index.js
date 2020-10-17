import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import AppTest from './AppTest';

ReactDOM.render(<BrowserRouter>
    <AppTest />
</BrowserRouter>,
    document.getElementById('root'));