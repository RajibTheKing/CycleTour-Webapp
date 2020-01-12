import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


import './css/tether.min.css'
import './css/bootstrap.min.css'
import './css/bootstrap-select.min.css'
import './css/winter-flat.css'
import './css/custom.css'
import './css/custom_template_style.css'
import './css/palette.css'

import App from './App';
import fkReducer from './reducers/index'

const store = createStore(fkReducer)


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
