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
import LoadingComponent from "./LoadingComponent";

import { baseUrl } from "../shared/baseUrl";



export default function MenuComponent(props) {
    const dishes = props.dishes;
    const isLoading = props.isLoading;
    const errorMessage = props.errorMessage;

    if(isLoading) {
        return <LoadingComponent isLoading={isLoading} errorMessage={errorMessage}/>
    }

    if(errorMessage) {
        return <LoadingComponent isLoading={isLoading} errorMessage={errorMessage}/>
    }

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
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
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