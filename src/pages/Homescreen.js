import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Page from '../res/OrgPage1.png';
import Molecule from '../res/OMolecule.png';
import { Link } from 'react-router-dom';


function Homescreen() {

    const local = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

    const titleCont =  {
        marginTop: "5vh",
        paddingLeft: "10vmin"
    }

    const h1Style = {
        position: "relative",
        fontSize: "9vmin",

    }

    const graphicContainer = {
        position: "absolute",
        right: "10vw",
       
    }

   

    const moleculeStyle = {
        width: "30vw",
        animation: "floatIn 1s",
        paddingRight: "4vw",
        marginBottom: "2vh"
    }

    const flatpageStyle = {
        width: "30vw",

    }
    if (window.innerHeight / window.innerWidth <= 8 / 10)
        return (
            <div className="App" >
                <Navbar />
                <div className="row" style={{marginTop: "15vh"}}>
                <div className="col-7" style={titleCont}>
                    <h1 style={h1Style}>THE FUTURE OF SCIENCE EDUCATION IS HERE.</h1>
                    <br /><Link to="/solutions"><button style={{ fontSize: "4vmin", marginTop: "2vh" }}>Explore Solutions</button></Link></div>
                <div className="row align-content-center" style={graphicContainer}>
                    <div className="col-4">
                        <img src={Molecule} style={moleculeStyle} /><br />
                        <img src={Page} style={flatpageStyle} />
                    </div>
                    </div>
                    </div>
            </div>
        ); else {
        return (
            <div className="App">
                <Navbar />
                <div className="col-7" style={titleCont}>
                    <h1 style={h1Style}>THE FUTURE OF SCIENCE EDUCATION IS HERE.</h1>
                    <br /><button style={{ fontSize: "4vmin", marginTop: "2vh" }}>Explore Solutions</button></div>
                <div className="row align-content-center" style={graphicContainer}>
                    <div className="container">
                        <img src={Molecule} style={moleculeStyle} /><br />
                        <img src={Page} style={flatpageStyle} />
                    </div>
                </div>
            </div>
            );
    }
}

export default Homescreen;