import React, { Component, createRef } from "react";
import L from 'leaflet'
import { Map, TileLayer, withLeaflet, MapControl, Popup, Marker, Polyline, Pane, GeoJSON } from "react-leaflet";
import ctKielApi from '../../helpers/ctKielApi'
import {areaData} from './../../helpers/areaData';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Image from '../../helpers/Image'

class Places extends Component {
  constructor() {
    super();
    this.state = {
      lat: 54.34,
      lng: 10.13,
      zoom: 11,
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

  componentDidMount() {
    
    const url = ctKielApi.URL + '/places'

    axios.get(url).then(response => response.data)
    .then((data) => {
        this.setState({
            places: data.places
        })
    }).catch(function (error) {
        console.log(error);
    })
  }

  onClickMaker(){
    console.log("Here");
  }

  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <div className="clearfix">

        <Map center={position} className="place-maps" zoom={zoom}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />

            <TileLayer
              url="http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />
            {
              this.state.places &&
              this.state.places.map((x,i) => {
                const fontAwesomeIcon = L.divIcon({
                  html: '<i class="fa ' + x.marker + '"></i>',
                  iconSize: [40, 40],
                  className: 'myDivIcon'
                });
                
                return(
                  <Marker
                      position={[x.lat, x.lon]}
                      icon={fontAwesomeIcon}
                      onClick={this.onClickMaker.bind(this)}
                    >
                    <Popup>
                      <p><strong>{x.title}</strong></p>
                      <p>Website: { x.websites }</p>
                      <Link to={'/place/' + x.id} >Details</Link>
                    </Popup>
                  </Marker>
                )
              })
            }
            <GeoJSON data={areaData} />
        </Map>
        <section className="py-6 bg-gray-100 tour-list">
            <div className="container">
                <div className="text-center pb-lg-4">
                    <p className="subtitle text-secondary">Explore the beauty of Kiel </p>
                    <h2 className="mb-5">Popular Places</h2>
                </div>
                <div className="row">
                  {
                    this.state.places &&
                    this.state.places.map((x) => {

                      const link = '/place/'+x.id
                      
                      return(
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                          <div className="place_grid_item">
                              <div className="place_grid_item_post_thumbnail">
                              <Link to={link} title={x.title}>
                                <Image src={'/images/places/'+x.images} alt={x.title} class="place_grid_item_inner_image img-fluid" />
                                 
                              </Link>
                              </div>
                              <div className="place_grid_item_inner_content">
                                  <h5 className="place_grid_item_post_title">{x.title}</h5>
                                  <div className="place_grid_item_post_excerpt">{x.title}</div>
                              </div>
                          </div>
                      </div>
                      )
                    })
                  }
                  </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Places;