import React from 'react';
import Particles from 'react-particles-js';

import Wave from '../components/wave';
import Card from '../components/card';

import {Link} from 'react-router-dom';

const HomePage = () => {

    return (
        <>
        <div className="Hero">
            <div className='particles'>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
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
                <Wave />
            </div>
        </div>
        <div className="Cards">
            <h2>¿Qué podemos hacer por ti?</h2>
            <div className="CardGroup">
                <Card 
                title="Aplicaciones Móviles"
                text="Android - Ios"
                image={require('../images/wallpaper.jpg')} />
                <Card 
                title="Sistemas de Escritorio"
                text="Punto de Venta, sistemas de inventarios, o lo que necesites!"
                image={require('../images/wallpaper2.jpg')} />
                <Card 
                title="Desarrollo Web"
                text="Creación de Páginas Web corporativas o Landing Page"
                image={require('../images/wallpaper3.jpg')} />
                <Card 
                title="Cloud Services"
                text="desarrollamos y gestionamos infraestructuras centradas en la nube"
                image={require('../images/wallpaper4.jpg')} />
            </div>
        </div>
        </>
    )
}
export default HomePage;
