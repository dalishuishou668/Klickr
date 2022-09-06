import './LandingPage.css'
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Footer from '../Footer';


function LandingPage() {

    return (
        <div className='landingContainer'>
            <div className='landingText'>
                <h1>Find your inspiration</h1>
                <p>Join the Klickr community, home to tens of bilions of photos.</p>
                <button className='startBtn'>
                    <NavLink className='startLink' to='/login' exact={true}>
                        Start Here
                    </NavLink>
                </button>
            </div>
            <div className='footerOuterContainer'>
                <Footer />
            </div>



        </div>
    )
}

export default LandingPage;
