import React, { useState } from 'react';
//layout
import { Container, Row, Col, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
//component
import { Card, CardBody, CardImg, CardText } from "reactstrap";
import { Button, Collapse } from 'reactstrap';

import LoadingComponent from "./LoadingComponent";

export default function HomeComponent(props) {
    const items = [props.dish, props.promotion, props.leader];
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
            <Row className="row-content">
                {items.map((itemToRender) => 
                    <Col xs={{size: 12, offset: 0}} md={{size: 4, offset: 0}} className="mb-2">
                        <RenderAsCard item={itemToRender}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export function RenderAsCard({ item }) {
    const [showDescription, setShowDescription] = useState(false);

    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>
                    <h5>{item.name}</h5>
                    <CardSubtitle className="text-muted">
                        {item.designation ? item.designation : "..."}
                    </CardSubtitle>
                </CardTitle>
                <CardText>
                    <Collapse isOpen={showDescription}>
                        {item.description}
                    </Collapse>
                </CardText>
                <Row className="d-flex justify-content-end mt-3">
                    <DescriptionButton 
                            initialState={showDescription} 
                            onToggle={(param) => setShowDescription(!param)}/>
                </Row>
            </CardBody>
        </Card>
    );
}

export function DescriptionButton(props) {
    const [isFliped, setIsFliped] = useState(props.initialState);

    return(
        <Button  onClick={() => {props.onToggle(isFliped); setIsFliped(!isFliped)}}>
             {isFliped ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
        </Button>
    );
}