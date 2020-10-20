import React from 'react';
import Navbar from '../Nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

export default function ContactUs() {

    return (
        <div>
            <Navbar />

            <div className="container">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Contact US</p>
                                <div className="grey-text">
                                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                    <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                </div>
                                <div className="text-center">
                                    <Button variant="outline-success" itemID="one">Send </Button>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

        </div>
    );
}


