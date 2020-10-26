import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Articel.css';
import Navbar from '../Nav/Navbar'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Articel.css';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const Articel = (props) => {

    const URL = `http://54.220.211.123:2020`;
    const [articel, setArticel] = useState({});


    const getArticelById = async () => {
        await fetch(`${URL}/articles/${props.match.params.id}`)
            .then(response => {
                response.json().then((articel) => { setArticel(articel) })
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getArticelById()
    }, []);

    const getImageUrl = () => {
        if (articel.images) {
            const result = articel.images.map(res => res.url)
            return result;
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div
                >
                    <h1>{articel.title}</h1>
                </div>
                <div className="row ">
                    <div key={articel.id} >
                        <div className="col mb-4" >
                            <Card.Img variant="top" src={`${URL}${getImageUrl()}`} />
                            <Card.Body>
                                <Card.Title>{articel.title}</Card.Title>
                                <Card.Text>
                                    <ReactMarkdown source={articel.content} />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                    Created at   :    <Moment format="MMM Do YYYY">{articel.created_at}</Moment>
                                </p>
                            </Card.Footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Articel;








