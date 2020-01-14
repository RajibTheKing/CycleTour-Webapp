import React from 'react';
import place01 from './../../../../src/img/places/place01.jpg'
import place02 from './../../../../src/img/places/place02.jpg'
import place03 from './../../../../src/img/places/place03.jpg'

class Places extends React.Component{

    render(){
        return(
            <section className="py-6 bg-gray-100">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">Explore the beauty of Kiel </p>
                        <h2 className="mb-5">Top Places in Kiel</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="place-grid-item">
                                <a href="">
                                    <div className="image">
                                        <img className="img-fluid" src={place01} alt="Tour Package" />
                                    </div>
                                    <div className="content clearfix">
                                        <h5>Paris in Love</h5>
                                        <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="place-grid-item">
                                <a href="">
                                    <div className="image">
                                        <img className="img-fluid" src={place02} alt="Tour Package" />
                                    </div>
                                    <div className="content clearfix">
                                        <h5>Paris in Love</h5>
                                        <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="place-grid-item">
                                <a href="">
                                    <div className="image">
                                        <img className="img-fluid" src={place03} alt="Tour Package" />
                                    </div>
                                    <div className="content clearfix">
                                        <h5>Paris in Love</h5>
                                        <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" style={{height:'30px'}}></div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="place-grid-item">
                                <a href="">
                                    <div className="image">
                                        <img className="img-fluid" src={place01} alt="Tour Package" />
                                    </div>
                                    <div className="content clearfix">
                                        <h5>Paris in Love</h5>
                                        <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="place-grid-item">
                                <a href="">
                                    <div className="image">
                                        <img className="img-fluid" src={place02} alt="Tour Package" />
                                    </div>
                                    <div className="content clearfix">
                                        <h5>Paris in Love</h5>
                                        <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="place-grid-item">
                                <a href="">
                                    <div className="image">
                                        <img className="img-fluid" src={place03} alt="Tour Package" />
                                    </div>
                                    <div className="content clearfix">
                                        <h5>Paris in Love</h5>
                                        <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default Places