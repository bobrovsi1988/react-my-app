import React from 'react';
import data from '../../jsonfiles/Products.json';
import ProdactCard from './Product/Product';

class Products extends React.Component{

    render(){
        return(
            <div className='row'>
                {data.map((prod, index) =>{
                    return  <ProdactCard
                        name={prod.name}
                        img={prod.img}
                        weight={prod.weight}
                        pack={prod.pack}
                        descmin={prod.descmin}
                        descmax={prod.descmax}
                        price={prod.price}
                    />

                })}
            </div>

        )

    }
}
export default Products;