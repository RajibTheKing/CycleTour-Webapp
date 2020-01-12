import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom'
import queryString from 'query-string';
import Autocomplete from 'react-google-autocomplete';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Hero extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            address:'',
            lon: '',
            lat: '',
            pickup: '',
            dropoff: '',
            search:false,
            startDate: new Date(),
            endDate: new Date()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleChangeDateTimeStart = this.handleChangeDateTimeStart.bind(this);
        this.handleChangeDateTimeEnd = this.handleChangeDateTimeEnd.bind(this);
        this.pickup = React.createRef();
        this.dropoff = React.createRef();
    }

    handleChange(event){
        const target = event.target
        const value = target.value
        const name = target.name

        if(name == 'pickup'){
            this.setState({
                pickup: value
            })
        } else if (name == 'dropoff') {
            this.setState({
                dropoff: value
            })
        }
    }

    handleSubmit(event){
        event.preventDefault();
        
        this.setState({
            search: true,
            pickup: this.pickup.current.input.value,
            dropoff: this.dropoff.current.input.value
        })
    }

    handleChangeDateTimeStart(dateTime){
        this.setState({
            startDate:dateTime
        })
    }

    handleChangeDateTimeEnd(dateTime){
        this.setState({
            endDate:dateTime
        })
    }

    handleLocationChange(place){
        const lat = place.geometry.location.lat();
        const lon = place.geometry.location.lng();
        
        this.setState({
            lat: lat,
            lon: lon
        })
    }

    render(){
        if(this.state.search){

            return(
                <Redirect
                    to={{
                        pathname: "/bikes",
                        search: queryString.stringify(this.state) 
                    }}
                />
            )
        }
        return(
            <section className="hero-home">
                <div className="swiper-container hero-slider swiper-container-fade swiper-container-horizontal">
                    <div className="swiper-wrapper dark-overlay">
                        <div className="swiper-slide swiper-slide-active bc-image-1"></div>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <div className="container py-6 py-md-7 text-white z-index-20">
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="text-center text-lg-left">
                                <p className="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">Discover Beauty of Kiel</p>
                                <h1 className="display-3 font-weight-bold text-shadow">Feel Freedom of Life</h1>
                            </div>
                            <div className="search-bar mt-5 p-3 p-lg-1 pl-lg-4">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center form-group">
                                            <div className="input-label-absolute input-label-absolute-right w-100">
                                                <label htmlFor="location" className="label-absolute"><i className="fa fa-crosshairs"></i><span className="sr-only">Location</span></label>
                                                <Autocomplete
                                                    className ={'form-control border-0 shadow-0'}
                                                    style={{width: '90%'}}
                                                    onPlaceSelected={this.handleLocationChange}
                                                    types={['address']}
                                                    componentRestrictions={{country: "de"}}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 d-flex align-items-center form-group">
                                            <div className="input-label-absolute input-label-absolute-right w-100">
                                                <label htmlFor="location" className="label-absolute"><i className="fa fa-calendar-alt"></i><span className="sr-only">Pickup</span></label>
                                                <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChangeDateTimeStart}
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={15}
                                                    dateFormat="yyyy-MM-dd HH:mm"
                                                    timeCaption="time"
                                                    withPortal
                                                    name="pickup"
                                                    minDate={new Date()}
                                                    className="form-control border-0 shadow-0 date-control"
                                                    ref={this.pickup}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 d-flex align-items-center form-group">
                                            <div className="input-label-absolute input-label-absolute-right w-100">
                                                <label htmlFor="location" className="label-absolute"><i className="fa fa-calendar-alt"></i><span className="sr-only">Dropoff</span></label>
                                                <DatePicker
                                                    selected={this.state.endDate}
                                                    onChange={this.handleChangeDateTimeEnd}
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={15}
                                                    dateFormat="yyyy-MM-dd HH:mm"
                                                    timeCaption="time"
                                                    withPortal
                                                    minDate={new Date()}
                                                    name="dropoff"
                                                    className="form-control border-0 shadow-0 date-control"
                                                    showLeadingZeros="true"
                                                    ref={this.dropoff}
                                                />
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <button type="submit" className="btn btn-primary btn-block rounded-xl h-100">Search </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default Hero