import React from 'react';
import '../App.css';
import logo from '../res/LogoBlue.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

	const logoStyle = {
		width: "8vw",
		height: "7vw"
	}


	return (
		<div>
			<nav >
				<div className="row navbar mx-2 justify-content-start" >
					
					<Link to="/" style={{ textDecoration: 'none' }}>
						<div className="row px-3 mx-3">
						<img src={logo} style={logoStyle} />
							<p className="logoText">VirtuBook</p>
							</div>
					</Link>
					<div className="row mx-3">
						<Link to="/about" style={{textDecoration: "none"}}>
					<p className="navtext">About</p>
						</Link>
					</div>
					<div className="row mx-3" >
						<Link to="/solutions" style={{ textDecoration: "none" }}>
							<p className="navtext">Solutions</p>
						</Link>
					</div>
					<div className="row mx-3" >
						<Link to="/demos" style={{ textDecoration: "none" }}>
							<p className="navtext">Demos</p>
						</Link>
					</div>
					
			

			
			</div>
			</nav>
		</div>
		
			
		);
}