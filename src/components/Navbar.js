import React from 'react';
import PropTypes from 'prop-types';
// import { a } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <h6 className='my-2'>Home</h6>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-a" href="/about">{props.about}</a>
                        </li> */}
                    </ul>
                    <div className="form-check form-switch my-2 px-5">
                        <input className="form-check-input" onClick={props.switchMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <h6 className='my-1'>Enable dark mode</h6>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    switchMode: PropTypes.func.isRequired,
    about: PropTypes.string
};

Navbar.defaultProps = {
    about: 'About'
};
