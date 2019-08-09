import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);



class Rating extends React.Component{
    Stars(){
        let arr=[];
        for(let i=0;i<5;i++){
            if(i<this.props.rating)arr.push(<FontAwesomeIcon icon={"star"} color={'yellow'}/>)
            else arr.push(<FontAwesomeIcon icon={"star"} color={'black'}/>)
        }


        return arr;
    }

    render(){
        return(
            <div>

                {this.Stars()}

            </div>
        )
    }
}
export default Rating;