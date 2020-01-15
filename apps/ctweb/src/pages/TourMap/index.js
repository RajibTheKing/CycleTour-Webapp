import React, { Component, createRef } from "react";
import L from 'leaflet'
import { Map, TileLayer, withLeaflet, MapControl, Popup, Marker, Polyline, Pane, GeoJSON } from "react-leaflet";

import Routing from "./components/Routing";
import {areaData} from './components/areaData';

class TourMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 54.32313137415068,
      lng: 10.139522552490234,
      zoom: 12,
      isMapInit: false,
      markers: [
        {
          lat: 54.322818512961135,
          lng: 10.143492221832275,
        },
      
        {
          lat: 54.338740125896415,
          lng: 10.12313961982727,
        },

        {
          lat: 54.364258145372155,
          lng: 10.115532875061035,
        },
      ]
    };
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
    //this.forceUpdate();

  }


  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];
    console.log("Inside Render", this.state.marker1);
    //<Marker draggable position={this.state.marker1} ref={this.refmarker} onDragend={this.updatePosition}></Marker>
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
          {this.state.isMapInit && <Routing map={this.map} 
                                            markers={this.state.markers}/>}

          <GeoJSON data={areaData} />
      </Map>
    );
  }
}

export default TourMap;