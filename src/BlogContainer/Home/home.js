import React, { useState, useEffect } from 'react';
import Navbar from '../Nav/Navbar';
import ArticelCards from '../Cards/ArticelCards';
import Search from '../SearchBar/Search'

export default function Home() {

    const URL = `http://54.220.211.123:2020`;

    const [articels, setArticels] = useState([]);

    const getArticel = () => {
        fetch(`${URL}/articles`)
            .then(response => response.json())
            .then(articels => setArticels(articels))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getArticel()
    },[]);
    console.log("...article. home..", articels);

    return (
        <div>
            <Navbar />
            <Search />
            <ArticelCards blog={articels} URL={URL} />

        </div >

    );
}
