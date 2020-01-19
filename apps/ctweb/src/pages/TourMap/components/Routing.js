import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper"
import { withLeaflet } from "react-leaflet";
import "./MovingMarker"


class Routing extends MapLayer {


  componentWillReceiveProps(newProps){
    console.log("inside componentWillRecieveProps ", newProps);
  }

  updateLeafletElement(){
    console.log("TheKing--> updateLeafletElement ", this.props);
    console.log("TheKing--> updateLeafletElement ", this);
  }

  createLeafletElement() {
    
    const {map, markers} = this.props;
    console.log("TheKing--> createLeafLetElement", markers);

    let wapointList = [];
    markers.map(x => wapointList.push(L.latLng(x.lat, x.lng)));
    
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
            color: "red",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      addWaypoints: true,
      draggableWaypoints: true,
      fitSelectedRoutes: false,
      showAlternatives: false,
      routeWhileDragging: true,
      snakingSpeed: 200,
      animate:true,
    }).addTo(map.leafletElement);

    leafletElement.on('routesfound', function (e) {
      let distance = e.routes[0].summary.totalDistance;
      console.log('routing distance: ' + distance);
      console.log('look inside: ', e.routes);

      var cusTomIcon = L.icon({
        iconUrl: '/images/bikeIconMarker.png',
        iconSize: [40, 40],
      });

      



      var myMovingMarker = L.Marker.movingMarker([wapointList[0],wapointList[0]],[1], {icon: cusTomIcon});
      e.routes[0].coordinates.map(x =>{ myMovingMarker.addLatLng(x, [20]); });
      myMovingMarker.addTo(map.leafletElement);

      
      
      //var myMovingMarker2 = L.Marker.movingMarker([wapointList[1],wapointList[2]],[20000]).addTo(map.leafletElement);

      myMovingMarker.start();
      
    });

    console.log("look at leaflet", leafletElement);
    console.log("TheKing--> Done");


    //var route = L.layerGroup([
    //  L.marker(wapointList[0]),
    //  L.polyline([wapointList[0], wapointList[3]]),
    //  L.marker(wapointList[3])
    //], { snakingPause: 200 });
    //console.log(route);
    //route.addTo(map.leafletElement).snakeIn();

    


    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
