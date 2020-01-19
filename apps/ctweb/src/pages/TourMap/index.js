import React, { Component, createRef } from "react";
import L from 'leaflet'
import { Map, TileLayer, withLeaflet, MapControl, Popup, Marker, Polyline, Pane, GeoJSON } from "react-leaflet";
import ctKielApi from './../../helpers/ctKielApi'
import axios from 'axios'
import Image from './../../helpers/Image'
import Routing from "./components/Routing";
import {areaData} from './../../helpers/areaData';
import CTMakers from './../../helpers/CTMakers'

class TourMap extends Component {
  constructor(props) {
    super();
    this.state = {
      lat: 54.32313137415068,
      lng: 10.139522552490234,
      zoom: 12,
      isMapInit: false,
      markers: []
    };
    
  }

  componentDidMount() {

    const { id } = this.props.match.params
    
		const url = ctKielApi.URL + '/tours/map/'+id
		axios.get(url).then(response => response.data)

		var makerLatLng = []
		var placeIds = []

		.then((data) => {			
			const markerData = data.spots.map(x => { 
				makerLatLng.push({lat : x.lat, lng : x.lon})
				placeIds.push(x.id)
			})

			const placesData = data.places.fiter(x =>{
				return placeIds.includes(x)
			})

			this.setState({
				markers: makerLatLng,
				tour: data.tour,
				places: placesData
			})
		}).catch(function (error) {
			console.log(error);
		})
	}

  // $FlowFixMe: ref
  refmarker = createRef()

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });

    console.log(map);
    
  };

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker1: marker.leafletElement.getLatLng(),
      })
    }
  }


  render() {
    const { lat, lng, zoom, tour } = this.state;
    const position = [lat, lng];
    console.log("Inside Render", this.state.markers);
    
    return (
      <div className="clearfix">
        <Map center={position} zoom={zoom} ref={this.saveMap} scrollWheelZoom={true}>
    
			<TileLayer
				url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
			/>
			<TileLayer
				url="http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
			/>
			{
				this.state.isMapInit && this.state.markers.length > 0?
					<Routing map={this.map} markers={this.state.markers}/>
				:''
			}

			<CTMakers places={this.state.places} target={true} />
			<GeoJSON data={areaData} />
		</Map>
		<section className="py-6 bg-gray-100">
			<div className="container">
				<div className="text-center pb-lg-4">
					<p className="subtitle text-secondary">Explore the beauty of Kiel </p>
					{
						tour &&
						<h2 className="mb-5">{tour.title}</h2>
					}
				</div>
				{
				tour &&
				<div className="row justify-content-md-center">
					<div className="col-lg-6">
						<div className="place-information">
							<div className="place-info-text" dangerouslySetInnerHTML={{__html: tour.description}} />
							<ul>
								<li>Start Point: {tour.start_point}</li>
								<li>Start Point: {tour.end_point}</li>
								<li>Tour Duration: {tour.duration}</li>
								<li>Highlights : {tour.major_spots}</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4">
						<Image src={'/images/tours/'+tour.image} alt={tour.title} class="img-fluid" />
					</div>
				</div>
				}
			</div>
		</section>
      </div>
      
    );
  }
}

export default TourMap;