import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Redirect, Link, withRouter } from 'react-router-dom'
import freedomKielApi from './../../../helpers/freedomKielApi'
import { setLogin } from './../../../actions/index'
import axios from 'axios'

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            loginError:false
        }

        this.loginFormSubmit = this.loginFormSubmit.bind(this);
        this.email= React.createRef();
        this.password = React.createRef();
    }

    loginFormSubmit(event){
        event.preventDefault();

        let params = {
            email: this.email.current.value,
            password: this.password.current.value
        }

        const url = freedomKielApi.URL + '/users/login';

        axios({
            method: 'post',
            url: url,
            data: params
        })
        .then(response => response.data)
        .then((data) => {

            if(data.success && data.auth.auth_token){
                localStorage["userAuth"] = JSON.stringify(data.auth)
                this.props.onSetLogIn(true)
            } else {
                this.setState({
                    loginError:true
                })
            }
        }).catch(function (error) {
            
        })

        

        return;
        
    }

    render(){
        const {userAuth} = this.props.state
        console.log(userAuth);
        
        if(userAuth.isLogedIn){
            return(
                <Redirect to='/profile' />
            )
        }
        return(
            <div id="fk-Login">
                <div className="container py-6">
                    <div className="row min-vh-100">
                        <div className="col-md-8 col-lg-6 col-xl-6 d-flex align-items-center">
                        <div className="w-100 py-10 px-md-5 px-xl-6 position-relative">
                            <div className="mb-5">
                                <h2>Welcome back</h2>
                            </div>
                            {
                                this.state.loginError?
                                <p className="text-center text-secondary"><small>Login failed. Please enter valid email and password.</small></p>
                                :''
                            }
                            
                            
                            <form className="form-validate" onSubmit={this.loginFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="loginUsername" className="form-label"> Email Address</label>
                                <input
                                    type="email"
                                    autoComplete="off"
                                    required
                                    data-msg="Please enter your email"
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
                                    data-msg="Please enter your password"
                                    className="form-control"
                                    name="password"
                                    ref={this.password}
                                />
                            </div>
                            <button className="btn btn-lg btn-block btn-primary">Sign in</button>
                            <hr className="my-3 hr-text letter-spacing-2" />
                            <p className="text-center"><small className="text-muted text-center">Don't have an account yet? <Link to="/register">Register Now</Link></small></p>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSetLogIn:(isLogin) =>{
            dispatch(setLogin(isLogin))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))