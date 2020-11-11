import React, { useState, useEffect } from 'react';
import Navbar from '../Nav/Navbar';
import ArticelCards from '../Cards/ArticelCards';
import Search from '../SearchBar/Search'
import axios from 'axios';
export default function Home() {

    const URL = `http://54.220.211.123:2020`;
   // const URL = `http://localhost:1337`;

    const [articels, setArticels] = useState([]);
    const [category, setcategory] = useState([]);
    const [currntSelectedCategory, setCurrntSelectedCategory] = useState('All');
    const [searchValue, setSearchValue] = useState();

    const getArticel = async () => {
        const data = await fetch(`${URL}/articles`)

            .then(response => response.json())
            .then(articels => setArticels(articels))
            .catch(e => console.log(e));
    }

    const searchOnElastic = async (itm) => {
        try {
            const options = { headers: { 'Access-Control-Allow-Origin': true } };
            JSON.stringify(itm);
            let { data } = await axios.post(`http://localhost:9200/_search`, {
                "query": {
                    "query_string": {
                        "query": `${itm}`
                    }
                }
            }, options
            );
            console.log(".....elasticsrch.....", data);

        } catch (e) {
            console.log(e);
        }

    }


    const filterArticleByCategoryName = async (categoryName) => {
        try {
            setCurrntSelectedCategory(`${categoryName}`);
            if (!categoryName || categoryName === 'All') {
                return getArticel();
            } else {


                let { data } = await axios.post(`${URL}/categoryName`, { name: `${categoryName}` });
                console.log(data);
                setcategory(data);
            }
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        filterArticleByCategoryName(currntSelectedCategory);
    }, [currntSelectedCategory]);

    useEffect(() => {
        getArticel();
        //    filterArticleByCategoryName(currntSelectedCategory);
    }, []);

    return (
        <div>
            <Navbar />
            <Search URL={URL} filterArticleByCategoryName={filterArticleByCategoryName} category={category} searchOnElastic={searchOnElastic} />
            <ArticelCards blog={articels} URL={URL} category={category} categoryName={currntSelectedCategory} />

        </div >

    );
}
