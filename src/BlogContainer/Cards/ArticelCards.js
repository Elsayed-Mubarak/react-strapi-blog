import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './ArticelCards.css';
import { Link } from 'react-router-dom'

const ArticelCards = (props) => {
    const { blog, URL } = props;


    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
                {
                    blog.map(articel =>
                        articel.images.map(img =>

                            <div key={articel.id} >
                                <div className="col mb-4" >
                                    <Card.Img variant="top" src={`${URL}${img.url}`} />
                                    <Card.Body>
                                        <Card.Title>{articel.title}</Card.Title>
                                        <Card.Text>
                                            {articel.content.length < 100 ? `${articel.content}` : `${articel.content.substring(0, 100)} . . .`}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="outline-success" ><Link to={`/articel/${articel.id}`}>Get Started</Link></Button>
                                    </Card.Footer>

                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );

};

export default ArticelCards;









