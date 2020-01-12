import React from 'react';
import queryString from 'query-string'
import axios from 'axios';
import freedomKielApi from './../../helpers/freedomKielApi'
import Image from './../../helpers/Image'

class Bikes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bikes: [],
            params: {}
        }
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search)
        
        const url = freedomKielApi.URL + '/bikes/search'
        axios.post(url, params).then(response => response.data)
        .then((data) => {
            this.setState({
                bikes: data.bikes,
                params: params
            })
        }).catch(function (error) {
            console.log(error);
        })

    }

    render(){
        const { params } = this.state
        return(
            <div id="fk-bikes">
                <div className="container-fluid py-5 px-lg-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
                                <div className="col-md-5">
                                    <p className="mb-3 mb-md-0"><strong>{this.state.bikes.length}</strong> results found</p>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group mb-0">
                                        <label className="form-label">Cycle Size</label>
                                        <ul className="list-inline mt-xl-1 mb-0">
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_0" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_0" className="custom-control-label">22"</label>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_1" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_1" className="custom-control-label">26"</label>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_2" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_2" className="custom-control-label">28"</label>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_3" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_3" className="custom-control-label">32"</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="form-group mb-0">
                                        <label className="form-label">Gender Specific</label>
                                        <ul className="list-inline mt-xl-1 mb-0">
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_0" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_0" className="custom-control-label">Kinder</label>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_1" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_1" className="custom-control-label">Man</label>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_2" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_2" className="custom-control-label">Woman</label>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="type_3" name="type[]" className="custom-control-input" />
                                                    <label htmlFor="type_3" className="custom-control-label">Unisex</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                this.state.bikes.map((item,index)=>{
                                    const urlRoute = '/bike/'+item.bike_id+'/?pickup='+ params.pickup + '&dropoff=' + params.dropoff;

                                    let gender = 'For Man'
                                    if(item.sex == 2){
                                        gender = 'For Women'
                                    } else if( item.sex == 3){
                                        gender = 'For Children'
                                    } else if( item.sex == 4) {
                                        gender = 'For All'
                                    }
                                    return(
                                        <div key={index} className="col-sm-6 col-xl-4 mb-5">
                                            <div className="card h-100 border-0 shadow">
                                                <div className="card-img-top overflow-hidden gradient-overlay">
                                                    
                                                    <Image src={'/images/'+item.photos} alt={item.title} class="img-fluid" />
                                                    <a href={urlRoute} className="tile-link"></a>
                                                    <div className="card-img-overlay-bottom z-index-20">
                                                        <div className="media text-white text-sm align-items-center">
                                                            <Image src={item.avatar} alt={item.first_name} class="avatar avatar-border-white mr-2" />
                                                            <div className="media-body">{item.first_name}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-center">
                                                    <div className="w-100">
                                                        <h6 className="card-title">
                                                            <a href={urlRoute} target="_blank" className="text-decoration-none text-dark">{item.title}</a>
                                                        </h6>
                                                        <div className="d-flex card-subtitle mb-3">
                                                            <span className="flex-grow-1 mb-0 text-muted text-sm">
                                                                <ul className="list-inline text-sm mb-4" style={{marginBottom:'0px!important'}}>
                                                                    <li className="list-inline-item mr-3"><i className="fa fa-users mr-1 text-secondary"></i>{gender}</li>
                                                                    <li className="list-inline-item mr-3"><i className="fas fa-ruler-vertical mr-1 text-secondary"></i> {item.size}cm</li>
                                                                    <li className="list-inline-item"><i className="fa fa-bicycle mr-1 text-secondary"></i> {item.bike_type}</li>
                                                                </ul>
                                                            </span>
                                                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                                <i className="fa fa-star text-warning"></i> 5.0
                                                            </p>
                                                        </div>
                                                        <p className="card-text text-muted"><span className="h4 text-primary">€{item.minimum_rent}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bikes