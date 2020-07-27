import React from 'react';
//layout
import { Container, Row, Col } from 'reactstrap';
//component
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Media } from "reactstrap";
//m component
import BreadcrumbComponent from './BreadcrumbComponent';



export default function AboutUsComponent(props) {
    const leaders = props.leaders;
    const facts = [
        {term: "Started", description: "3 Feb. 2013"},
        {term: "Major Stake Holder", description: "HK Fine Foods Inc."},
        {term: "Last Year's Turnove", description: "$1,250,375"},
        {term: "Employees", description: "40"}
    ];

    return(
        <Container>
            <BreadcrumbComponent location={props.location}/>
            <Row className="row-content">
                <Col xs={12} md={{size: 6, offset: 0}}>
                    <HistorySection />
                </Col>
                <Col xs={12} md={{size: 5, offset: 1}}>
                    <FactAtGlance facts={facts}/>
                </Col>
                <Col xs={{size: 12, offset: 0}} className="mt-5">
                    <Quote />
                </Col>
            </Row>
            <LeadersSection leaders={leaders}/>
        </Container>
    );
}


export function HistorySection(props) {

    return(
        <frameElement>
            <h2><i className="fas fa-landmark"></i> Our History</h2>
            <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
            <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>    
        </frameElement>
    );
}

export function FactAtGlance(props) {
    const facts = props.facts;

    return(
        <Card>
            <CardHeader>
                <h3>Facts At a Glance</h3>
            </CardHeader>
            <CardBody> 
                {facts.map((factItem) => <Fact fact={factItem}/>)}   
            </CardBody>
        </Card>
    );
}

export function Fact(props) {
    const fact = props.fact;

    return(
        <Row tag="dl">
            <Col tag='dt'>{fact.term}</Col>
            <Col tag='dd'>{fact.description}</Col>
        </Row>
    );
}

export function Quote(props) {

    return(
        <Card>
            <CardBody className="bg-faded">
                <blockquote className="blockquote">
                    <p className="mb-0">You better cut the pizza in four pieces because
                        I'm not hungry enough to eat six.</p>
                    <footer className="blockquote-footer">Yogi Berra,
                    <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                        P. Pepe, Diversion Books, 2014</cite>
                    </footer>
                </blockquote>
            </CardBody>
        </Card>
    );
}

export function LeadersSection(props) {
    const leaders = props.leaders;

    return(
        <Row className='row-content'>
            <Col xs={{size: 12, offset: 0}}>
                <h2><i class="fas fa-chess-queen"></i> Corporate Leadership</h2>
            </Col>
            <Col xs={{size: 12, offset: 0}}>
                {leaders.map((leader) => <RenderLeader key={leader.id} leader={leader}/>)}
            </Col>
        </Row>
    );
}

export function RenderLeader(props) {
    const leader = props.leader;

    return(
        <Media className="my-5">
            <Media left className="mr-5">
                <Media object src={leader.image} className="rounded"></Media>
            </Media>
            <Media body>
                <Media heading>
                    <h3>{leader.name} </h3>
                    <small className="text-muted">{leader.designation}</small>
                </Media>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );
}