import React, { Component } from "react";
import L from 'leaflet'
import { Map, TileLayer, withLeaflet, MapControl, Popup, Marker } from "react-leaflet";

import Routing from "./components/Routing";
import areaData from './components/areaData'

class TourMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 54.32313137415068,
      lng: 10.139522552490234,
      zoom: 13,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <Map center={position} zoom={zoom} ref={this.saveMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.isMapInit && <Routing map={this.map} />}
        <Marker position={[54.322818512961135, 10.143492221832275]}>
          <Popup> Kiel Maritime Museum </Popup>
        </Marker>

        <Marker position={[54.338740125896415, 10.12313961982727]}>
          <Popup> Kiel University </Popup>
        </Marker>

      </Map>
    );
  }
}

export default TourMap;