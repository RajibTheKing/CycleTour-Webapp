import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper"
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {


  componentWillReceiveProps(newProps){
    console.log("inside componentWillRecieveProps ", newProps);
  }

  updateLeafletElement(){
    console.log("TheKing--> updateLeafletElement ", this.props);
    console.log("TheKing--> updateLeafletElement ", this);
  }

  createLeafletElement() {
    
    const {map, marker1, marker2, marker3} = this.props;
    console.log("TheKing--> createLeafLetElement", marker1);

    let wapointList = [];
    wapointList.push(L.latLng(marker1.lat, marker1.lng));
    wapointList.push(L.latLng(marker2.lat, marker2.lng));
    wapointList.push(L.latLng(marker3.lat, marker3.lng));
    
  
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
      addWaypoints: true,
      draggableWaypoints: true,
      fitSelectedRoutes: false,
      showAlternatives: false,
    }).addTo(map.leafletElement);

    

    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
