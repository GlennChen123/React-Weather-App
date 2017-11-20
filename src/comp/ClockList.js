// React need to be imported
import React from 'react';

import Clock from './Clock';

const cities = [
	{city:'Brisbane', timeZone:'Australia/Brisbane'},
	{city:'Sydney', timeZone:'Australia/Sydney'},
	{city:'Melbourne', timeZone:'Australia/Melbourne'},
	{city:'Shanghai', timeZone:'Asia/Shanghai'},
	// {city:'New York', timeZone:'America/New_York'}
];

export default function ClockList() {
	// traditional way to create an array of Clock comp
	const clocks = [];
	for (let i=0; i<cities.length; i++) {
		const {city, timeZone} = cities[i];
		clocks.push(<Clock city={city} timeZone={timeZone} />)
	}
	return (
		<ul>
			{/*{clocks}*/}
			{/*{cities.map(item => <Clock city={item.city} timeZone={item.timeZone} />)}*/}
			{cities.map(item => <Clock key={item.city} {...item} />)}
		</ul>
	)
}