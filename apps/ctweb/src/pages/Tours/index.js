import React, { Component } from "react";
import axios from 'axios'
import ctKielApi from './../../helpers/ctKielApi'
import {Link} from 'react-router-dom'
import Image from './../../helpers/Image'

class Tours extends Component {

	constructor() {
		super();
		this.state = {
		  tours: []
		}
	}
	

	componentDidMount() {
    
		const url = ctKielApi.URL + '/tours'
		axios.get(url).then(response => response.data)
		.then((data) => {
		  console.log(data);
		  
			this.setState({
				tours: data.tours
			})
		}).catch(function (error) {
			console.log(error);
		})
	}

	render() {
		
		return (
			<section className="py-6 bg-gray-100">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">Explore the beauty of Kiel </p>
                        <h2 className="mb-5">Our Tours</h2>
                    </div>
                    <div className="row">

                    {
                        this.state.tours &&
                        this.state.tours.map((x) => {

                        const link = '/tour/'+x.id
                        
                        return(
                            <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                                <div className="tour-grid-item">
                                    <Link to={link}>
                                        <div className="image">
                                            <Image src={'/images/tours/'+x.image} alt={x.title} class="img-fluid" />
                                        </div>
                                        <div className="content clearfix">
                                            <h5>{x.title}</h5>
                                            <p>Donec euismod bibendum dapibus. Cras sollicitudin posuere.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            )
                        })
                    }

                    </div>
                </div>
            </section>
		);
	}
}

export default Tours;