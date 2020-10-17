import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, Dropdown } from 'react-bootstrap'
import './Search.css'
const SearchBar = () => {
    return (
        <div className="container">
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories     
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default SearchBar;