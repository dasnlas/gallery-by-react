import React from 'react';
import ReactDom from 'react-dom';
import '../../css/footer.css'
export default class ComponentFooter extends React.Component{
	render(){
		return(
			<footer className='foot'>
				<p>这里是尾部</p>
			</footer>
		)
	}
}