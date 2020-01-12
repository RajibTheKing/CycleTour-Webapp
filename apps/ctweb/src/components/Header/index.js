import React from 'react';
import Logo from './../Logo/index';
import Navigation from './components/Navigation';
import './css/header.css'

class Header extends React.Component{
    render(){
        return(
            

        <header className="header">
                <div className="container">
                    <section className="header-inner">
                        <div className="container">
                            <div className="logo pull-left pull-sm-up col-sm-6 col-xs-12  text-left">
                                <a href="http://geniuscript.com/classifiedplace-b3/index.html">
                                    <img src="./Side version_files/logo.png" alt="" />
                                    <img src="./Side version_files/logo_mini.png" alt="" className="mini-logo"/>
                                </a>
                            </div>
                            <div className="pull-left menu"> 
                                <div className="box-navigaion clearfix">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-menu">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="lang-manu dropdown pull-right">
                                        <button className="btn btn-secondary" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="./Side version_files/en.png" alt="" /> <span>EN</span>
                                            <i className="icon-dropdown"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="about-us">
                                            <a className="dropdown-item" href="http://geniuscript.com/classifiedplace-b3/map_side2.html#">
                                                <img src="./Side version_files/en.png" alt="" /> EN
                                            </a>
                                            <a className="dropdown-item" href="http://geniuscript.com/classifiedplace-b3/map_side2.html#">
                                                <img src="./Side version_files/hr.png" alt="" /> HR
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <nav className="navbar text-color-primary">
                                    <div className="text-right">
                                        <button className="navbar-toggler hidden" type="button" data-toggle="collapse" data-target="#main-menu">
                                            ☰
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="main-menu">
                                        <ul className="nav navbar-nav clearfix">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="http://geniuscript.com/classifiedplace-b3/map_side2.html#" role="button" aria-haspopup="true" aria-expanded="false">
                                                    Slider
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="http://geniuscript.com/classifiedplace-b3/map_side2.html#" role="button" aria-haspopup="true" aria-expanded="false">
                                                    Map
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </section>
                </div>
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