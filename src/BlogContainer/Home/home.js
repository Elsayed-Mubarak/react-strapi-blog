import React, { useState, useEffect } from 'react';
import Navbar from '../Nav/Navbar';
import ArticelCards from '../Cards/ArticelCards';
import Search from '../SearchBar/Search'

export default function Home() {

    const Url = 'http://54.220.211.123:2020/articles';

    const [articels, setArticels] = useState([]);


    const getArticel = () => {
        fetch(Url)
            .then(response => response.json())
            .then(articels => setArticels(articels))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getArticel()

    },[]);
    console.log("...article...", articels);

    return (
        <div>
            <Navbar />
            <Search />
            <div className="container">
            <ArticelCards blog={articels} />
            </div>
            
        </div >

    );
}
