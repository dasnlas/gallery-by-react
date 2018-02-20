import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';

import ComponentList from './components/body/list'
import ComponentBodyIndex from './components/body/bodyindex'
import {Route,Router,hashHistory} from 'react-router';
export default class Root extends React.Component{
	render(){
		return(
			<Router history={hashHistory}>
				<Route component={Index} path='/'>
					＜IndexRedirect to="/list" />
					<Route component={ComponentList} path='list'></Route>
					<Route component={ComponentBodyIndex} path='ComponentBodyIndex'></Route>
				</Route>
			</Router>
		)
	}
}
ReactDOM.render(<Root/>,document.getElementById('app'));