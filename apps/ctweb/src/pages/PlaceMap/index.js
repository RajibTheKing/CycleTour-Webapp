import React, { Component, createRef } from "react";
import L from 'leaflet'
import { Map, TileLayer, withLeaflet, MapControl, Popup, Marker, Polyline, Pane, GeoJSON } from "react-leaflet";
import ctKielApi from './../../helpers/ctKielApi'
import Routing from "./components/Routing";
import {areaData} from './components/areaData';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Image from './../../helpers/Image'

class PlaceMap extends Component {
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

  componentDidMount() {
    
    const url = ctKielApi.URL + '/places'
    axios.get(url).then(response => response.data)
    .then((data) => {
      console.log(data);
      
        this.setState({
            places: data.places
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

    return (
      <div className="clearfix">
        <Map center={position} zoom={zoom} ref={this.saveMap}>
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
              this.state.places.map((x) => {
                console.log(x.lat);
              const fontAwesomeIcon = L.divIcon({
                html: '<i class="fa ' + x.marker + '"></i>',
                iconSize: [40, 40],
                className: 'myDivIcon'
              });
                
                return(
                  <Marker
                      position={[x.lat, x.lon]}
                      icon={fontAwesomeIcon}
                    >
                    <Popup>{x.title}</Popup>
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

                      const link = '/places/'+x.id
                      
                      return(
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                          <div className="tour_grid_item">
                              <div className="tour_grid_item_post_thumbnail">
                              <Link to={link} title={x.title}>
                                <Image src={'/images/places/'+x.images} alt={x.title} class="tour_grid_item_inner_image img-fluid" />
                                 
                              </Link>
                              </div>
                              <div className="tour_grid_item_inner_content">
                                  <h5 className="tour_grid_item_post_title">{x.title}</h5>
                                  <div className="tour_grid_item_post_excerpt">{x.title}</div>
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

export default PlaceMap;