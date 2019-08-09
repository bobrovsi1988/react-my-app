import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';


class AddToBasket extends React.Component{
   /* constructor(...args) {
        super(...args);

        this.state = { validated: false };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }
*/
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
            name:(this.props.name),
            price:(this.props.price)

        };
        // console.log(data);
        this.props.dispatch({
            type: "ADD_POST",
            data
        });

        this.getVal.value=''

    };
    render() {
        // const { validated } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">

                        <Form.Control
                            required
                            type="number"
                            min='0'

                            //placeholder="First name"
                            defaultValue="1"
                            ref={input=>this.getVal =input}
                        />

                    </Form.Group>

                </Form.Row>

                <Button type="submit" variant='warning' >Добавить</Button>
            </Form>
        );
    }
}


export default connect()( AddToBasket);