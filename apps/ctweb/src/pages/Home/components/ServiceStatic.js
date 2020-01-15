import React from 'react';
import Places from './Places'
import TourMaps from './TourMaps'

class ServiceStatic extends React.Component{

    render(){
        return(
            <div>
                <TourMaps />
                <Places />
            </div>
        )
    }
    
}

export default ServiceStatic