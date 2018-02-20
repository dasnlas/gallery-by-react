var React = require('react');
var ReactDom = require('react-dom');
import '../css/common.css'
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBodyIndex from './components/body/bodyindex';
class Index extends React.Component{
	render(){
		return(
			<div className="content">
				<ComponentHeader/>
				<ComponentBodyIndex/>
				<ComponentFooter/>
			</div>
		)
	}
}
ReactDom.render(<Index/>,document.getElementById('app'));