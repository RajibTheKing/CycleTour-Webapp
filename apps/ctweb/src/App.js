import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Home from './pages/Home/index'
import TourMap from './pages/TourMap/index'
import Tours from './pages/Tours/index'
import Places from './pages/Places/index'
import PlaceMap from './pages/PlaceMap/index'



function App() {
	return (
		<div className="App">
			
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/tours" component={Tours} />
				<Route path="/tour/:id" component={TourMap} />
				<Route path="/kiel" component={Places} />
				<Route path="/place/:id" component={PlaceMap} />
				<Footer/>
			</BrowserRouter>
			
		</div>
	);
}

export default App;
