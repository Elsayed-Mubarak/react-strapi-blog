import React, { useState, useEffect } from 'react';
import Navbar from '../Nav/Navbar';
import ArticelCards from '../Cards/ArticelCards';
import Search from '../SearchBar/Search'
import axios from 'axios';
export default function Home() {

    //const URL = `http://54.220.211.123:2020`;
    const URL = `http://localhost:1337`;

    const [articels, setArticels] = useState([]);
    const [category, setcategory] = useState([]);
    const [currntSelectedCategory, setCurrntSelectedCategory] = useState('All');

    const getArticel = async () => {
        const data = await fetch(`${URL}/articles`)

            .then(response => response.json())
            .then(articels => setArticels(articels))
            .catch(e => console.log(e));
    }

    const filterArticleByCategoryName = async (categoryName) => {
        try {
            setCurrntSelectedCategory(`${categoryName}`);
            if (!categoryName || categoryName === 'All') {
                return getArticel();
            } else {



                var { data } = await axios.post(`http://localhost:1337/categoryName`, { name: `${categoryName}` });
                console.log(data);
                setcategory(data)
                // await fetch(`${URL}/categoryName`,
                //     {
                //         method: 'POST',
                //         body: JSON.stringify({ name: `${categoryName}` }),
                //         headers: new Headers()
                //     })
                //     .then(response => {
                //         console.log("...............response111.......", response);
                //         response.json().then((article) => {
                //             console.log("...............response222.......", article);
                //             setcategory(article)
                //         })
                //     })
                //     .catch(e => console.log("error ... ", e));


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
            <Search URL={URL} filterArticleByCategoryName={filterArticleByCategoryName} category={category} />
            <ArticelCards blog={articels} URL={URL} category={category} categoryName={currntSelectedCategory} />

        </div >

    );
}
