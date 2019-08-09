import React from "react";
import Contacts from "../ContactsModule/ContactsModule";
import Logo from "./img/Logo.png";
import "./Header.scss";
import Login from "./Login/Login";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class Header extends React.Component{

    render(){
        return(
            <Row className="header">
                <Col className="logo " sm={12} lg={3} xs={12}>
                    <img src={Logo} className="img-rounded "/>
                </Col>
                <Col className=" text-center col-xs-6" sm="6" lg={6} xs={6} md={6} xl={6}>
                    <h1>ProSpecii</h1>
                    <h2>Только лучшие специи в мире</h2>
                </Col>
                <Col className=" text-right" sm={6} lg={3} xs={6}>
                    <h3 className="h3 "><Login/></h3>
                    <Contacts/>
                </Col>


            </Row>


        )
    }
}
export default Header;