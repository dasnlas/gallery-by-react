import React from 'react';
import ReactDom from 'react-dom';
import '../../css/header.css'
export default class ComponentHeader extends React.Component{
	render(){
		return(
			<header className="head">
				<p>这里是头部</p>
			</header>
		)
	}
}