import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomeScreen from '../home';
import ContentScreen from '../components';
import GuidesScreen from '../guides';

export default () => (
	<Switch>
		<Route
			exact
			path='/'
			component={(routeProps) => <HomeScreen {...routeProps} />}
		/>
		<Route
			path='/component/:componentKey'
			component={(routeProps) => <ContentScreen {...routeProps} />}
		/>
		<Route
			path='/guides/:guide'
			component={(routeProps) => <GuidesScreen {...routeProps} />}
		/>
	</Switch>
);
