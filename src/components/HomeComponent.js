import React, { useState } from 'react';
//layout
import { Container, Row, Col, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
//component
import { Card, CardBody, CardImg, CardText } from "reactstrap";
import { Button, Collapse } from 'reactstrap';

import LoadingComponent from "./LoadingComponent";

import { baseUrl } from "../shared/baseUrl";

export default function HomeComponent(props) {
    const items = [
        {
            objectToDisplay: props.dish,
            isLoading: props.isLoading,
            errorMessage: props.errorMessage
        },
        {
            objectToDisplay: props.promotion,
            isLoading: props.isLoadingPromos,
            errorMessage: props.errorMessagePromos
        },
        {
            objectToDisplay: props.leader,
            isLoading: null,
            errorMessage: null
        }];
    
    return(
        <Container>
            <Row className="row-content">
                {items.map((item) => 
                    <Col xs={{size: 12, offset: 0}} md={{size: 4, offset: 0}} className="mb-2">
                        {(item.isLoading || item.errorMessage) ? 
                        <LoadingComponent isLoading={item.isLoading} errorMessage={item.errorMessage}/> :
                        <RenderAsCard item={item.objectToDisplay}/>
                        }
                        
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
            <CardImg src={baseUrl + item.image} alt={item.name}/>
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