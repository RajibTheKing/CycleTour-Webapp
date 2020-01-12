import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero'
import ServiceStatic from './components/ServiceStatic';

class Home extends React.Component{

    render(){
        return(
            <div id="fk-home">
                <Hero />
                <ServiceStatic />
            </div>
        )
    }
}

export default Home