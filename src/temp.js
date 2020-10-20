



/**
 *
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