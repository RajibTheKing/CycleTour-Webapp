import React, {Component} from 'react';
import axios from 'axios'
import freedomKielApi from './../../../helpers/freedomKielApi'
import { Redirect, Link } from 'react-router-dom'

class Register extends Component{

    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: localStorage["userAuth"] && JSON.parse(localStorage["userAuth"]).auth_token
                        ? true: false,
            registerError: false,
            registerSuccess: false
            
        }

        this.registerFormSubmit = this.registerFormSubmit.bind(this);
        this.email= React.createRef();
        this.password = React.createRef();
        this.username = React.createRef();
    }

    registerFormSubmit(event){
        event.preventDefault();

        let params = {
            email: this.email.current.value,
            password: this.password.current.value,
            username: this.username.current.value
        }

        const url = freedomKielApi.URL + '/users/register';

        axios({
            method: 'post',
            url: url,
            data: params
        })
        .then(response => response.data)
        .then((data) => {
            console.log(data);
            
            if(data.success && data.user.email){
                this.setState({
                    registerSuccess:true
                })
            } else {
                this.setState({
                    registerError:true
                })
            }
        }).catch(function (error) {
            // console.log(error);
        })

        

        return;
        
    }

    render(){
        if(this.state.isLoggedIn){
            return(
                <Redirect to='/profile' />
            )
        }
        return(
            <div id="fk-register">
                <div className="container py-6">
                    <div className="row min-vh-100">
                        <div className="col-md-8 col-lg-6 col-xl-6 d-flex align-items-center">
                        <div className="w-100 py-10 px-md-5 px-xl-6 position-relative">
                            <div className="mb-5">
                                <h2>Create Your Account</h2>
                            </div>
                            {
                                this.state.registerSuccess?
                                <p className="text-left"><small>Registration is successful. <Link to="/login">Login</Link> from here.</small></p>
                                :''
                            }
                            <form className="form-validate" onSubmit={this.registerFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="loginUsername" className="form-label"> Username</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    required
                                    className="form-control"
                                    name="username"
                                    ref={this.username}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginUsername" className="form-label"> Email Address</label>
                                <input
                                    type="email"
                                    autoComplete="off"
                                    required
                                    className="form-control"
                                    name="email"
                                    ref={this.email}
                                />
                            </div>
                            <div className="form-group mb-4">
                                <div className="row">
                                <div className="col">
                                    <label htmlFor="loginPassword" className="form-label"> Password</label>
                                </div>
                                </div>
                                <input 
                                    type="password"
                                    required
                                    className="form-control"
                                    name="password"
                                    ref={this.password}
                                />
                            </div>
                            <button className="btn btn-lg btn-block btn-primary">Register</button>
                            <hr className="my-3 hr-text letter-spacing-2" />
                            <p className="text-center"><small className="text-muted text-center">If you have an account, <Link to="/login">Login</Link> from here.</small></p>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Register