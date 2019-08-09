import React from 'react';
import './Contractors.scss';
import '../ContractCard/ContractCard';
import ContractCard from "../ContractCard/ContractCard";
import data from '../../../jsonfiles/concartors';
class Contractors extends React.Component{
    constructor() {
        super();
    }

render(){
    return(
        <div className='row contractors'>
            {data.map((prod, index) =>{
                return  <ContractCard
                    name={prod.name}
                    img={prod.img}
                    description={prod.description}
                    rating={prod.rating}

                />

            })}
        </div>

    )
}
}

export default Contractors;