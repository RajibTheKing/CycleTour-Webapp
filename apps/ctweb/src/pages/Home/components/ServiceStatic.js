import React from 'react';
import PopularPlaces from './PopularPlaces'
import PopularTours from './PopularTours'

class ServiceStatic extends React.Component{

    render(){
        return(
            <div>
                <PopularTours />
                <PopularPlaces />
            </div>
        )
    }
    
}

export default ServiceStatic