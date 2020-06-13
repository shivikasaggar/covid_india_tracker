import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../assests/border-img/1.png';
import second from '../assests/border-img/2.png';
import third from '../assests/border-img/3.png';
function Footer() {
    return (
       
            <div>
                    <div className="line line1">
                    <div className="wave wave1" style={{ backgroundImage: `url(${first})`}}></div>
                    </div>
                <div className="line line2">
                    <div className="wave wave2" style={{ backgroundImage: `url(${second})` }}></div>
                    </div>
                    <div className="line line3">
                    <div className="wave wave3" style={{ backgroundImage: `url(${third})` }}></div>
                    </div>
                
            </div>
        
        );

}
export default Footer;