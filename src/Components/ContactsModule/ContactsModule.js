import React from 'react';
import "./ContactsModule.scss";
class ContactsModule extends React.Component{
    constructor(){
        super();
        this.contacts={
            tel:'90-32-00',
            email:"bobrovsi1988@gmail.com",
            mobile:"330-10-80",
        }
}

    render(){
        let contacts={
            tel:"90-32-00",
            email:"bobrovsi1988@gmail.com",
            mobile:"330-10-80",}
        return(
            <div className="contactsmodule">
                <p>Телефон: {this.contacts.tel}</p>
                <p>Email: {this.contacts.email}</p>
                <p>Моб: {this.contacts.mobile}</p>
            </div>
        )
    }

}

export default ContactsModule;