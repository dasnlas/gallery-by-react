import React from 'react';
import ReactDOM from 'react-dom';
import '../css/common.css';
import Root from './root'
import {Link} from 'react-router'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
export default class Index extends React.Component{
	render(){
		return (
	      	<Layout>
		        <Sider trigger={null} collapsible>
		          <div className="logo" />
		          	<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			            <Menu.Item key="1">
			            	<Link className='fcolor' to="/">
			              		<Icon type="user"/>
			              		<span>home</span>
			              	</Link>
			            </Menu.Item>
			            <Menu.Item key="2">
			            	<Link className='fcolor' to="/list">
				              <Icon type="video-camera"/>
				              <span>list</span>
			              	</Link>
			            </Menu.Item>
			            <Menu.Item key="3">
			            	<Link className='fcolor' to="/ComponentBodyIndex">
			              		<Icon type="upload"/>
			              		<span>upload</span>
			              	</Link>
			            </Menu.Item>
			            <Menu.Item key="4">
			              <Icon type="bar-chart"/>
			              <span>echarts</span>
			            </Menu.Item>
			            <Menu.Item key="5">
			              <Icon type="credit-card"/>
			              <span>edit</span>
			            </Menu.Item>
			            <Menu.Item key="6">
			              <Icon type="line-chart"/>
			              <span>line-chart</span>
			            </Menu.Item>
			            <Menu.Item key="7">
			              <Icon type="setting"/>
			              <span>setting</span>
			            </Menu.Item>
		          	</Menu>
		        </Sider>
	        	<Layout>
		          	<Header style={{ background: '#fff', padding: 0 }} className='headers'>
		          		<span></span>
		          		<div style={{ marginRight: '1rem'}}>
			              	<span style={{ marginRight: '1rem'}}>用户名：admin</span>
		          			<Icon type="logout"/>
		          		</div>
		          	</Header>
		          	<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: '100%' }}>
		            	{this.props.children}
		          	</Content>
	        	</Layout>
	      	</Layout>
    	);
	}
}
