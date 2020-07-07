import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Demo from '../components/Demo';
import Demos from '../res/Demos.json';

import Atom from '../res/Atom.png';
import PendulumBase from '../res/PendulumStand.png';
import PendulumBall from '../res/PendulumBall.png';


import { Dropdown } from 'react-bootstrap';

import SettingsIcon from '@material-ui/icons/Settings';

const darkBlue = "#05386B";
const offWhite = "#EDF5E1";
const turquoise = "#379683";

export default function Solutions() {
	const [pane1, setPane1] = useState(false);
	const [pane2, setPane2] = useState(false);
	const [pane3, setPane3] = useState(false);

	const [demoOpen, setDemoOpen] = useState(false);
	const [demo, setDemo] = useState("null");


	const style = {
		header: {
			line1: {
				//border: '2px solid black',
				padding: "0 15% 0 15%",
				textAlign: 'center',
				marginTop: '20vh',
				fontSize: '10vmin'
			},
			line2: {
				//border: '2px solid black',
				padding: "0 15% 0 15%",
				textAlign: 'center',
				fontSize: '10vw'
			}
		},

		border: {

			position: "absolute",
			pointerEvents: "none",
			width: "75vw",
			height: "45vw",
			zIndex: "4",
			backgroundColor: "none",
			border: "5px solid black",
			borderRadius: "2vmin"
		},

		container: {
			height: "45vw",
			marginTop: "15vh",
			padding: "0 10vw 0 10vw",
			zIndex: "1",
			animationDelay: "1s",
		},
		leftPane: {
			height: "100%",
			width: "25vw",
			backgroundColor: darkBlue,
			color: offWhite,
			fontSize: "4vmin",
			borderRadius: "2vmin 0 0 2vmin",
			borderRight: "5px solid black",
			visibility: !pane1 && !pane2 && !pane3 ? "visible" : "hidden",
		},
		midPane: {
			height: "100%",
			width: "25vw",
			backgroundColor: offWhite,
			fontSize: "4vmin",
			borderRadius: "0",
			borderRight: "5px solid black",
			color: darkBlue,
			visibility: !pane1 && !pane2 && !pane3 ? "visible" : "hidden",
		},
		rightPane: {
			height: "100%",
			width: "25vw",
			backgroundColor: turquoise,
			fontSize: "4vmin",
			borderRadius: "0 2vmin 2vmin 0",
			color: offWhite,
			visibility: !pane1 && !pane2 && !pane3 ? "visible" : "hidden",
		},


		models: {
			position: "absolute",
			width: "75vw",
			height: "45vw",
			visibility: pane1 ? "visible" : "hidden",
			backgroundColor: darkBlue,
			borderRadius: "2vmin",
		},

		animations: {
			position: "absolute",
			width: "75vw",
			height: "45vw",
			visibility: pane2 ? "visible" : "hidden",
			backgroundColor: offWhite,
			borderRadius: "2vmin",
		},

		activities: {
			position: "absolute",
			width: "75vw",
			height: "45vw",
			visibility: pane3 ? "visible" : "hidden",
			backgroundColor: turquoise,
			borderRadius: "2vmin",
		},

		modelsButton: {
			width: "25vw",
			margin: "0",
			backgroundColor: darkBlue,
			borderRadius: "2vmin 0 0 0",
			borderBottom: pane1 ? "none" : "5px solid black",
			borderRight: "none",
			color: offWhite
		},
		animationsButton: {
			width: "25vw",
			margin: "0",
			backgroundColor: offWhite,
			borderRadius: "0",
			borderBottom: pane2 ? "none" : "5px solid black",
			borderLeft: "5px solid black",
			borderRight: "5px solid black",
			color: darkBlue
		},
		acitivitiesButton: {
			width: "25vw",
			margin: "0",
			backgroundColor: turquoise,
			borderRadius: "0 2vmin 0 0",
			borderBottom: pane3 ? "none" : "5px solid black",
			borderLeft: "none",
			color: offWhite
		},
	}

	const openModels = () => {
		setPane1(true);
		setPane2(false);
		setPane3(false);
	}

	const openAnimations = () => {
		setPane1(false);
		setPane2(true);
		setPane3(false);
	}

	const openActivities = () => {
		setPane1(false);
		setPane2(false);
		setPane3(true);
	}

	const openDemo = (demo) => {
		setDemoOpen(true);
		setDemo(demo);
	}

	const closeDemo = () => {
		setDemoOpen(false);
		setDemo("null");
	}

	return (
		<div className="App noScroll" style={{paddingBottom: "10vh"}} >
			<Navbar />

			<Demo demo={Demos[demo]} visible={demoOpen} close={closeDemo}/>

			<h1 className="animate__animated animate__flipInX" style={style.header.line1}>PRESENTING SCIENCE</h1>
			<h1 className="animate__animated animate__zoomInDown" style={style.header.line2}>DYNAMICALLY</h1>
			<div className="d-flex justify-content-center animate__animated animate__slideInUp" style={style.container}>
				<div style={style.border} />
				<button style={style.leftPane} onClick={openModels}>
					<img className='spin' src={Atom} style={{width: "80%", marginBottom: "5vh"}}/>
					Models
				</button>
				<button style={style.midPane} onClick={openAnimations} >
					<Pendulum />
					Animations
				</button>
				<button style={style.rightPane} onClick={openActivities} >
					<Sliders />
					Activities
				</button>


				<div style={style.models}>
					<div className="row justify-content-center">
						<button onClick={openModels}  style={style.modelsButton}>Models</button>
						<button onClick={openAnimations} style={style.animationsButton} >Animations</button>
						<button onClick={openActivities} style={style.acitivitiesButton}>Activities</button>
					
					</div>
					<div className='row align-items-center px-5' style={{height: "80%"}}>
						<div className='col-4' style={{height:"60%"}}>
						<img src={Atom} style={{ height: "100%" }} />
						</div>
						<div className='col' style={{color: offWhite, fontFamily: "Kanit"}}>
							<h2 style={{fontSize: "2.5vw"}}>Transform flat graphics into 3D interactive models.</h2>
							<h3 style={{ fontSize: "2vw" }}>With VirtuBook models, students can: 
								<ul>
									<li>Move, rotate, or scale models to view in 360 degrees</li>
									<li>Select and investigate specific representative features</li>
									<li>Learn more from responsive captions and labels</li>
								</ul>
								<Dropdown>
									<Dropdown.Toggle variant='success' id='models' style={{backgroundColor: offWhite, border: "none", color: darkBlue, fontSize: '3vmin'}}>
										Model demos
										</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item className='dropdownItem' as="button" onClick={() => openDemo("molecules")}>Molecular Geometry</Dropdown.Item>
										</Dropdown.Menu>
								</Dropdown>
							</h3>
								</div>
						</div>
				</div>

				<div style={style.animations}>
					<div className="row justify-content-center">
						<button onClick={openModels} style={style.modelsButton}>Models</button>
						<button onClick={openAnimations} style={style.animationsButton} >Animations</button>
						<button onClick={openActivities} style={style.acitivitiesButton}>Activities</button>

					</div>
					<div className='row align-items-center px-5' style={{ height: "80%" }}>
						<div className='col-4' style={{ height: "60%" }}>
							<Pendulum />
						</div>
						<div className='col' style={{ color: darkBlue, fontFamily: "Kanit" }}>
							<h2 style={{ fontSize: "2.5vw" }}>Bring paper to life with dynamic animations.</h2>
							<h3 style={{ fontSize: "2vw" }}>With VirtuBook animations, students can:
								<ul>
									<li>View moving representations without seeking out third party demonstrations</li>
									<li>Understand how scientific processes unfold over time</li>
									<li>Show accelerated time frames unable to be viewed in the real world</li>
								</ul>

								<Dropdown>
									<Dropdown.Toggle variant='success' id='models' style={{ backgroundColor: darkBlue, border: "none", color: offWhite, fontSize: '3vmin' }}>
										Animation demos
										</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item className='dropdownItem' as="button" onClick={() => openDemo("solarSystem")}>Solar System</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</h3>
						</div>
					</div>
				</div>

				<div style={style.activities}>
					<div className="row justify-content-center">
						<button onClick={openModels} style={style.modelsButton}>Models</button>
						<button onClick={openAnimations} style={style.animationsButton} >Animations</button>
						<button onClick={openActivities} style={style.acitivitiesButton}>Activities</button>

					</div>
					<div className='row align-items-center px-5' style={{ height: "80%" }}>
						
						<div className='col' style={{ color: offWhite, fontFamily: "Kanit" }}>
							<h2 style={{ fontSize: "2.5vw" }}>Interact with learning material in a whole new way.</h2>
							<h3 style={{ fontSize: "2vw" }}>With VirtuBook activities, students can:
								<ul>
									<li>Review material through virtual lab kits</li>
									<li>Practice problem solving with 3D models from home</li>
									<li>Get real-time data about activites as they occur</li>
								</ul>

								<Dropdown>
									<Dropdown.Toggle variant='success' id='models' style={{ backgroundColor: offWhite, border: "none", color: turquoise, fontSize: '3vmin' }}>
										Activity demos
										</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item className='dropdownItem' as="button" onClick={() => openDemo("momentumSpinner")}>Momentum Spinner</Dropdown.Item>
										<Dropdown.Item className='dropdownItem' as="button" onClick={() => openDemo("oscillator")}>Harmonic Oscillator</Dropdown.Item>
										<Dropdown.Item className='dropdownItem' as="button" onClick={() => openDemo("pendulum")}>Pendulum</Dropdown.Item>

									</Dropdown.Menu>
								</Dropdown>
							</h3>
						</div>
						<div className='col-4' style={{ height: "60%" }}>
							<Sliders />
						</div>
					</div>

				</div>
				
			</div>

		</div>
		)
}

function Pendulum() {
	return (
		<div className="d-flex justify-content-center align-items-center" style={{marginBottom: "5vh", height: "20vw"}}>

			<div style={{position: "absolute", backgroundColor: darkBlue, height: "20vw", width: "1vw" }} />
			<div style={{ marginTop: "20vw", backgroundColor: darkBlue, height: "5%", width: "60%"}}/>
			<img className='swinging' src={PendulumBall} style={{ height: "20vw", position: "absolute" }} />
			</div>
		
		)
}

function Sliders() {
	return (
		<div className="container justify-content-center" style={{marginBottom: "5vh", height: "20vw",  color: offWhite }}>
			<div className="row justify-content-center"><SettingsIcon className='gearSpin' style={{ fontSize: "10vw"}} />
			</div>
			<div className="row justify-content-center" style={{position: "relative", marginBottom: "5vh", padding: "1vw"}}>
				
				<div className='d-flex' style={{ marginBottom: "10%", backgroundColor: offWhite, height: "1vw", width: "15vw", borderRadius: "1vw" }} />
				<div className='slider1' style={{ position: "absolute", width: "2vw", height: "2vw", backgroundColor: offWhite, top: '5%', borderRadius: "1vw"}}/> 

				<div style={{ marginBottom: "10%", top: "10vw", backgroundColor: offWhite, height: "1vw", width: "15vw", borderRadius: "1vw" }} />
				<div className='slider2' style={{ position: "absolute", width: "2vw", height: "2vw", backgroundColor: offWhite, top: '39%', borderRadius: "1vw" }} /> 

				<div style={{ backgroundColor: offWhite, height: "1vw", width: "15vw", borderRadius: "1vw" }} />
				<div className='slider3'style={{ position: "absolute", width: "2vw", height: "2vw", backgroundColor: offWhite, bottom: '5%', borderRadius: "1vw" }} /> 


			</div>
					
			
			</div>
		
		)
}