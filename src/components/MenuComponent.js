import React, { useState } from 'react';
//navigation
import { Link } from 'react-router-dom';
//layout
import { Container, Row, Col } from 'reactstrap';
//reactstrap components
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import { Badge } from 'reactstrap';
//m component
import BreadcrumbComponent from './BreadcrumbComponent';



export default function MenuComponent(props) {
    const dishes = props.dishes;

    return(
        <Container>
            <BreadcrumbComponent location={props.location}/>
            <Row className="d-flex justify-content-center row-content" style={{borderBottomWidth: '0px'}}>
                {dishes.map((dish) => <MenuItem key={dish.id} dish={dish}/>)}
            </Row>
        </Container>
    );
}


export function MenuItem(props) {
    const dish = props.dish;

    return(
        <Col xs={12} md={{size: 5}} className="pt-1 pb-1">
            <Card>
                <Link to={`/menu/${dish.name}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>
                            <Badge pill color="secondary"><span className="lead">{dish.name}</span></Badge>
                        </CardTitle>
                    </CardImgOverlay>
                </Link>        
            </Card>
        </Col>
    );
}