// App.js
import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/weather.css';

import Header  from './weather/Header';
//import Toolbar from './weather/Toolbar';
import WeatherChannel from './weather/WeatherChannel';
import Footer  from './weather/Footer.js';

// import Clock from './comp/Clock.js';


class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <WeatherChannel />
        <Footer />
        
      </div>
    );
  }
}

export default App;