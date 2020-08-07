import React, { useState, useRef, useReducer } from 'react';
//navigation
import { NavLink } from 'react-router-dom';
//layout
import { Container, Row, Col, Collapse, NavbarToggler, Form} from "reactstrap";
//reactstrap component
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
//components
import { PAGES } from "../shared/pageInformation";


export default function Header(props) {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [LoginFormOpen, setLoginFormOpen] = useState(false);

    const onSubmitHandler = (event, email, password, rememberMe) => {
        alert(`email: ${email} ; password: ${password} ; rememberMe: ${rememberMe}`);
        event.preventDefault();
    };
    
    return(
        <frameElement>
            <Navbar className="my-0 navbar-dark" expand="md" fixed="top" dark>
                <NavbarBrand className="mx-3" href="/">
                    <img src={"/assets/images/logo.png"} alt="Ristorante Con Fusion" width="60" height="41"/>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpenCollapse(!isOpenCollapse)}/>
                <AppRoutes isOpenCollapse={isOpenCollapse} routes={PAGES}/>
                <NavItem className="ml-auto nav-link">
                    <Button className="bg-transparent" onClick={() => setLoginFormOpen(!LoginFormOpen)}>
                        <i class="fas fa-sign-in-alt"></i> Login
                    </Button>
                </NavItem>  
            </Navbar>
            
            <Jumbotron className="jumbotron">
                <JumbotronContent/>
            </Jumbotron>
            <LoginForm 
                isOpen={LoginFormOpen} 
                toggleLoginForm={() => setLoginFormOpen(!LoginFormOpen)} 
                onSubmitHandler={(event, email, password, rememberMe) => onSubmitHandler(event, email, password, rememberMe)}/>
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

export function LoginForm(props) {
    const isOpen = props.isOpen;
    const toggleLoginForm = props.toggleLoginForm;
    const onSubmitHandler = props.onSubmitHandler;

    const email = useRef(null);
    const password = useRef(null);
    const rememberMe = useRef(null);

    return(
        <Modal isOpen={isOpen} centered>
            <ModalHeader>
                <h3>Login</h3>
            </ModalHeader>
            <ModalBody>
                <Form 
                    id="loginForm" 
                    onSubmit={(event) => onSubmitHandler(event, email.current.value, password.current.value, rememberMe.current.checked)}>
                    <InputGroup className="my-2">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i class="fas fa-user"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            type="email" 
                            placeholder="Enter Your Email"
                            innerRef={(el) => {email.current = el;}}
                        />
                    </InputGroup>
                    <InputGroup className="my-2">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i class="fas fa-key"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            type="password" 
                            placeholder="Enter Your Password"
                            innerRef={(el) => {password.current = el;}}
                        />
                    </InputGroup>
                    <InputGroup className="mt-4 align-items-center">
                        <InputGroupAddon addonType="prepend" className="ml-3 mr-3">
                            <Input 
                                type="checkbox"
                                addon type="checkbox"
                                innerRef={(el) => {rememberMe.current = el;}}
                                />
                        </InputGroupAddon>
                        <strong> Remember Me?</strong>
                    </InputGroup>
                </Form>
            </ModalBody>
            <ModalFooter className="d-flex justify-content-start">
                <Button color="primary" form="loginForm" type="submit">Login</Button>
                <Button color="secondary" onClick={() => toggleLoginForm()}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}