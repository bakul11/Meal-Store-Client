import React from 'react';
import './DownloadApp.css'
import mobile from '../../../images/mobile.png'
import team1 from '../../../images/Team-memeber-11.png'
import team2 from '../../../images/Team-memeber-13.png'
import team3 from '../../../images/Team-memeber-9.png'
import playstor from '../../../images/playstor.png'
import apple from '../../../images/apple.png'
import re4 from '../../../images/res4.png'
import re3 from '../../../images/res3.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const DownloadApp = () => {
    return (
        <section className='DownloadApp container' style={ { marginTop: '200px' } }>
            <div className='container '>
                <div className="row">
                    <div className="app col-lg-6">
                        <Fade left>
                            <img src={ mobile } alt='mobile' className='img-fluid' style={ { height: '500px', width: '1400px' } }></img>
                            </Fade>
                    </div>
                    <div className="app2 col-lg-4">
                        <Fade right>
                        <div className="team mt-5">
                            <h2 className='text-light mb-3'>Download <br />Our Mobile App</h2>
                            <ul className='d-flex align-items-center'>
                                <li> <img src={ team2 } alt='mobile' className='img-fluid rounded-circle' style={ { height: '40px', width: '40px' } }></img></li>
                                <li> <img src={ team1 } alt='mobile' className='img-fluid rounded-circle ms-2' style={ { height: '40px', width: '40px' } }></img></li>
                                <li> <img src={ team3 } alt='mobile' className='img-fluid rounded-circle ms-2' style={ { height: '40px', width: '40px' } }></img></li>
                                <li> <img src={ team1 } alt='mobile' className='img-fluid rounded-circle ms-2' style={ { height: '40px', width: '40px' } }></img></li>
                            </ul>
                            </div>
                        </Fade>
                        <div className='mobile-app d-flex align-items-center'>
                            <Zoom >
                            <div><a href='https://play.google.com/store/apps/?hl=en&gl=US' target='_blank'> <img src={ playstor } alt='mobile' className='img-fluid rounded-circle m-0' style={ { height: '180px', width: '150px' } }></img></a></div>
                                <div><a href='https://play.google.com/store/apps/?hl=en&gl=US' target='_blank'> <img src={ apple } alt='mobile' className='img-fluid rounded-circle m-0' style={ { height: '150px', width: '150px' } }></img></a></div>
                            </Zoom>
                        </div>
                    </div>
                    <div className="app3 col-lg-2">
                        <Fade left>
                        <div className="extra">
                            <img src={ re4 } alt='mobile' className='img-fluid rounded-circle' style={ { height: '170px', width: '400px' } }></img>
                            <img src={ re3 } alt='mobile' className='img-fluid rounded-circle' style={ { height: '170px', width: '400px' } }></img>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;