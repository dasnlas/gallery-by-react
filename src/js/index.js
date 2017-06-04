var React = require('react');
var ReactDom = require('react-dom');

import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBodyIndex from './components/bodyindex';
class Index extends React.Component{
	render(){
		return(
			<div>
				<ComponentHeader/>
				<ComponentBodyIndex/>
				<ComponentFooter/>
			</div>
		)
	}
}

ReactDom.render(<Index/>,document.getElementById('app'));