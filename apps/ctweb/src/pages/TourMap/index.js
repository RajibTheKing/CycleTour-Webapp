import React, { Component, createRef } from "react";
import L from 'leaflet'
import { Map, TileLayer, withLeaflet, MapControl, Popup, Marker, Polyline, Pane, GeoJSON } from "react-leaflet";
import ctKielApi from './../../helpers/ctKielApi'
import axios from 'axios'

import Routing from "./components/Routing";
import {areaData} from './components/areaData';

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
		.then((data) => {
		  const markerData = data.spots.map(x => { return {lat : x.lat, lng : x.lon}})
		  
			this.setState({
				markers: markerData
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
      console.log(this.state.marker1)
    }
  }


  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];
    console.log("Inside Render", this.state.markers);
    
    return (
      <Map center={position} zoom={zoom} ref={this.saveMap}>
        
          
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />

          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {this.state.isMapInit && this.state.markers.length > 0?
            <Routing map={this.map} markers={this.state.markers}/>
            :''
          }

          <GeoJSON data={areaData} />
      </Map>
    );
  }
}

export default TourMap;