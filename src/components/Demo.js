import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const darkBlue = "#05386B";
const offWhite = "#EDF5E1";
const turquoise = "#379683";

export default function (props) {
    const style = {
        container: {
            zIndex: "2",
            position: "fixed",
            height: "70%",
            width: "70%",
            left: "15%",
            top: "15%",
            backgroundColor: offWhite,
            borderRadius: "3vmin",
            border: "5px solid black",
            visibility: props.visible ? "visible" : "hidden"
        },

        text: {
            header: {
                color: darkBlue,
                fontFamily: 'Kanit'
            },
            p: {
                color: darkBlue,
                fontFamily: 'Kanit',
                fontSize: '3vmin',
                textAlign: "left"
            }
        },

        clear: {
            position: "absolute",
            background: "none",
            color: darkBlue,
            right: "5%",
            top: "5%"
        }
    }

    return (
        <div className="d-flex px-3" style={style.container}>
     
            <div className="d-flex" style={{ position: "relative", width: "100%", textAlign: "center" }}>
                <div className="col-4">
                    <div className='row justify-content-center align-items-center' style={{height: "100%"}}>
                        <iframe src={props.demo.src} height="80%" width="80%" style={{ position: "absolute"}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        
                        </div>
                </div>
                <div className='col-8' >
                    <button style={style.clear} onClick={props.close}><ClearIcon style={{fontSize: "5vmin"}}/></button>
                    <div className='row align-items-center' style={{ height: "100%" }}>
                        <div className='col'>
                            <h1 style={style.text.header}>{props.demo.title}</h1>
                            <p style={style.text.p}>{props.demo.description}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}