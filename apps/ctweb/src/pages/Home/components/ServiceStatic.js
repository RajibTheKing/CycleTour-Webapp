import React from 'react';
import Places from './Places'
import TourMaps from './TourMaps'

class ServiceStatic extends React.Component{

    render(){
        return(
            <div>
               <Places />
               <TourMaps />
            </div>
        )
    }
    
}

export default ServiceStatic