import React from 'react';
import './style.css'
import logo from '../../logo.png'

const HomePage = () => {
    return (
        <div className="container text-center p-5">
            <div className="container text-center border bg-secondary p-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="coming-soon-inner container text-center">
                            <img src={logo} alt="logo" />
                            <h1>Coming Soon</h1>
                            <div className="countdown styled coming-soon-counter"></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;