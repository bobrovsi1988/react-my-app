import React from "react";
import Card from 'react-bootstrap/Card';
import './Product.scss';
import ReactModal from "react-modal";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import GO from '../AddToBasket/AddToBasket.js';
import data from '../Products';

class Product extends React.Component{
    constructor () {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render(){


        return(
            <Card className='product col-lg-4'>
                <Card.Body className="card">
                    <Card.Title><h3>{this.props.name}</h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Вес:{this.props.weight}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Упаковка:{this.props.pack}</Card.Subtitle>
                    <Card.Img src={'http://diplom/my-app/src/Components/Products/img/' + this.props.img}/>
                    <Card.Text>{this.props.descmin}</Card.Text>
                    <Card.Text>Цена: {this.props.price}</Card.Text>
                    <Button onClick={this.handleOpenModal} className='btn bg-primary' className='modal_button'>Подробнее</Button>
                    <Card.Text><GO name={this.props.name} price={this.props.price}/></Card.Text>


                </Card.Body>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <div>
                            <img style={{ width: "200px", height: "200px"}} src={'http://diplom/my-app/src/Components/Products/img/' + this.props.img}/>
                            <div>
                                <h3 >Название : <span className="text-info">{this.props.name}</span></h3>
                                <h3 >Цена : <span className="text-info">{this.props.price}</span></h3>
                                <h3 >Вес : <span className="text-info">{this.props.weight}</span></h3>
                                <h3 >Упаковка : <span className="text-info">{this.props.pack}</span></h3>
                                <h3 >Описание : <span className="text-info">{this.props.descmax}</span></h3>
                            </div>
                        </div>
                        <button onClick={this.handleCloseModal} className="bg-danger btn navbar-fixed-top">Close</button>
                    </ReactModal>

            </Card>

        )
    }
}
export default Product;