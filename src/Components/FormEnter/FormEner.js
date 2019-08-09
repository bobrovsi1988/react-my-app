import React from 'react';
import Action from '../admin/admin.php';

class FormEnter extends React.Component{
    render(){
        return(
            <form id="FormEnter" method="POST" action="http://diplom/admin.php">

                <div className="form-group row">
                    <label htmlFor="logName" className="col-lg-2 text-right">Name</label>
                    <div className="col-lg-6">
                        <input id="logNmae" className='form-control ' type='text' placeholder="Name" name="name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="logEmail" className="col-lg-2 text-right">Email</label>
                    <div className="col-lg-6">
                        <input id="logEmail" className='form-control ' type='email' placeholder="Email" name="email"/>
                    </div>
                </div>
                <button className="btn bg-success col-lg-offset-6" form='FormEnter'>Send</button>
            </form>
        )
    }
}
export default FormEnter;