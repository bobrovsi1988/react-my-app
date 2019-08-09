import React from 'react';
import './ContracCard.scss';

import Rating from "../Rating/Rating";

class  ContractCard extends React.Component{
    render(){
        return(
            <card className='contractcard'>
                <img src={'src/components/Contractors/img/' + this.props.img}/>
                <Rating/>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>


            </card>
        )
    }

}
export default ContractCard;