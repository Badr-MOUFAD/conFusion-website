import React from 'react';
//layout
import { Row, Col } from 'reactstrap';
//reactstrap component 
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';


function DishDetailComponent(props) {
    const dish = props.dish;

    if(!dish)
        return <div></div>

    const comments = dish.comments;
    let commentSection = <div>No comments about this dish</div>

    if(comments.length)
        commentSection = comments.map((comment) => <CommentComponent commentObject={comment} />);

    return(
        <frameElement>
            <DividerComponent text="Dish Details"/>
            <Row className="d-flex justify-content-center mb-5">
                <Col xs={12} md={5}>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={5}>
                    <h4 className="mb-5">Comments</h4>
                    {commentSection}
                </Col>
            </Row>
        </frameElement>
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
        <Row className="d-flex justify-content-center mt-5 mb-5">
            <Col xs={4}>
                <hr />
            </Col>
            <Col xs={2}>
                <h6 className="text-muted text-center">{props.text}</h6>
            </Col>
            <Col xs={4}>
                <hr />
            </Col>
        </Row> 
    );
}

export default DishDetailComponent;