import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import './ArticelCards.css';

const ArticelCards = (props) => {
    const { blog } = props;
    const URL = "54.220.211.123:2020";

    return (
        <div className="row row-cols-1 row-cols-md-3">
            {
                blog.map(articel => articel.images.map(img =>

                    <div key={articel.id} >
                        <div className="col mb-4" >
                            <Card.Img variant="top" src={URL.concat(img.url)} />
                            {console.log(".....url.....", URL.concat(img.url))}
                            
                            <Card.Body>
                                <Card.Title>{articel.title}</Card.Title>
                                <Card.Text>
                                    {articel.content}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </div>
                    </div>
                )
                )
            }
        </div>

    );

};

export default ArticelCards;









