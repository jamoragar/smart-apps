import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';


const NavigationBar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = (e) =>{
        const scrollTop = window.pageYOffset;

        if(scrollTop > 50){
            setHasScrolled(true);
        }
        else{
            setHasScrolled(false);
        }
    }
    return (
        <div className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
            <div className="HeaderGroup">
                <Link to='/'><img src={require('../images/logo-smartapps.svg')} width='100' alt="Srtmar Apps"/></Link>
                <Link to='/Services'>Servicios</Link>
                <Link to='/Expetice'>Expertice</Link>
                <Link to='/AboutUs'>Nosotros</Link>
                <Link to='/Contact'><button>Contacto</button></Link>
            </div>
        </div>
    )
}
export default NavigationBar;