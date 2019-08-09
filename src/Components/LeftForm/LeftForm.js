import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Concartors from '../../jsonfiles/concartors';
import Products from '../../jsonfiles/Products';
import Button from 'react-bootstrap/Button';


class LeftForm extends React.Component{
    render(){
        return(


            <Form>
                <Form.Label>Поставщики :</Form.Label>
                {Concartors.map((arr , prod)=> arr.name).map(type => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id={`default-${type}`}
                            label={`${type}`}
                        />


                    </div>
                ))}
                <Form.Label>Продукт :</Form.Label>
                {Products.map((arr , prod)=> arr.name).map(type => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id={`default-${type}`}
                            label={`${type}`}
                        />


                    </div>
                ))}
                <p>Цена</p>
                <div className='row'>

                    <Col sm={4}>
                       <label> <Form.Control type="number" min={0} placeholder="0"/>руб</label>

                    </Col>

                    <Col sm={2}>
                        <span> - </span>
                    </Col>

                    <Col sm={4}>
                        <label><Form.Control type="number" min={0} placeholder="99999"/>руб</label>

                    </Col>


                </div>
                <Button variant="primary" type="submit">Показать</Button>
            </Form>
        )
    }
}
export default LeftForm;