import React, { useState } from 'react';
//navigation
import { NavLink } from 'react-router-dom';
//layout
import { Container, Row, Col, Collapse, NavbarToggler} from "reactstrap";
//reactstrap component
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
//components
import { PAGES } from "../shared/pageInformation";


export default function Header(props) {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    
    return(
        <frameElement>
            <Navbar className="my-0 navbar-dark" expand="md" fixed="top" dark>
                <NavbarBrand className="mx-3" href="/">
                    <img src={"/assets/images/logo.png"} alt="Ristorante Con Fusion" width="60" height="41"/>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpenCollapse(!isOpenCollapse)}/>
                <AppRoutes isOpenCollapse={isOpenCollapse} routes={PAGES}/>  
            </Navbar>
            
            <Jumbotron className="jumbotron">
                <JumbotronContent/>
            </Jumbotron>
        </frameElement>
    );
}


export function AppRoutes(props) {
    const routes = props.routes
    
    return(
        <Collapse navbar className="mr-auto" isOpen={props.isOpenCollapse}>
            <Nav navbar>
                {routes.map((route) =>
                    <NavItem key={route.id}>
                        <NavLink className="nav-link" to={route.href}>
                            <i className={route.icon}></i> {route.name}
                        </NavLink>
                    </NavItem>
                )}
            </Nav>
        </Collapse>
    );
}

export function JumbotronContent(props) {

    return(
        <Container fluid>  
            <Row>
                <Col xs={12} sm={6}>
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion 
                    experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </Col>
                <Col xs={12} sm={6}>
                </Col>
            </Row>
        </Container>
    );
}