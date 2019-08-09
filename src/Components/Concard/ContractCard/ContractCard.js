import React from 'react';
import './ContracCard.scss';
import Image from 'react-bootstrap/Image';
import ReactModal from 'react-modal';
import Rating from '../../Rating/Rating';



class  ContractCard extends React.Component{
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
            <card className='contractcard col-lg-3 col-xs-12 col-sm-6'>
                <div  onClick={this.handleOpenModal} style={{cursor:"pointer"}}>
                <Image src={'http://diplom/my-app/src/Components/Concard/Contractors/img/' + this.props.img} roundedCircle />
               
                {/*<Rating/>*/}
                <h3>{this.props.name}</h3>
                {/*<p>{this.props.description}</p>*/}
                <Rating rating={this.props.rating}/>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <div>
                        <Image style={{ width: "200px", height: "200px"}} src={'http://diplom/my-app/src/Components/Concard/Contractors/img/' + this.props.img} roundedCircle />
                        <h3>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                    </div>

                    <button onClick={this.handleCloseModal} className="bg-danger btn navbar-fixed-top">Close</button>
                </ReactModal>


            </card>
        )
    }

}
export default ContractCard;