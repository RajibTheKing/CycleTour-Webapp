import React from 'react';
import queryString from 'query-string'
import axios from 'axios';
import freedomKielApi from './../../helpers/freedomKielApi'
import Image from './../../helpers/Image'
import BikeAvailable from './Components/BikeAvailable'

class BikeSingle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bike: {},
            params: {}
        }
    }

    componentDidMount() {

        const {location, match} = this.props
        const params            = queryString.parse(location.search)
        const url               = freedomKielApi.URL + '/bikes/' + match.params.id;
        
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({
                bike: data.bike,
                params: params
            })
        }).catch(function (error) {
            console.log(error);
        })

    }

    render(){
        const { params, bike } = this.state
        const {location, match} = this.props
        const urlParams = queryString.parse(location.search)
        
        let gender = 'For Man'
        if(bike.sex == 2){
            gender = 'For Women'
        } else if( bike.sex == 3){
            gender = 'For Children'
        } else if( bike.sex == 4) {
            gender = 'For All'
        }
        return(
            <div id="fk-bike">
                <section className="position-relative py-6" style={{minHeight: '400px'}}>
                    <Image
                        src={freedomKielApi.siteUrl+'/images/'+bike.photos}
                        alt={bike.title}
                        class="bg-image"
                    />
                </section>
                <div className="container py-5">
		            <div className="row">
			            <div className="col-lg-8">
                            <div className="text-block">
                                <p className="text-primary"><i className="fa-map-marker-alt fa mr-1"></i> {bike.address}, {bike.zip} {bike.city}</p>
                                <h1>{bike.title}</h1>
                                    <ul className="list-inline text-sm mb-4">
                                        <li className="list-inline-item mr-3"><i className="fas fa-ruler-vertical text-secondary"></i>  {bike.size}cm</li>
                                        <li className="list-inline-item mr-3"><i className="far fa-user text-secondary"></i> {gender}</li>
                                        <li className="list-inline-item mr-3"><i className="fa fa-bicycle text-secondary"></i> {bike.bike_type}</li>
                                        <li className="list-inline-item mr-3"><i className="fa fa-star mr-1 text-secondary"></i> 5.0</li>
                                    </ul>
                                    <div dangerouslySetInnerHTML={{__html: bike.description}} />
                            </div>
                            <div className="text-block">
                                <h4 className="mb-0">Tools with cycle</h4>
                                <p className="subtitle text-sm text-primary mb-4">You will get below tools for free</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item mb-2"><span className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Lock</span></li>
                                    <li className="list-inline-item mb-2"><span className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Helmet</span></li>
                                    <li className="list-inline-item mb-2"><span className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Lights</span></li>
                                    <li className="list-inline-item mb-2"><span className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Reflectors</span></li>
                                    <li className="list-inline-item mb-2"><span className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Bell</span></li>
                                </ul>
                            </div>

                            <div className="text-block">
                                <div className="media">
                                    <Image src={bike.avatar} alt="" class="avatar avatar-lg mr-4" />
                                    <div className="media-body">
                                        <p> <span className="text-muted text-uppercase text-sm">Hosted by </span><br /><strong>{bike.first_name} {bike.last_name}</strong></p>
                                        <p className="text-muted text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BikeAvailable
                            bike={this.state.bike}
                            id={match.params.id}
                            pickup = {urlParams.pickup}
                            dropoff = {urlParams.dropoff}
                        />
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default BikeSingle