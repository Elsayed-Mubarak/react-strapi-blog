import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl } from 'react-bootstrap'

const SearchBar = () => {
    return (
        <div className="container">
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    );
}

export default SearchBar;