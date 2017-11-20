// WeatherChannel.js
import React, {Component} from 'react';

import CityCondition from './CityCondition';
import Forecaster    from './Forecaster';
// also include another comp for search input and other functions
// import Toolbar       from './Toolbar'; // will define later

// responsible for maintain necessary data (from API response) in the state
// pass them down to child 
export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        // use static data to fill initial state first
        this.state = {
            condition: {
                city:  'Brisbane, Au',
                temp: '12c',
                weather: 'Clear',
                desc: 'XXXXXXXX'
            },
            days:  [
                {weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
                {weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
                {weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
            ]
        }
    }

    render() {
      return (
        <main>
        
          <section id="left">
            <CityCondition/>
          </section>
          <section id="right">
            <Forecaster days={days}/>
          </section>
        </main>
      )
    }
}