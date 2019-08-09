import React from 'react';
import './Basket.scss';
import TestForm from "./form/form";
import BasketTr from "./BasketTr";
import ContactsModule from '../ContactsModule/ContactsModule';
import ReactModal from 'react-modal';

import { connect } from 'react-redux';

class Basket extends React.Component {
    componentWillMount() {
        ReactModal.setAppElement('body');
    }
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
            <div id="basket" className="basket" style={{ backgroundImage: `url(require("ima/img.png"))`}} >
Корзина

                <div onClick={this.handleOpenModal}>
                    товаров
                    {this.props.posts.length}


                </div>

                <ReactModal

                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <div >

                        <BasketTr />


                    </div>

                    <button onClick={this.handleCloseModal} className="bg-danger btn navbar-fixed-top">Close</button>
                </ReactModal>

                {/*<TestForm/>*/}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
// ReactModal.setAppElement('#app-base');
export default connect(mapStateToProps)(Basket);
