import React, { useState } from 'react';
import PropTypes from 'prop-types';

//layout
import { Container, Row, Col } from 'reactstrap';

//reactstrap components
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';


export function MenuItem(props) {
    const dish = props.dish;

    return(
        <Col xs={12} md={{size: 5}} onClick={() => props.onSelectedMenuItem(dish)}>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Col>
    );
}

export function MenuItemDescription(props) {
    const dish = props.dish;

    if(!dish)
        return <div></div>

    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}


function Menu(props) {
    const dishes = props.dishes;

    const [selectedDish, setSelectedDish] = useState(null);

    return(
        <Container fluid>
            <Row>
                {dishes.map((dish) => 
                <MenuItem dish={dish} onSelectedMenuItem={(newSelectedDish) => setSelectedDish(newSelectedDish)}/>)}
            </Row>
            <Row>
                <Col xs={12} md={5}><MenuItemDescription dish={selectedDish}/></Col>
            </Row>
        </Container>
    );
}


export default Menu;