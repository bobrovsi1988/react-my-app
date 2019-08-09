import React from 'react';
import './Contractors.scss';
import '../ContractCard/ContractCard';
import ContractCard from "../ContractCard/ContractCard";
class Contractors extends React.Component{
    constructor(){
        super();
        this.data=[
            {   img:'iran.png',
                name:'iran',
                description:'это исламская республика в зоне Персидского (Арабского) залива с историческими памятниками Персидской империи. Один из них – руины древнего города Персеполь, столицы империи, основанной в VI веке до н. э. Дарием I. В нынешней столице страны Тегеране расположен роскошный дворец Голестан, резиденция династии Каджаров с 1794 по 1925 годы, а также такие современные здания, как Бордж-е Милад высотой 435 метров.',
            },
            {
                img:'india.png',
                name:'india',
                description:'огромная страна в Южной Азии с разнообразным рельефом: на ее территории расположены как горные вершины Гималаев, так и побережье Индийского океана',
            },
            {
                img:'ispan.png',
                name:'ispania',
                description:'европейская страна, расположенная на Пиренейском полуострове. Территория Испании разделена на 17 автономных регионов. В столице страны, Мадриде, находятся Королевский дворец и музей Прадо, где хранятся произведения европейских мастеров.',
            },
            ]

    }
    returnContractos(){
        let arr=[];
        for(let i=0;i<this.data.length;i++){
            let cotractor=<ContractCard img={this.data[i].img} name={this.data[i].name} description={this.data[i].description}/>;
            arr.push(cotractor);
        }
        return arr;
    }

render(){
    return(
        <div className='contractors'>
            {this.returnContractos()}
            {/*<ContractCard img={this.data.img} name={this.data.name} description={this.data.description}/>*/}
        </div>
    )
}
}

export default Contractors;