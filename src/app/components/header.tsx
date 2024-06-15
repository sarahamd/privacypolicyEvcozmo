import React from 'react';

const Header = () => {
    return (
        <div className="container" style={{ position: "relative", top: "0" }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="110 80 1040 164">
                    <path fill="#40AFAB" fillOpacity="1" d="M0,192L120,202.7C240,213,480,235,720,218.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            </div>
            <div className="ms-4">
                <div className="w-100 text-container" style={{ color: "white", position: "absolute", zIndex: "1", top: "16px" }}>
                    <h3 className="fs-1">
                        Privacy Policy
                    </h3>
                    <h6 className="m-2">
                        Last modified on <strong>19 June, 2024</strong>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Header;



{/* // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L1440,160L1440,0L0,0Z"></path></svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L120,202.7C240,213,480,235,720,218.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#40afab" fill-opacity="1" d="M0,224L120,229.3C240,235,480,245,720,213.3C960,181,1200,107,1320,69.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>