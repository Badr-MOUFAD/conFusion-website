import React, {useEffect, useState} from "react";

import { Container, Row, Col } from "reactstrap";

export default function(props) {
    const isLoading = props.isLoading;
    const errorMessage = props.errorMessage;

    const Loading = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setTimeout(() => setCount((count + 1) % 4), 500);
        });

        const displayPoint = (num) => {
            let result = "";

            for(let i=0; i < num; i++) {
                result += "."
            }
 
            return result;
        };

        return (
            <Container className="my-5">
                <Row>
                    <Col className="d-flex justify-content-center" xs={12}>
                        <p className="lead">
                            <i class="fas fa-spinner fa-lg fa-spin text-success"></i> Loading <span>{displayPoint(count)}</span>
                            <br />
                            <small className="text-muted">Please wait for a while</small>
                        </p>  
                    </Col>
                </Row>
            </Container>
        );
    }

    const Error = () => {
        return(
            <Container className="my-5 w-50 h-25">
                <Row className="d-flex justify-content-center">
                    <Col xs={6}>
                        <h3 className="lead">Error</h3>
                        <p className="text-muted">{errorMessage}</p>
                    </Col>
                    <Col xs={6} className="d-flex justify-content-center align-self-center">
                        <i class="fas fa-exclamation-triangle fa-2x text-danger"></i>
                    </Col>
                </Row>
            </Container>
        );
    }

    if(isLoading) return <Loading />
    if(errorMessage) return <Error />

    return <React.Fragment></React.Fragment>
}