import React from 'react';
import { useMultiState } from '../Hooks/useMultiState';
//layout 
import { Container, Row, Col } from 'reactstrap';
//components
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FormFeedback, FormText } from "reactstrap";
//m component
import BreadcrumbComponent from './BreadcrumbComponent';


export default function ContactComponent(props) {
    const [formContact, setFormContact] = useMultiState({
        firstName: '',
        lastName: '',
        telNum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: ''
    });

    const [errors, setErrors] = useMultiState({
        firstName: null,
        lastName: null,
        telNum: null,
        email: null
    });

    const handleValidate = (key) => {

        switch (key) {
            case "firstName":
                if(formContact.firstName) {
                    if(formContact.firstName.length > 10) {
                        setErrors(key, "First Name must contain less than 10 caracters");
                        break;
                    }  
                    if(formContact.firstName.length < 3) {
                        setErrors(key, "First Name must contain more than 3 caracters");
                        break;
                    }
                }

                setErrors(key, "");
                break;
                case "lastName":
                    if(formContact.lastName) {
                        if(formContact.lastName.length > 10) {
                            setErrors(key, "Last Name must contain less than 10 caracters");
                            break;
                        }  
                        if(formContact.lastName.length < 3) {
                            setErrors(key, "Last Name must contain more than 3 caracters");
                            break;
                        }
                    }
    
                    setErrors(key, "");
                    break;
        
            default:
                break;
        }
    }

    return(
        <Container>
            <BreadcrumbComponent location={props.location}/>
            <Row className='row-content d-flex justify-content-center'>
                <Col xs={12} sm={{size: 4, offset: 0}}>
                    <Card>
                        <CardHeader>
                            <h4 className="d-flex justify-content-between">
                                <span>Our Address</span> <i className="fas fa-map-marker-alt"></i>
                            </h4> 
                        </CardHeader>
                        <CardBody>
                            121, Clear Water Bay Road<br />
		                    Clear Water Bay, Kowloon<br />
		                    HONG KONG<br />
		                    <i class="fa fa-phone fa"></i> : +852 1234 5678<br />
		                    <i class="fa fa-fax fa"></i> : +852 8765 4321<br />
		                    <i class="fa fa-envelope fa"></i> : <a className="link-footer" href="mailto:confusion@food.net">confusion@food.net</a>
                        </CardBody>
                        <CardFooter>
                            <Button outline color="success" className="mr-2" tag="a" href="tel:+85212345678">
                                <i class="fas fa-phone"></i> Call
                            </Button>
                            <Button outline color="primary" className="mr-2" tag="a" href="">
                                <i class="fab fa-skype"></i> Skype
                            </Button>
                            <Button outline color="info" className="mr-2" tag="a" href="mailto:confusion@food.net">
                                <i class="fas fa-envelope"></i> Email
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col xs={12} sm={{size: 4, offset: 2}}>
                    <Card>
                        <CardHeader>
                            <h4 className="d-flex justify-content-between">
                                <span>Map of our Location</span> <i className="fas fa-map-marked-alt"></i>
                            </h4>
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs={12} className="mb-2">
                    <h3><i class="fas fa-comments mr-3"> </i>Your FeedBack</h3>
                </Col>
                <Col xs={12} md={9}>
                    <Form onSubmit={(e) => {alert(JSON.stringify(formContact)); e.preventDefault()}}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={{size: 2, offset: 0}}>First Name</Label>
                            <Col md={{size: 10, offset: 0}}>
                                <Input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter Your First Name"
                                    value={formContact.firstName}
                                    valid={!errors.firstName && formContact.firstName}
                                    invalid={errors.firstName}
                                    onBlur={() => handleValidate("firstName")}
                                    onChange={({ target }) => {setFormContact(target.name, target.value);}}
                                    />
                                <FormText color={(errors.firstName) ? 'danger' : 'success'}>
                                    {errors.firstName}
                                </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={{size: 2, offset: 0}}>Last Name</Label>
                            <Col md={{size: 10, offset: 0}}>
                                <Input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter Your Last Name"
                                    value={formContact.lastName}
                                    valid={!errors.lastName && formContact.lastName}
                                    invalid={errors.lastName}
                                    onBlur={() => handleValidate("lastName")}
                                    onChange={({ target }) => setFormContact(target.name, target.value)}
                                    />
                                <FormText color={(errors.lastName) ? 'danger' :'success'}>
                                    {errors.lastName}
                                </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telNum" md={{size: 2, offset: 0}}>Tel Number</Label>
                            <Col md={{size: 10, offset: 0}}>
                                <Input
                                    id="telNum"
                                    type="tel"
                                    name="telNum"
                                    placeholder="Enter Your Tel Number"
                                    value={formContact.telNum}
                                    onChange={({ target }) => setFormContact(target.name, target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={{size: 2, offset: 0}}>Email</Label>
                            <Col md={{size: 10, offset: 0}}>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={formContact.email}
                                    onChange={({ target }) => setFormContact(target.name, target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="align-items-center">
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label htmlFor="agree" check>
                                        <Input
                                                id="agree"
                                                type="checkbox"
                                                name="agree"
                                                checked={formContact.agree}
                                                onChange={({ target }) => setFormContact(target.name, target.checked)}/>
                                           <strong>May We Contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input
                                    name="contactType"
                                    type="select" 
                                    value={formContact.contactType}
                                    onChange={({ target }) => setFormContact(target.name, target.value)}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={{size: 2, offset: 0}}>Your FeedBack</Label>
                            <Col md={{size: 10, offset: 0}}>
                                <Input
                                    id="message"
                                    name="message"
                                    type="textarea"
                                    placeholder="Type Your Feedback"
                                    rows={10}
                                    value={formContact.message}
                                    onChange={({ target }) => setFormContact(target.name, target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    <i class="fas fa-paper-plane"></i> Send FeedBack
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}