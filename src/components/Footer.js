import React from 'react';
//navigation
import { NavLink } from "react-router-dom";
//layout
import { Container, Row, Col, Nav } from "reactstrap";
//reactstrap component
import { ListGroup, ListGroupItem } from 'reactstrap';
import { PAGES, SOCIAL_MEDIA } from '../shared/pageInformation';

export default function Footer(props) {
    const pages = PAGES;
    const socialMedia = SOCIAL_MEDIA;
    
    return(
        <footer className="footer">
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Col xs={{size: 4, offset: 0}} sm={{size: 2, offset: 0}}>
                        <LinksSection pages={pages}/>
                    </Col>
                    <Col xs={7} sm={5} className="d-flex justify-content-center">
                        <AdressSection />
                    </Col>
                    <Col xs={12} sm={4} className="align-self-center d-flex justify-content-center">
                        <SocialMediaSection socialMedia={socialMedia}/>
                    </Col>
                </Row>
                <br />
                <Row xs={12} sm={12} className='d-flex justify-content-center'>
                    <Col xs='auto'>
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export function LinksSection(props) {
    const pages = props.pages;

    return(
        <frameElement>
            <h4><i className="fas fa-link"></i> Links</h4>
                <ListGroup className="list-unstyled">
                    {pages.map((page) => 
                        <LinkComponent key={page.id} name={page.name} icon="" href={page.href}/>
                    )}
                </ListGroup>
        </frameElement>   
    );
}

export function AdressSection(props) {

    return(
        <address>
            <h4>Our Address</h4> 
		    121, Clear Water Bay Road<br />
		    Clear Water Bay, Kowloon<br />
		    HONG KONG<br />
		    <i class="fa fa-phone fa"></i> : +852 1234 5678<br />
		    <i class="fa fa-fax fa"></i> : +852 8765 4321<br />
		    <i class="fa fa-envelope fa"></i> : <a className="link-footer" href="mailto:confusion@food.net">confusion@food.net</a>
		</address>
    );
}

export function SocialMediaSection(props) {
    const socialMedia = props.socialMedia;

    return(
        <ListGroup horizontal className="list-unstyled">
            {socialMedia.map((social) => 
                <LinkComponent key={social.id} name="" icon={social.icon} href={social.href}/>
            )}
        </ListGroup>
    );
}


export function LinkComponent(props) {

    return(
        <li className="mr-3">
            <NavLink className="link-footer" to={props.href} activeStyle={{fontWeight: "bold"}}>
                <i className={props.icon}></i> {props.name}
            </NavLink>
        </li>
    );
}

