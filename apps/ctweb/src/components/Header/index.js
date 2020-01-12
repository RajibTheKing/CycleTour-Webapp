import React from 'react';
import Logo from './../Logo/index';
import Navigation from './components/Navigation';
import './css/header.css'

class Header extends React.Component{
    render(){
        return( 
            <header className="header">
                <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
                    <div className="container">
                        <Logo />
                        <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
                        <Navigation />
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;