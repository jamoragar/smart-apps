import React, { useState } from 'react';

import Wave from '../components/wave';
import Card from '../components/card';
import logoIos from '../images/logo-ios.png';
import logoAndroid from '../images/logo-android.png';
import logoReact from '../images/logo-react.png';
import logoNode from '../images/logo-node.png';
import logoFirebase from '../images/logo-firebase.png';
import logoAws from '../images/logo-aws.png';
import wallpaperMobile from '../images/wallpaper.jpg';
import wallpaperDesktop from '../images/wallpaper2.jpg';
import wallpaperWeb from '../images/wallpaper3.jpg';
import wallpaperCloud from '../images/wallpaper4.jpg';

const services = [
    {
        title: 'Apps web y móviles',
        eyebrow: 'React + iOS + Android',
        text: 'Productos rápidos, accesibles y listos para que tus clientes compren, reserven o gestionen desde cualquier dispositivo.',
        image: wallpaperMobile,
        tone: 'mobile',
    },
    {
        title: 'Software a medida',
        eyebrow: 'Backoffice + procesos',
        text: 'Sistemas internos para ordenar operaciones, automatizar tareas repetitivas y darle trazabilidad real a tu negocio.',
        image: wallpaperDesktop,
        tone: 'software',
    },
    {
        title: 'Sitios que convierten',
        eyebrow: 'Landing + plataformas',
        text: 'Webs modernas, medibles y accesibles que explican tu oferta con claridad y ayudan a convertir visitas en oportunidades.',
        image: wallpaperWeb,
        featured: true,
        tone: 'web',
    },
    {
        title: 'IA y transformación digital',
        eyebrow: 'AI + cloud + datos',
        text: 'Adoptamos inteligencia artificial, nube y analítica de forma práctica para mejorar decisiones, atención y productividad.',
        image: wallpaperCloud,
        tone: 'ai',
    },
];

const technologies = [
    { name: 'iOS', image: logoIos },
    { name: 'Android', image: logoAndroid },
    { name: 'React', image: logoReact },
    { name: 'Node.js', image: logoNode },
    { name: 'Firebase', image: logoFirebase },
    { name: 'Amazon Web Services', image: logoAws },
];

const clientTypes = [
    {
        title: 'Empresas que necesitan ordenar procesos',
        text: 'Digitalizamos flujos, reportes y operaciones repetitivas para que el equipo trabaje con menos fricción.',
    },
    {
        title: 'Emprendedores con una idea validable',
        text: 'Convertimos una hipótesis en una primera versión clara, medible y lista para conversar con usuarios reales.',
    },
    {
        title: 'Equipos que quieren adoptar IA sin ruido',
        text: 'Detectamos oportunidades reales, priorizamos casos de uso y llevamos la inteligencia artificial a flujos concretos.',
    },
];

const proofPoints = [
    {
        title: 'Diagnóstico accionable',
        text: 'Salimos de la primera conversación con problemas, oportunidades y prioridades ordenadas.',
    },
    {
        title: 'Accesibilidad integrada',
        text: 'Contraste, foco visible, navegación por teclado y contenido claro desde el diseño.',
    },
    {
        title: 'Entrega medible',
        text: 'Cada lanzamiento queda conectado a objetivos, métricas y próximos experimentos.',
    },
    {
        title: 'IA con propósito',
        text: 'Automatizamos sólo donde ahorra tiempo, mejora atención o reduce errores reales.',
    },
];

const engagementModels = [
    {
        label: '01',
        title: 'Diagnóstico digital',
        text: 'Para empresas que saben que algo debe mejorar, pero necesitan ordenar procesos, datos, experiencia y prioridades antes de invertir.',
        bullets: ['Mapa de oportunidades', 'Roadmap por impacto', 'Primer backlog viable'],
    },
    {
        label: '02',
        title: 'Producto inicial',
        text: 'Para lanzar una web, app o sistema interno con una primera versión clara, rápida, accesible y lista para aprender de usuarios reales.',
        bullets: ['UX y contenido', 'Frontend y backend', 'Despliegue y analítica'],
    },
    {
        label: '03',
        title: 'Mejora continua',
        text: 'Para modernizar lo existente: performance, seguridad, accesibilidad, adopción de IA, integraciones y nuevas capacidades.',
        bullets: ['Auditoría técnica', 'Optimización gradual', 'Automatización inteligente'],
    },
];

const workflow = [
    {
        id: 'explorar',
        step: '01',
        title: 'Explorar',
        text: 'Aterrizamos el problema, el público y la oportunidad comercial. Definimos qué debe lograr el producto antes de escribir código.',
        detail: 'Entrevistas, mapa de procesos, métricas base y una ruta corta para decidir qué construir primero.',
    },
    {
        id: 'disenar',
        step: '02',
        title: 'Diseñar',
        text: 'Prototipamos la interfaz, ordenamos contenidos y validamos la experiencia para que el producto sea fácil de entender y usar.',
        detail: 'Wireframes, arquitectura de información, copy comercial y revisión de accesibilidad desde el diseño.',
    },
    {
        id: 'construir',
        step: '03',
        title: 'Construir',
        text: 'Implementamos una base rápida, accesible y mantenible usando herramientas modernas.',
        detail: 'Frontend, backend, integraciones, despliegue cloud y buenas prácticas para que el producto pueda crecer.',
    },
    {
        id: 'medir',
        step: '04',
        title: 'Medir',
        text: 'Dejamos el sitio preparado para aprender: conversiones, rendimiento, feedback y próximos pasos del roadmap.',
        detail: 'Analítica, eventos clave, performance, pauta de mejora continua y próximos experimentos de negocio.',
    },
];

const values = [
    {
        title: 'Claridad antes que complejidad',
        text: 'Traducimos tecnología en decisiones simples: qué construir, por qué importa y cómo se mide el impacto.',
    },
    {
        title: 'Accesibilidad como estándar',
        text: 'Diseñamos interfaces legibles, navegables por teclado y pensadas para personas reales, no sólo para capturas bonitas.',
    },
    {
        title: 'IA aplicada al negocio',
        text: 'Buscamos automatizaciones y asistentes donde puedan ahorrar tiempo, mejorar servicio o abrir nuevas capacidades.',
    },
];

const signals = ['Web', 'Mobile', 'Software', 'IA', 'Cloud', 'Datos'];

const HomePage = () => {
    const [openStep, setOpenStep] = useState('explorar');

    return (
        <main id="inicio">
            <section className="Hero" aria-labelledby="hero-title">
                <div className="HeroPaths" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="HeroGroup">
                    <p className="HeroKicker">Estudio digital en Punta Arenas</p>
                    <h1 id="hero-title">Diseño, software y cloud para negocios que necesitan avanzar.</h1>
                    <p className="HeroLead">Creamos sitios, aplicaciones y sistemas internos que se ven modernos, cargan rápido y explican con claridad por qué un cliente debería elegirte.</p>
                    <div className="HeroActions" aria-label="Acciones principales">
                        <a className="HeroCta" href="mailto:contacto@smartapps.cl">Conversemos tu proyecto</a>
                        <a className="HeroSecondary" href="#servicios">Ver servicios</a>
                    </div>
                </div>

                <div className="HeroShowcase" aria-label="Resumen de valor">
                    <article className="HeroPanel">
                        <p>Smart Apps</p>
                        <strong>Producto, interfaz e infraestructura en una sola mesa.</strong>
                        <span>Mobile / Web / Cloud</span>
                    </article>
                    <div className="OutcomeRail" aria-label="Resultados que buscamos">
                        <span>Más claridad comercial</span>
                        <span>Menos fricción operativa</span>
                        <span>Mejor experiencia móvil</span>
                    </div>
                </div>

                <ul className="Logos" aria-label="Tecnologías con las que trabajamos">
                    {technologies.map((technology) => (
                        <li key={technology.name}>
                            <img src={technology.image} alt={technology.name} width="50" />
                        </li>
                    ))}
                </ul>
                <Wave />
            </section>

            <section className="ProofStrip" aria-labelledby="proof-title">
                <div className="ProofIntro">
                    <p className="SectionKicker">Diferencia</p>
                    <h2 id="proof-title">No vendemos pantallas: dejamos una capacidad instalada.</h2>
                </div>
                <div className="ProofGrid">
                    {proofPoints.map((point) => (
                        <article className="ProofItem" key={point.title}>
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="Cards" id="servicios" aria-labelledby="services-title">
                <div className="SectionIntro SectionIntroCentered">
                    <p className="SectionKicker">Servicios</p>
                    <h2 id="services-title">Lo que necesitas para pasar de idea a producto funcionando.</h2>
                    <p>Una oferta simple para empresas y personas: presencia digital, aplicaciones, sistemas internos e infraestructura para operar con confianza.</p>
                </div>
                <div className="CardGroup" aria-label="Servicios de Smart Apps">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            title={service.title}
                            eyebrow={service.eyebrow}
                            text={service.text}
                            imageAlt=""
                            image={service.image}
                            featured={service.featured}
                            tone={service.tone}
                        />
                    ))}
                </div>
            </section>

            <section className="ClientSection" aria-labelledby="clients-title">
                <div className="SectionIntro SectionIntroCentered">
                    <p className="SectionKicker">Para quién</p>
                    <h2 id="clients-title">Servicios informáticos entendibles para decisiones reales.</h2>
                </div>
                <div className="ClientGrid">
                    {clientTypes.map((client) => (
                        <article className="ClientCard" key={client.title}>
                            <h3>{client.title}</h3>
                            <p>{client.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="EngagementSection" aria-labelledby="engagement-title">
                <div className="EngagementIntro">
                    <p className="SectionKicker">Cómo empezar</p>
                    <h2 id="engagement-title">Tres caminos para avanzar sin sobredimensionar el proyecto.</h2>
                    <p>La entrada depende del momento del negocio. Podemos partir ordenando una idea, lanzando un producto inicial o mejorando una plataforma que ya existe.</p>
                </div>
                <div className="EngagementGrid">
                    {engagementModels.map((model) => (
                        <article className="EngagementCard" key={model.title}>
                            <span>{model.label}</span>
                            <h3>{model.title}</h3>
                            <p>{model.text}</p>
                            <ul>
                                {model.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="WorkflowSection" id="expertise" aria-labelledby="expertise-title">
                <div className="WorkflowIntro">
                    <p className="SectionKicker">Expertise</p>
                    <h2 id="expertise-title">Un proceso corto, visible y medible.</h2>
                    <p>Inspirado en estudios de producto modernos: claridad en el problema, diseño antes de construir y medición desde el primer despliegue.</p>
                </div>
                <ol className="WorkflowList">
                    {workflow.map((item) => {
                        const isOpen = openStep === item.id;
                        return (
                            <li className={isOpen ? 'WorkflowItem WorkflowItemOpen' : 'WorkflowItem'} key={item.id}>
                                <span className="WorkflowNumber">{item.step}</span>
                                <div>
                                    <button
                                        className="WorkflowButton"
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`${item.id}-panel`}
                                        onClick={() => setOpenStep(isOpen ? '' : item.id)}
                                    >
                                        {item.title}
                                        <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
                                    </button>
                                    <div
                                        className={isOpen ? 'WorkflowPanelWrap WorkflowPanelWrapOpen' : 'WorkflowPanelWrap'}
                                        id={`${item.id}-panel`}
                                    >
                                        <div className="WorkflowPanel">
                                            <p>{item.text}</p>
                                            <small>{item.detail}</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </section>

            <section className="AboutSection" id="nosotros" aria-labelledby="about-title">
                <div className="AboutCopy">
                    <p className="SectionKicker">Nosotros</p>
                    <h2 id="about-title">Tecnología con oficio, criterio de producto y foco en resultados.</h2>
                    <p>Smart Apps ayuda a empresas a convertir procesos, ideas y oportunidades digitales en aplicaciones útiles. Unimos diseño, desarrollo e infraestructura para que cada entrega sea clara para el usuario, mantenible para el equipo y medible para el negocio.</p>
                    <p>Trabajamos con una mentalidad simple: entender primero, construir con precisión y mejorar con evidencia. Por eso cada proyecto considera experiencia de usuario, accesibilidad, rendimiento, seguridad y una adopción responsable de inteligencia artificial cuando agrega valor real.</p>
                    <a className="FinalCta" href="mailto:contacto@smartapps.cl">Escríbenos</a>
                </div>
                <div className="AboutVisual" aria-label="Capacidades conectadas de Smart Apps">
                    <div className="SignalLoop" aria-hidden="true">
                        {signals.map((signal) => (
                            <span key={signal}>{signal}</span>
                        ))}
                    </div>
                    <div className="ValueGrid">
                        {values.map((value) => (
                            <article className="ValueCard" key={value.title}>
                                <h3>{value.title}</h3>
                                <p>{value.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
