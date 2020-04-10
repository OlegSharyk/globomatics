import React from 'react';
import logo from './GloboLogo.png';
import './main-page.css'


const Header = (props) =>  (
    <header className="row">
        <div className="col-md-5 logo-image">
            <img src={logo} className="logo-image" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
            {props.subtitle}
        </div>
    </header>
);

export default Header;