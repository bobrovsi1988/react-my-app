import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Add=()=>{

        <Form>
            <Form.Row>
                <Col>
                    <Button variant="light">-</Button>
                </Col>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Button variant="light">+</Button>
                </Col>
            </Form.Row>
        </Form>


}
/*class AddToBasket extends React.Component{
    render(){
        return(
            <Form>
                <Form.Row>
                    <Col>
                        <Button variant="light">-</Button>
                    </Col>
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Button variant="light">+</Button>
                    </Col>
                </Form.Row>
            </Form>

        )
    }
}*/

export default Add;