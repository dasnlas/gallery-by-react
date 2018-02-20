import React from 'react';
import { Timeline, Icon } from 'antd';
export default class ComponentBodyIndex extends React.Component{
	render(){
		return(
			<div>
				<Timeline>
    				<Timeline.Item>Create a services site 2018-02-01</Timeline.Item>
    				<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2017-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2016-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2014-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2013-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2012-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2011-09-01</Timeline.Item>
    				<Timeline.Item>Network problems being solved 2010-09-01</Timeline.Item>
    				<Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2010-09-01</Timeline.Item>
  				</Timeline>
			</div>
		)
	}
}