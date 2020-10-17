import React from 'react';
import Navbar from '../Nav/Navbar';
import ArticelCards from '../Cards/ArticelCards';
import Search from '../SearchBar/Search'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Search />
            <ArticelCards />
        </div >

    );
}
