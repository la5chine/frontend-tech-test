/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import MainPage from '../components/MainPage';

function App() {
  return (
	<>
		<Router>
			<MainPage/>
			<Switch>
				<Route
					exact
					path="/"
				>
					<section className="lumx-spacing-padding-horizontal-huge" />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
