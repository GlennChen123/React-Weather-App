import React from 'react';

export default function CityCondition(props) {
	const {city, weather, tempC, tempF} = props;
	if (props.unit === "C"){
		return (
		<div>
			<div id="location">{city}</div>
			<div id="weather">{weather}</div>
			<div id="temperature">{tempC}</div>
		</div>
		)
	}
	else{
		return (
			<div>
				<div id="location">{city}</div>
				<div id="weather">{weather}</div>
				<div id="temperature">{tempF}</div>
			</div>
			)
		}
	
	
}
