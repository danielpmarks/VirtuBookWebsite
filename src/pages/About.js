import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Book from '../res/open_book_filled.png';
import Cell from '../res/Cell.png';
import Nucleus from '../res/Nucleus.png';
import Electrons from '../res/Electrons.png';
import FlaskPage from '../res/FlaskPage.png';
import Flask from '../res/Flask.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "../../node_modules/animate.css/animate.min.css";

export default function About() {

    


    const bookText = {
        position: "absolute",
        color: "white",
        fontSize: "7vmin",
        textAlign: "center",
        
    }

    const subtitles = {
        color: "white",
        fontSize: "5vmin",
        textAlign: "center",
       
    }

    const bookCont = {
        marginBottom: "20vh",
        marginTop: "15vh"
    }

    const cellStyle = {
        maxWidth: "20vmin"
    }

    const atomStyle = {
        maxWidth: "20vmin"
    }

    const beakerStyle = {
        margin: "5vmin 0 2vmin 0",
        maxWidth: "20vmin"
    }

    const pageStyle = {
        maxWidth: "30vmin",
    }


    return (
        <div className="App" style={{fontFamily: 'Kanit', paddingBottom: "20vh"}}>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center slideIn" style={bookCont}>
                <img className="books" src={Book} ></img>
                <p className="enlarge" style={bookText}>Learning beyond <br /> the book</p>
            </div>

            <div className="d-flex justify-content-center align-items-center" style={{margin: "10vh 10vw 0 10vw"}}>
                <ScrollAnimation animateOnce={true} animateIn='animate__animated animate__zoomIn' duration="0.5s" style={{marginRight: "5vw"}}>
                    <img style={cellStyle} src={Cell} />
                    </ScrollAnimation>
                <ScrollAnimation animateOnce={true} animateIn='animate__animated animate__zoomIn' duration="0.5s">
                <p style={subtitles}>Models of things too small to see</p>
                
                </ScrollAnimation>
            </div>

            <div className="d-flex justify-content-center align-items-center" style={{ margin: "10vh 10vw 0 10vw"}}>
                
                <ScrollAnimation animateOnce={true} animateIn='animate__animated animate__backInDown' duration="0.5s">
                    <p style={subtitles}>...or systems too large to capture</p>

                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} animateIn='animate__animated animate__zoomIn' duration="0.5s" style={{marginLeft: "5vw"}}>
                    <img className="rotateClock" style={{maxWidth: "20vmin", position: "absolute"}} src={Nucleus} />
                    <img className="rotateCounter" style={atomStyle} src={Electrons} />
                </ScrollAnimation>
            </div>

            <div className="row justify-content-center align-items-center" style={{ margin: "0 10vw 0 10vw" }}>
                <div className="col justify-items-center" >
                    

                    <div className="row justify-content-center">
                        <ScrollAnimation offset={500} animateOnce={true} animateIn='animate__animated animate__fadeInUp' duration="0.5s" >
                            <img className="floatIn" style={beakerStyle} src={Flask} />
                        </ScrollAnimation>
                    </div>

                    <div className="row justify-content-center" style={{marginBottom: "5vh"}}>
                        <ScrollAnimation offset={0}animateOnce={true} animateIn="animate__animated animate__fadeIn">
                        <img style={pageStyle} src={FlaskPage} />
                        
                        </ScrollAnimation> 
                    </div>

                    <ScrollAnimation animateOnce={true} animateIn='animate__animated animate__jackInTheBox' duration="0.5s">
                        <p style={subtitles}>VirtuBook brings scientific concepts out of the book using mobile-based augmented reality</p>
                        
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn='animate__animated animate__fadeIn'>
                    <div className="row justify-content-center" style={{marginTop: "5vh", fontSize: "3vmin"}}>
                        <Link to='/solutions'><button>Explore Solutions</button></Link>
                        </div>
                        </ScrollAnimation>
                    </div>
                
            </div>
        </div>
    );
}