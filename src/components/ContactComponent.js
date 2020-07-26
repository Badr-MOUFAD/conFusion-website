import React from 'react';
//layout 
import { Container, Row, Col, Button } from 'reactstrap';
//components
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';


export default function ContactComponent(props) {

    return(
        <Container fluid>
            <Row className='row-content d-flex justify-content-center'>
                <Col xs={12} sm={{size: 4, offset: 0}}>
                    <Card>
                        <CardHeader>
                            <h4 className="d-flex justify-content-between">
                                <span>Our Address</span> <i className="fas fa-map-marker-alt"></i>
                            </h4> 
                        </CardHeader>
                        <CardBody>
                            121, Clear Water Bay Road<br />
		                    Clear Water Bay, Kowloon<br />
		                    HONG KONG<br />
		                    <i class="fa fa-phone fa"></i> : +852 1234 5678<br />
		                    <i class="fa fa-fax fa"></i> : +852 8765 4321<br />
		                    <i class="fa fa-envelope fa"></i> : <a className="link-footer" href="mailto:confusion@food.net">confusion@food.net</a>
                        </CardBody>
                        <CardFooter>
                            <Button outline color="success" className="mr-2" tag="a" href="tel:+85212345678">
                                <i class="fas fa-phone"></i> Call
                            </Button>
                            <Button outline color="primary" className="mr-2" tag="a" href="">
                                <i class="fab fa-skype"></i> Skype
                            </Button>
                            <Button outline color="info" className="mr-2" tag="a" href="mailto:confusion@food.net">
                                <i class="fas fa-envelope"></i> Email
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col xs={12} sm={{size: 4, offset: 2}}>
                    <Card>
                        <CardHeader>
                            <h4 className="d-flex justify-content-between">
                                <span>Map of our Location</span> <i className="fas fa-map-marked-alt"></i>
                            </h4>
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}