import React from 'react';
import axios from 'axios';
import freedomKielApi from './../../../helpers/freedomKielApi'
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";


class BikeAvailable extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bike: this.props.bike,
            id: this.props.id,
            pickup: this.props.pickup,
            dropoff: this.props.dropoff,
            isAvailable: 2,
            rent: 0,
            order: 0,
            order_detail: '',
            startDate: new Date(this.props.pickup),
            endDate: new Date(this.props.dropoff),
            isLoggedin: localStorage["userAuth"] && JSON.parse(localStorage["userAuth"]).auth_token
                        ? 1: 3
        }

        this.onHandleSumbit             = this.onHandleSumbit.bind(this);
        this.checkAvialabilityOfCycle   = this.checkAvialabilityOfCycle.bind(this);
        this.onChangeRentandTime        = this.onChangeRentandTime.bind(this);
        this.handleChangeDateTimeStart  = this.handleChangeDateTimeStart.bind(this);
        this.handleChangeDateTimeEnd    = this.handleChangeDateTimeEnd.bind(this);
        this.pickup = React.createRef();
        this.dropoff = React.createRef();
    }

    componentDidMount() {

        const {pickup, dropoff, id} = this.state
        
        const params = {
            pickup: pickup,
            dropoff: dropoff,
            bike_id: id
        }
        this.checkAvialabilityOfCycle(params)
    }

    checkAvialabilityOfCycle(params){
        
        const url = freedomKielApi.URL + '/bikes/availability';
        
        axios({
            method: 'post',
            url: url,
            data: params
        })
        .then(response => response.data)
        .then((data) => {
            
            this.setState({
                isAvailable: data.isAvailable,
                pickup: params.pickup,
                dropoff: params.dropoff,
                rent: data.rent,
                order: 0
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    onHandleSumbit(event){
        event.preventDefault();

        let userAuth = localStorage["userAuth"]?JSON.parse(localStorage["userAuth"]):''

        if(!userAuth){
            this.setState({
                isLoggedin: 2
            })
        } else {
            const {id, pickup, dropoff, rent} = this.state;

            const params ={
                user_id: userAuth.id,
                auth_token: userAuth.auth_token,
                bike_id: id,
                pickup_time: pickup,
                dropoff_time: dropoff,
                rent_total: rent,
                payment_methods: 'none'
            }

            const url = freedomKielApi.URL + '/orders/create';
            
            axios({
                method: 'post',
                url: url,
                data: params
            })
            .then(response => response.data)
            .then((data) => {
                if(data.order == -1){
                    this.setState({
                        order: data.order
                    })
                } else if(data.order == 9){
                    this.setState({
                        isLoggedin: 2
                    })
                }else {
                    this.setState({
                        order: data.order,
                        order_detail: data.details
                    })
                }
            
            }).catch(function (error) {
                console.log(error);
            })

        }
    }

    onChangeRentandTime(params){

        const {pickup, dropoff, id} = this.state

        let paramsState = {
            pickup: pickup,
            dropoff: dropoff,
            bike_id: id
        }
        Object.assign(paramsState,params)

        this.checkAvialabilityOfCycle(paramsState);
    }

    handleChangeDateTimeStart(dateTime){
        this.setState({
            startDate:dateTime
        })

        var params = {
            pickup: this.pickup.current.input.value
        }

        this.onChangeRentandTime(params)
    }

    handleChangeDateTimeEnd(dateTime){
        this.setState({
            endDate:dateTime
        })

        var params = {
            dropoff: this.dropoff.current.input.value
        }

        this.onChangeRentandTime(params)
    }

    render(){
            const { pickup, dropoff, rent, isAvailable, order} = this.state;

            let submitButton;

            if(isAvailable === 2){
                submitButton = '<button type="submit" class="btn btn-warning btn-block">checking availability</button>';
            } else if(isAvailable === 1) {
                submitButton = '<button type="submit" class="btn btn-primary btn-block">Book Cycle Now</button>';
            } else if(isAvailable === 0){
                submitButton = '<p class="text-sm text-center text-secondary">Cycle is not avilable for this date or time. You can choose another date or time</p>'
            }

            let orderHtml = '';

            if(order == 1){
                orderHtml = '<p class="text-sm text-center text-secondary">The booking order is successful</p>';
            } else if(order == -1){
                orderHtml = '<p class="text-sm text-center text-secondary">The booking order is failed. Please try again later.</p>';
            }
            
        return(
            <div className="col-lg-4">
                <div style={{top: '100px'}} className="p-4 shadow ml-lg-4 rounded sticky-top">
                    {
                        rent?
                        <p className="text-muted"><span className="text-primary h2">€{rent}</span> Total Price</p>
                        :
                        <p className="text-muted"><span className="text-primary h2">Price Calculating</span></p>
                    }
                    <hr className="my-4" />
                    <form id="booking-form" onSubmit={this.onHandleSumbit} autoComplete="off" className="form">
                        <div className="form-group">
                            <label htmlFor="pickup" className="form-label">Pickup date - time</label>
                            <div className="datepicker-container datepicker-container-right">
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
                                    className="form-control"
                                    ref={this.pickup}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dropoff" className="form-label">Dropoff date - time</label>
                            <div className="datepicker-container datepicker-container-right">
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
                                    className="form-control"
                                    showLeadingZeros="true"
                                    ref={this.dropoff}
                                />
                            </div>
                        </div>
                        <div className="form-group" dangerouslySetInnerHTML={{__html: submitButton}} />
                    </form>
                    {
                        order?
                        <div className="form-group" dangerouslySetInnerHTML={{__html: orderHtml}} />
                        :''
                    }
                    {
                        this.state.isLoggedin === 2?
                        <p className="text-center text-secondary"><small>Please <Link to="/login">login</Link> to complete your order.</small></p>
                        :''
                    }
                    <p className="text-muted text-sm text-center">Availability is not guaranteed if you arrive at the office without an online booking.</p>
                </div>
            </div>
        )
    }
}

export default BikeAvailable