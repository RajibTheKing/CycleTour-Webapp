import React, {Component} from 'react';

class Users extends Component{

    render(){
        let userAuth = JSON.parse(localStorage["userAuth"])
        
        return(
            <div id="fk-profile">
                <div className="container py-4">
                    <div className="row min-vh-100">
                        <div className="col-md-8 col-lg-6 col-xl-6">
                            <h2>User profile</h2>
                            <ul>
                                <li>{userAuth.name}</li>
                                <li>{userAuth.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users