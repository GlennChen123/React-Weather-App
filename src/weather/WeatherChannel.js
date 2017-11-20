import React, {Component} from 'react';

import CityCondition   from './CityCondition';
import Forecaster   from './Forecaster';
import Toolbar      from './Toolbar';


export default class WeatherChannel extends Component {
	constructor(props) {
		super(props);
			this.state = {
			// some dummy data for initial state
			condition: {
				city:  '--',
				// temp:'--',
				tempC: '--',
				tempF:'--',
				weather: '--'
			},
			days: [],
			// isC: true,
			unit: "C",
			num: 10
		}
	}

	onConditionLoad(data) {
		
			const condition = {
				city: data.display_location.full,
				weather: data.weather,
				// temp:`${data.temp_c}c`,
				tempC: data.temp_c,
				tempF: data.temp_f
			}
			
	console.log(condition);
	this.setState({condition});		
	}
	

	onForecastLoad(data) {
	
			const days = data.map(d => ({
				weekday: d.date.weekday,
				high: d.high, 
				low: d.low,   //celsius
				icon: d.icon_url,
				avghumidity: d.avehumidity
				})
			);
			console.log(days);
			this.setState({days})
		
	}

	// handleClick() {
			
	// 	this.setState(
	// 		prevState => ({isC: !prevState.isC}),
	// 	);
	//   }

	tempUnitChange(data){
		const unit = data;
		console.log(unit);
		this.setState({unit})

	}

	forecastChange(flag){
		if(flag)
		{
			const num = 5;
			this.setState({num})
		}else{
			const num = 10;
			this.setState({num})
		}
	}

	render() {
		
		//const title = this.state.isC ? <p>now it's true</p> : <p>now it's false</p>
		return (
			<main>
				<Toolbar
					// Pass callback fn as props to child
					// when data is ready, child will invoke it and state will be updated
					onConditionLoad={data => this.onConditionLoad(data)}
					onForecastLoad={data => this.onForecastLoad(data)}
					tempUnitChange={data=>this.tempUnitChange(data)}
					forecastChange={data=>this.forecastChange(data)}
				/>

				{/* <button onClick={()=>{this.handleClick()}}>
        			{this.state.isC ? 'C' : 'F'}
     			</button>
				 {title} */}

				<section id="left">
					<CityCondition {...this.state.condition} unit={this.state.unit}/>
				</section>
				<section id="right">
					<Forecaster days={this.state.days} unit={this.state.unit} num={this.state.num}/>
				</section>
			</main>
		)
	}
}
