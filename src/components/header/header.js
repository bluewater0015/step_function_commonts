//header.js
import React,{ Component } from 'react';
import "./header.css";
export default class Header extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="header">
				<div className="header_left center">
					<img src="/src/assets/images/back.png" />
					<span className="center">返回</span>
				</div>
				<div className="header_right center">
					登陆页面
				</div>
			</div>
		)
	}
}