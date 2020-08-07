import React, { useState } from 'react';
//layout
import { Row, Col, Container } from 'reactstrap';
//reactstrap component 
import { Card, CardBody, CardImg, CardTitle, CardText, Button } from 'reactstrap';
import { Modal, ModalBody, ModalHeader, Label } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
//m component
// import BreadcrumbComponent from './BreadcrumbComponent';
import LoadingComponent from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';
//animation
import { Fade, Stagger } from 'react-animation-components';


export default function DishDetailComponent(props) {
    const dish = props.dish;
    const [isAddCommentOpen, setIsAddCommentOpen] = useState(false); 
    const addComment = props.addComment;
    const isLoading = props.isLoading;
    const errorMessage = props.errorMessage;

    if(isLoading) {
        return <LoadingComponent isLoading={isLoading} errorMessage={errorMessage}/>
    }

    if(errorMessage) {
        return <LoadingComponent isLoading={isLoading} errorMessage={errorMessage}/>
    }
    
    if(!dish)
        return <div></div>

    const comments = dish.comments;
    let commentSection = <div>No comments about this dish</div>

    if(comments.length)
        commentSection = comments.map((comment) => <Fade in><CommentComponent key={comment.id} commentObject={comment}/></Fade>);

    return(
        <Container>
            {/* <BreadcrumbComponent location={props.location}/> */}
            
            <DividerComponent text={dish.name}/>
            <Row className="d-flex justify-content-center mb-5">
                <Col xs={12} md={5}>
                    <Fade in>
                        <Card>
                            <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle><h5>{dish.name}</h5></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </Fade>
                </Col>
                <Col xs={12} md={5}>
                    <h4 className="mb-5">Comments</h4>
                    <Stagger in>
                        {commentSection}
                    </Stagger>
                    <Button className="mt-2" color="secondary" onClick={() => setIsAddCommentOpen(true)}>
                        <i class="fas fa-pen"></i> Add Comment
                    </Button>
                    <AddCommentComponent 
                        isOpen={isAddCommentOpen} 
                        handleIsOpen={() => setIsAddCommentOpen(false)}
                        handleSubmit={(values) => addComment(dish.id, values.author, values.rate, values.comment)}
                        />
                </Col>
            </Row>
        </Container>
    );
}

export function AddCommentComponent(props) {
    const isOpen = props.isOpen;
    const handleIsOpen = props.handleIsOpen; 
    const handleSubmit = props.handleSubmit;

    const isRequired = (val) => Boolean(val);
    const minLength = (val) => isRequired(val) && val.length > 2
    const maxLength = (val) => isRequired(val) && val.length < 11

    return(
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <h3>Add Comment</h3> 
            </ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Container>
                        <Row class="form-group my-1">
                            <Label>
                                Rate
                            </Label>
                            <Control.select model=".rate" className="form-control">
                                {["1", "2", "3", "4", "5"].map((num) => 
                                    <option value={num}>{num}</option>
                                )}
                            </Control.select>
                        </Row>
                        <Row className='form-group my-1'>
                            <Label>
                                Your Name
                            </Label>
                            <Control.text 
                            model=".author" 
                            className="form-control" 
                            placeholder="Enter Your Name"
                            validators={{ isRequired, minLength, maxLength }}
                            />
                            <Errors
                                className="text-danger"
                                model=".authorName"
                                show="touched"
                                messages={{
                                    isRequired: "This field can not be empty",
                                    minLength: "Name must contain at least 3 caracters",
                                    maxLength: "Name must contain at maximum 10 caracters"
                                }}/>
                        </Row>
                        <Row className="form-group my-3">
                            <Label>
                                Your Comment
                            </Label>
                            <Control.textarea model=".comment" rows="6" className="form-control" placeholder="Enter Your Comment"/>
                        </Row>
                        <Row className="form-group">
                            <Button type="submit" color="primary" className="mr-1">
                                <i class="fas fa-paper-plane"></i> Submit
                            </Button>
                            <Button color="secondary" onClick={() => handleIsOpen()}>
                                Cancel
                            </Button>
                        </Row>
                    </Container>
                </LocalForm>
            </ModalBody>
        </Modal>
    );
}

export function CommentComponent(props) {
    const commentObject = props.commentObject;

    return(
        <Row key={commentObject.id} tag="dl" className="mb-3">
            <Col tag="dt" xs={2}>{commentObject.author}</Col>
            <Col tag="dd" xs={{size: 9, offset: 1}}>
                <p>{commentObject.comment}</p>
                <CommentDate date={commentObject.date}/>
            </Col>
        </Row>
    );
}

export function CommentDate(props) {
    const date = new Date(props.date);

    let dateToDisplay = Intl.DateTimeFormat('en-Us', {year: 'numeric', month: 'short', day: '2-digit'}).format(date);

    return(
        <small className="text-muted">{dateToDisplay}</small>
    );
}

export function DividerComponent(props) {
    const style = {
        borderTop: "1px solid lightgray"
    };

    return(       
        <Row className="d-flex justify-content-center my-5">
            <Col xs={4}>
                <hr />
            </Col>
            <Col xs={2}>
                <h6 className="text-center lead">{props.text}</h6>
            </Col>
            <Col xs={4}>
                <hr />
            </Col>
        </Row> 
    );
}
