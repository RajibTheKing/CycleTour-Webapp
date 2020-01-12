import React from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {setLogout} from './../../../actions/index'


class Navigation extends React.Component{

    constructor(props){
        super(props)
        this.theLogoutHandle = this.theLogoutHandle.bind(this)
    }

    theLogoutHandle(e){
        e.preventDefault();

        localStorage.removeItem('userAuth')

        this.props.onSetLogout(false)
        
        return(
            <Redirect to="/login" />
        )
    }

    render(){

        const { userAuth } = this.props.state

        console.log(userAuth);
        
        
        
        return(
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <Nav className="navbar-nav ml-auto">
                    <NavItem className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink to="/map" className="nav-link">Tour Map</NavLink>
                    </NavItem>
                    
                    <NavItem className="nav-item">
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                    </NavItem>
                        
                </Nav>
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
        onSetLogout:(isLogin) =>{
            dispatch(setLogout(isLogin))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));