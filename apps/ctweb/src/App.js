import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Home from './pages/Home/index'
import Help from './pages/Help/index'
import Bikes from './pages/Bikes/index'
import BikeSingle from './pages/BikeSingle/index';
import Profile from './pages/Users/Components/Profile'
import Login from './pages/Users/Components/Login'
import Register from './pages/Users/Components/Register'



function App() {
	return (
		<div className="App">
			
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/bikes" component={Bikes} />
				<Route path="/Help" component={Help} />
				<Route path="/bike/:id" component={BikeSingle} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
				
				<Footer/>
			</BrowserRouter>
			
		</div>
	);
}

export default App;
