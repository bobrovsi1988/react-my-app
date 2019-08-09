import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Modal from './Components/Header/Login/Login';
import FormEnter from './Components/FormEnter/FormEner';
import Concard from './Components/Concard/Contractors/Contractors';
import Products from './Components/Products/Products';
import LeftForm from './Components/LeftForm/LeftForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Basket from './Components/Basket/Basket';
import Rating from './Components/Rating/Rating';
import Home from './Components/Home/Home';
import Newhome from './Components/Newhome/newhome'
import {Route} from 'react-router';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <Container>
          <switch>
              <Route path='/home' component={Home}/>
              <Route path='/newhome' component={Newhome}/>
          </switch>
          <Basket/>
          <Row>
        <Header/>
              <Link to='/home'>Home</Link>
              <Link to='/newhome'>Newhome</Link>

          </Row>
          <Row>
        <Col lg={3} className="col-xs-4">
            <LeftForm/>

        </Col>
          <Col lg={9} className="col-xs-8">
              <Concard/>
              {/*<Product img='PCM.png' name='Перец черный молотый' weight='500' pack='банка'/>*/}
                <Products/>
          </Col>
          </Row>


      </Container>
    );
  }
}

export default App;
