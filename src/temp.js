



/**
 *
 * 
 * 
 * 


// right code 
-----------------------------------------
    const URL = `http://54.220.211.123:2020`;
    const [articel, setArticel] = useState({});

    const getArticelById = async () => {
        const data = await fetch(`${URL}/articles/${props.match.params.id}`)
            .then(response => response.json().then((articel) => { setArticel(articel) }))
            .catch(e => console.log(e));
    }

---------------------------------------------








import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import './ArticelCards.css';
import Articel from '../SingleArticel/Articel'
import { Link } from 'react-router-dom'
const ArticelCards = (props) => {
    const { blog, URL } = props;



    
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
                {
                    blog.map(articel => articel.images.map(img =>

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






































 * 
 * 
 <div class="row row-cols-1 row-cols-md-3">
            {
                blog.map(articel =>

                    <div key={articel.id} >
                        <div class="col mb-4" >
                            <Card.Img variant="top" src="/images/strapi.png" />
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
                    </div>)
            }
        </div>





 <div className="container">
            {
                blog.map(articel =>

                    <CardDeck key={articel.id}  class="row row-cols-1 row-cols-md-3">
                        <Card class="col mb-4" >
                            <Card.Img variant="top" src="/images/strapi.png" />
                            <Card.Body>
                                <Card.Title>{articel.title}</Card.Title>
                                <Card.Text>
                                    {articel.content}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>)
            }
        </div>













 
                <Card>
                    <Card.Img variant="top" src="/images/strapi.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
        content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/strapi.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
 */

{ "0":
 { "id": 5,
 "name": "https://nitrocdn.com/KKSittFAtIstzuMqLqEGEzmvLctLwvfc/assets/static/optimized/wp-content/uploads/2018/03/1fb90510e22459743fde2b1e19cee10d.java-800x450.jpg",
  "alternativeText": "", 
  "caption": "", 
  "width": 800, 
  "height": 450, 
  "formats": { "small": { "ext": ".jpg",
   "url": "/uploads/small_1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045.jpg", 
   "hash": "small_1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045", 
   "mime": "image/jpeg",
    "name": "small_https://nitrocdn.com/KKSittFAtIstzuMqLqEGEzmvLctLwvfc/assets/static/optimized/wp-content/uploads/2018/03/1fb90510e22459743fde2b1e19cee10d.java-800x450.jpg",
     "path": null, 
     "size": 13.46,
      "width": 500, 
      "height": 281 }, 
      "medium": { "ext": ".jpg",
       "url": "/uploads/medium_1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045.jpg", 
       "hash": "medium_1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045",
        "mime": "image/jpeg", 
        "name": "medium_https://nitrocdn.com/KKSittFAtIstzuMqLqEGEzmvLctLwvfc/assets/static/optimized/wp-content/uploads/2018/03/1fb90510e22459743fde2b1e19cee10d.java-800x450.jpg", "path": null, "size": 22.48, "width": 750, "height": 422 }, 
        "thumbnail": { "ext": ".jpg", "url": "/uploads/thumbnail_1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045.jpg",
         "hash": "thumbnail_1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045",
          "mime": "image/jpeg",
           "name": "thumbnail_https://nitrocdn.com/KKSittFAtIstzuMqLqEGEzmvLctLwvfc/assets/static/optimized/wp-content/uploads/2018/03/1fb90510e22459743fde2b1e19cee10d.java-800x450.jpg",
            "path": null, "size": 5.22, "width": 245, "height": 138 } },
             "hash": "1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045", 
             "ext": ".jpg", "mime": "image/jpeg", "size": 24.38, 
             "url": "/uploads/1fb90510e22459743fde2b1e19cee10d_java_800x450_ee0801d045.jpg", "previewUrl": null, "provider": "local", "provider_metadata": null, "created_by": 1, "updated_by": 1,
  "created_at": "2020-10-20T09:28:27.229Z", 
 "updated_at": "2020-10-20T09:28:27.254Z"
 }
 }