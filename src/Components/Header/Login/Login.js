import React from 'react';
import ReactModal from "react-modal";
import FormEnter from '../../FormEnter/FormEner';
import Button from "react-bootstrap/Button";
class Login extends React.Component{
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

    render () {
        return (
            <div>
                <button onClick={this.handleOpenModal} className='btn bg-primary'>Login</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <FormEnter/>
                    <button onClick={this.handleCloseModal} className="bg-success btn">Close</button>
                </ReactModal>
            </div>
        );
    }
}

const props = {};

export default Login;