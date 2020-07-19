import React from 'react';
import PropTypes from 'prop-types';

//layout
import { Container, Row, Col } from 'reactstrap';

//reactstrap components
import { Media } from 'reactstrap';


export function MenuItem(props) {

    return(
        <Media key={props.id} tag="li" className="mt-5">
            <Media left href="#" className="mr-5">
                <Media object src={props.image} alt={props.name} />
            </Media>
            <Media body> 
                <Media heading> 
                    {props.name}
                </Media>
                <p>{props.description}</p>
            </Media>
        </Media>
    );
}

MenuItem.prototype = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
}


function Menu(props) {

    const dishes = [
        {
          id: 0,
          name:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
       {
          id: 1,
          name:'Zucchipakoda',
          image: 'assets/images/zucchipakoda.png',
          category: 'appetizer',
          label:'',
          price:'1.99',
          description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
       {
          id: 2,
          name:'Vadonut',
          image: 'assets/images/vadonut.png',
          category: 'appetizer',
          label:'New',
          price:'1.99',
          description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
       {
          id: 3,
          name:'ElaiCheese Cake',
          image: 'assets/images/elaicheesecake.png',
          category: 'dessert',
          label:'',
          price:'2.99',
          description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
    ];

    return(
        <Container fluid>
            <Row>
                <Media list className="mr-5">
                    {dishes.map((dish) => 
                    <MenuItem id={dish.id} name={dish.name} image={dish.image} description={dish.description}/>)}
                </Media>
            </Row>
        </Container>
    );
}


export default Menu;