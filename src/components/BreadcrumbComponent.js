import React from 'react';
//navigation
import { Link } from 'react-router-dom';
//layout
import { Row, Container } from 'reactstrap';
//component
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default function BreadcrumbComponent({ location }) {
    const arrPathname = splitAndCheck(location.pathname, '/');
    const links = createLinks(arrPathname);

    return(
        <Container className="mb-2">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    {links.map((link, index) => {
                        if(index == links.length - 1) 
                            return <BreadcrumbItem key={index} active>{convertUnUsualString(arrPathname[index])}</BreadcrumbItem>
                    
                        return(
                            <BreadcrumbItem key={index} active={index == links.length ? true : false}>
                                <Link to={link}>{convertUnUsualString(arrPathname[index])}</Link>
                            </BreadcrumbItem>
                        );}
                    )}
            </Breadcrumb>
            <h3 className="mt-xs-2 mt-md-5">{convertUnUsualString(arrPathname[arrPathname.length -1])}</h3>
            <hr />
        </Container>
    );
}

function createLinks(arrPathname) { /* ["page1", "subpage1"] --> ["/page1", /page1/subpage1] */
    let result = [];

    for(let i=0; i < arrPathname.length; i++) {
        let trace = "";

        for(let j=0; j<=i; j++) {
            trace += "/" + arrPathname[j];
        }

        result.push(trace);
    }

    return result;
}

function convertUnUsualString(unUsualString) { /* name-of-the-page --> Name Of The Page */
    let arr = splitAndCheck(unUsualString, '-');
    let usualString = arr.map((str) => str[0].toUpperCase() + str.slice(1))

    return usualString.reduce((accumulator, currentValue) => accumulator + " " + currentValue);     
}

function splitAndCheck(pathname, caracter) {
    let arr = pathname.split(caracter);

    return arr.filter((item) => item);
}