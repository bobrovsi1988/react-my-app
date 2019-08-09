import React from "react";
import Card from 'react-bootstrap/Card';
import './Product.scss';
import Image from 'react-bootstrap/Image';
import data from './Products';

class Product extends React.Component{

    render(){


        return(
            <Card className='product'>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Вес:{this.props.weight}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Упаковка:{this.props.pack}</Card.Subtitle>
                    <Card.Img src={'http://diplom/my-app/src/Components/Product/img/' + this.props.img}/>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

        )
    }
}
export default Product;