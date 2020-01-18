import React from 'react';
import {Link} from 'react-router-dom'
import Image from '../../../helpers/Image'
import ctKielApi from '../../../helpers/ctKielApi'
import axios from 'axios'


class PopularPlaces extends React.Component{
    constructor() {
        super();
        this.state = {
            places:[]
        };
    }

    componentDidMount() {
    
        const url = ctKielApi.URL + '/places/popular'
        axios.get(url).then(response => response.data)
        .then((data) => {
            console.log(data.places);
            this.setState({
                places: data.places
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    render(){
        const {places} = this.state

        return(
            <section className="py-6 bg-gray-100 place-list">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">Explore the beauty of Kiel </p>
                        <h2 className="mb-5">Popular Places</h2>
                    </div>
                    <div className="row">
                        {
                            places.map((place, index) =>{
                                const link = '/place/'+place.id

                                return(
                                    <div key={index} className="col-lg-4 mb-3 mb-lg-0 text-center">
                                        <div className="place_grid_item">
                                            <div className="place_grid_item_post_thumbnail">
                                                <Link to={link} title={place.title}>
                                                    <Image src={'/images/places/'+place.images} alt={place.title} class="place_grid_item_inner_image img-fluid" />
                                                </Link>
                                            </div>
                                            <div className="place_grid_item_inner_content">
                                                <h5 className="place_grid_item_post_title">{place.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <Link to="/kiel" className="btn btn-primary btn-block btn-place">View All Places</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PopularPlaces