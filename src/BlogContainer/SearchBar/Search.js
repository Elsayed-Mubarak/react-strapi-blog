import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, Dropdown } from 'react-bootstrap'
import './Search.css'
import ArticelCards from '../Cards/ArticelCards'


const SearchBar = ({ filterArticleByCategoryName }) => {

    const handelPrevent = (e) => {
        e.preventDefault();
        filterArticleByCategoryName(e.target.id.toString())
        console.log(e.target.id.toString());
    }
    /*
        useEffect(() => {
            filterArticleByCategoryName()
        }, []);
    */
    return (
        <div className="filter-section">
            <div className="container">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                        Categories
                        </Dropdown.Toggle>
                    <Dropdown.Menu onClick={() => filterArticleByCategoryName, (e) => handelPrevent(e)} >
                        <Dropdown.Item href="/" id="All" >All</Dropdown.Item>
                        <Dropdown.Item href="/" id="ArtificialIntelligence" >Artificial Intelligence</Dropdown.Item>
                        <Dropdown.Item href="/" id="DigitalRepositoriesAndArchives">Digital Repositories And Archives</Dropdown.Item>
                        <Dropdown.Item href="/" id="SearchEnginesAndDiscoveryPlatforms">Search Engines And Discovery Platforms</Dropdown.Item>
                        <Dropdown.Item href="/" id="ElectronicLibraries">ElectronicLibraries</Dropdown.Item>
                        <Dropdown.Item href="/" id="PublishingPeriodicalsAndBooks">Publishing Periodicals And Books</Dropdown.Item>
                        <Dropdown.Item href="/" id="KnowledgeAndResearchCenters">Knowledge And Research Centers</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default SearchBar;