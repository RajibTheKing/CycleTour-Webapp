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
                                <p className="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">Discover Amazing Place</p>
                                <h1 className="display-3 font-weight-bold text-shadow">Enjoy bike tour in Kiel</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default Hero