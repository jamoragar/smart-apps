import React, {useState, useEffect} from 'react';

import './Navbar.css';
import logoSmartApps from '../images/logo-smartapps.svg';


const NavigationBar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            const scrollTop = window.pageYOffset;

            if(scrollTop > 50){
                setHasScrolled(true);
            }
            else{
                setHasScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
            <div className="HeaderGroup">
                <a className="HeaderLogo" href="#inicio" aria-label="Ir al inicio de Smart Apps"><img src={logoSmartApps} width='100' alt="Smart Apps"/></a>
                <nav aria-label="Navegación principal">
                    <a href="#servicios">Servicios</a>
                    <a href="#expertise">Expertise</a>
                    <a href="#nosotros">Nosotros</a>
                </nav>
                <a className="HeaderCta" href="mailto:contacto@smartapps.cl">Contacto</a>
            </div>
        </header>
    )
}
export default NavigationBar;
