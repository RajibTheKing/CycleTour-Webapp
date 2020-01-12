import React from 'react';

class FooterWidgets extends React.Component {
    render(){
        return(
            <div className="py-6 bg-gray-200 text-muted"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="font-weight-bold text-uppercase text-dark mb-3">Freedom Kiel</div>
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
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <h6 className="text-uppercase text-dark mb-3">Rentals</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-muted">Rooms</a></li>
                                <li><a href="#" className="text-muted">Map on top</a></li>
                                <li><a href="#" className="text-muted">Side map</a></li>
                                <li><a href="#" className="text-muted">No map</a></li>
                                <li><a href="#" className="text-muted">Room detail</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="text-uppercase text-dark mb-3">Daily Offers &amp; Discounts</h6>
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