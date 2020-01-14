import React from 'react';
import Logo from './../../Logo/index'

class FooterWidgets extends React.Component {
    render(){
        return(
            <div className="py-6 bg-gray-200 text-muted"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="font-weight-bold text-uppercase text-dark mb-3"> <Logo /></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" target="_blank" className="text-muted text-hover-primary"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" target="_blank" className="text-muted text-hover-primary"><i className="fab fa-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" target="_blank" className="text-muted text-hover-primary"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" target="_blank" className="text-muted text-hover-primary"><i className="fab fa-pinterest"></i></a>
                                </li>
                            </ul>
                            <p className="text-sm mb-md-0 text-md-left">© 2020 Your company.  All rights reserved.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <h6 className="text-uppercase text-dark mb-3">Tours</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-muted">Tour Maps</a></li>
                                <li><a href="#" className="text-muted">Emergency Help</a></li>
                                <li><a href="#" className="text-muted">About Kiel</a></li>
                                <li><a href="#" className="text-muted">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="text-uppercase text-dark mb-3">Subscribe Newsletter</h6>
                            <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                            <form action="#" id="newsletter-form">
                                <div className="input-group mb-3">
                                    <input type="email" placeholder="Your Email Address" aria-label="Your Email Address" className="form-control bg-transparent border-dark border-right-0" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-outline-dark border-left-0"> <i className="fa fa-paper-plane text-lg"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
		    </div>
        )
    }
}

export default FooterWidgets;