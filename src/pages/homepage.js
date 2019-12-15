import React from 'react';
import Particles from 'react-particles-js';

import {Link} from 'react-router-dom';

const HomePage = () => {

    return (
        <div className="Hero">
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: '0px',
                right: '0px',
                'z-index': '-1'
                }}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 6
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }
                } />
            </div>
            <div className="HeroGroup">
                <h1>Smart Apps<br/>Desarrollo de aplicaciones</h1>
                <p>Experiencia y desfachates para hacer realidad tus ideas!</p>
                <Link to="/Contact">Escribenos!</Link>
                <div className="Logos">
                    <img src={require('../images/logo-ios.png')} alt="Ios development" width="50"/>
                    <img src={require('../images/logo-android.png')} alt="Android development" width="50"/>
                    <img src={require('../images/logo-react.png')} alt="Web development" width="50"/>
                    <img src={require('../images/logo-node.png')} alt="Server side Development" width="50"/>
                    <img src={require('../images/logo-firebase.png')} alt="Google Cloud" width="50"/>
                    <img src={require('../images/logo-aws.png')} alt="Serverless AWS" width="50"/>
                </div>
                <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white">
                        <animate repeatCount='indefinite' fill='freeze' attributeName='d' dur='10s' values='M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                        
                        M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

                        M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

                        M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
                        ' />
                    </path>
                </svg>

            </div>
        </div>
    )
}
export default HomePage;
