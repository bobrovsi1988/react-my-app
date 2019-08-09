import React from "react";
import { connect } from 'react-redux';
class TestForm extends React.Component{
    pervId = 0;
    handleSubmit = event => {
        event.preventDefault();
        // const title = this.getTitle.value;
        const val = this.getVal.value;
        const text = this.getText;


        const data = {
            id: (this.pervId+=1),
            // title,
            val,
            text

        };
        // console.log(data);
        this.props.dispatch({
            type: "ADD_POST",
            data
        });

        this.getVal.value=''
        this.getText='';
    };


    render(){
        return(
            <div>

            <form onSubmit={this.handleSubmit}>
                <label  ref={label => this.getText = label.innerHTML}> bla</label>
                <input  type="number"
                        ref={input => this.getVal = input}/>

                <input type="submit"/>
            </form>
            </div>
        )
    }
}
export default connect()(TestForm) ;