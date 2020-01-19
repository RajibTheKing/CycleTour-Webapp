import React from 'react';
import {Link} from 'react-router-dom'
import Image from './../../../helpers/Image'
import ctKielApi from './../../../helpers/ctKielApi'
import axios from 'axios'
 
class PopularTours extends React.Component{

    constructor() {
        super();
        this.state = {
            tours:[]
        };
    }

    componentDidMount() {
    
        const url = ctKielApi.URL + '/tours/popular'
        
        axios.get(url).then(response => response.data)
        .then((data) => {
            console.log(data.tours);
            this.setState({
                tours: data.tours
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const {tours} = this.state

        return(
            <section className="py-6 bg-gray-100 tour-list">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">Explore the beauty of Kiel </p>
                        <h2 className="mb-5">Popular Tours</h2>
                    </div>
                    <div className="row">
                        {
                            tours.map((tour,index) => {

                                const link = '/tour/' + tour.id

                                return(
                                    <div key={index} className="col-lg-4 mb-3 mb-lg-0 text-center">
                                        <div className="tour-grid-item">
                                            <Link to={link}>
                                                <div className="image">
                                                    <Image src={'/images/tours/'+tour.image} alt={tour.title} class="img-fluid" />
                                                </div>
                                                <div className="content clearfix">
                                                    <h5>{tour.title}</h5>
                                                    <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <Link to="/tours" className="btn btn-primary btn-block btn-tour">View All Tours</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default PopularTours