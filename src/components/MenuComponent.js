import React, { useState } from 'react';
import PropTypes from 'prop-types';
//layout
import { Container, Row, Col } from 'reactstrap';
//reactstrap components
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
//my Component
import DishDetailComponent from './DishDetailComponent';



export function MenuItem(props) {
    const dish = props.dish;

    return(
        <Col xs={12} md={{size: 5}} className="pt-1 pb-1" onClick={() => props.onSelectedMenuItem(dish)}>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Col>
    );
}


function Menu(props) {
    const dishes = props.dishes;

    const [selectedDish, setSelectedDish] = useState(null);

    return(
        <Container fluid >
            <Row className="d-flex justify-content-center">
                {dishes.map((dish) => 
                <MenuItem dish={dish} onSelectedMenuItem={(newSelectedDish) => setSelectedDish(newSelectedDish)}/>)}
            </Row>
            <DishDetailComponent dish={selectedDish}/>
        </Container>
    );
}


export default Menu;