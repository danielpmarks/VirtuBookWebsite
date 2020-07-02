import React from 'react';
import Molecules from '../res/Molecules.gif'

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
            border: "2px solid black"
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
        }
    }

    return (
        <div className="d-flex px-3" style={style.container}>
            <div className="d-flex" style={{position: "relative", width: "100%", textAlign:"center"}}>
                <div className="col-4">
                    <div className='row justify-content-center align-items-center' style={{height: "100%"}}>
                        <img style={{maxWidth: "70%"}} src={Molecules} />
                        </div>
                </div>
                <div className='col-8' >
                    <div className='row align-items-center' style={{height: "100%"}}>
                        <div className='col'>
                        <h1 style={style.text.header}>Molecular Models</h1>
                    <p style={style.text.p}> This demo attempts to solve one of the largest challenges
                    for students new to chemistry: molecular geometry. Students are able to investigate
                        the shapes of various similar molecules by expanding and rotating AR models.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}