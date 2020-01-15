import React from 'react';
import {Link} from 'react-router-dom'
import place01 from './../../../../src/img/places/place01.jpg'
import place02 from './../../../../src/img/places/place02.jpg'
import place03 from './../../../../src/img/places/place03.jpg'

class Places extends React.Component{

    render(){
        return(
            <section className="py-6 bg-gray-100 tour-list">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">Explore the beauty of Kiel </p>
                        <h2 className="mb-5">Popular Places</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="tour_grid_item">
							    <div className="tour_grid_item_post_thumbnail">
									<Link to="/" title="Bellagio, Italy">
											<img className="tour_grid_item_inner_image img-fluid" src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2015/04/post_09-1280x1280.jpg" />
									</Link>
							    </div>
							    <div className="tour_grid_item_inner_content">
                                    <h5 className="tour_grid_item_post_title">Kiel HBF</h5>
                                    <div className="tour_grid_item_post_excerpt">Kiel is a village on a promontory jutting out into Lake Como, in Italy.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="tour_grid_item">
							    <div className="tour_grid_item_post_thumbnail">
									<Link to="/" title="Bellagio, Italy">
											<img className="tour_grid_item_inner_image img-fluid" src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2015/05/post_07-1280x1280.jpg" />
									</Link>
							    </div>
							    <div className="tour_grid_item_inner_content">
                                    <h5 className="tour_grid_item_post_title">CAU</h5>
                                    <div className="tour_grid_item_post_excerpt">Kiel is a village on a promontory jutting out into Lake Como, in Italy.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="tour_grid_item">
							    <div className="tour_grid_item_post_thumbnail">
									<Link to="/" title="Bellagio, Italy">
											<img className="tour_grid_item_inner_image img-fluid" src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2015/04/post_08-1280x1280.jpg" />
									</Link>
							    </div>
							    <div className="tour_grid_item_inner_content">
                                    <h5 className="tour_grid_item_post_title">Berlin</h5>
                                    <div className="tour_grid_item_post_excerpt">Kiel is a village on a promontory jutting out into Lake Como, in Italy.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <Link to="/kiel" className="btn btn-primary btn-block btn-tour">View All Places</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default Places