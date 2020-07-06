import React from 'react';
import Navbar from '../components/Navbar';

export default function Privacy() {
    const style = {
        container: {
            marginTop: "20vh",
            padding: "0 10% 0 10%",
            color: "white"
        },
        header: {
            color: "white",
            fontSize: "7vmin"
        },
        paragraph: {
            color: "white",
            fontSize: "4vmin",
            marginBottom: "2vh",
            fontFamily: "Kanit"
        }
    }

    return (
        <div className='App'>
            <Navbar />

            <div className='d-flex' style={style.container}>
                <div className='col'>
                    <h1 style={style.header}>Privacy Policy</h1>
                    <p style={style.paragraph}>VirtuBook does not collect any user data to a database. However, the app does request permission to use the device CAMERA and PHONE STATE.</p>
                        
                    <p style={style.paragraph}>VirtuBook is intended for student use, which may include children under the age of 13. Again, ViruBook DOES NOT collect any user data,
                    including that of children under the age of 13. Children under the age of 13 should have parental permission before downloading VirtuBook AR Textbook.</p>
                    </div>
                </div>
            </div>
        );
}