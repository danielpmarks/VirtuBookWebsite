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

    const vertical = {
        graphic: {
            position: "relative"

        }
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
                <div className="row justify-content-center" style={{marginTop: "15%"}}>
                    <div className="d-flex">
                        <div className='col'>
                        <div className='row'>
                            <img src={Molecule} style={moleculeStyle} /><br /></div>
                            <div className='row' >
                    <img src={Page} style={flatpageStyle} /></div></div>
                </div>
            </div>
                <div className="row justify-content-center" style={{ padding: "5% 5% 0 5%", textAlign: 'center' }}>
                    <h1 style={h1Style}>THE FUTURE OF SCIENCE EDUCATION IS HERE.</h1>
                    <br /><Link to='/solutions'><button style={{ fontSize: "4vmin", marginTop: "2vh" }}>Explore Solutions</button></Link></div>
                
            </div>
            );
    }
}

export default Homescreen;