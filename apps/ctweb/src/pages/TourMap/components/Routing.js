import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper"
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {


  componentWillReceiveProps(newProps){
    console.log("inside componentWillRecieveProps ", newProps);
    console.log(this);
    this.setState({
      marker1: newProps.marker1,
    })
    console.log("Checking current state", this.state);
    
    this.createLeafletElement();
    this.forceUpdate();
  }

  createLeafletElement() {
    
    const { map } = this.props;

    let wapointList = [L.latLng( 54.364258145372155, 10.115532875061035), L.latLng( 54.338740125896415, 10.12313961982727)];

    if(this.state){
        wapointList.push(L.latLng(this.state.marker1.lat, this.state.marker1.lng))
    }
  
    let leafletElement = new L.Routing.Control({
			waypoints: wapointList,
			router: new L.Routing.GraphHopper( '42ba18ee-a255-4fc3-b945-2cec9410907f' , {
				urlParameters: {
				vehicle: 'bike'
				}
      }),
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false
    }).addTo(map.leafletElement);

    new L.Routing.Control({
			waypoints: [
			L.latLng( 54.322818512961135, 10.143492221832275),
			L.latLng( 54.338740125896415, 10.12313961982727)
			],
			
			router: new L.Routing.GraphHopper( '42ba18ee-a255-4fc3-b945-2cec9410907f' , {
				urlParameters: {
				vehicle: 'foot'
				}
      }),
      lineOptions: {
        styles: [
          {
            color: "red",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false
    }).addTo(map.leafletElement);

    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
