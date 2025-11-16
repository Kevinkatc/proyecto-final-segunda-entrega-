import { Link } from "react-router-dom";
import React, { useState } from "react";

function Historia() {
    const [decadaActiva, setDecadaActiva] = useState(null);

    const decadas = [
        {
            year: "1940",
            img: "1940 a 2020/1940.jfif",
            alt: "Computadora ENIAC",
            titulo: "Década de 1940",
            contenido: [
                "<strong>Contexto:</strong> En plena Segunda Guerra Mundial, la necesidad de cálculos rápidos llevó al desarrollo de las primeras computadoras electrónicas.",
                "<strong>Ejemplos:</strong> ENIAC (EE. UU., 1945), Colossus (Reino Unido, 1943).",
                "<strong>Características:</strong> Usaban tubos de vacío, ocupaban salas enteras y necesitaban muchísima energía.",
                "<strong>Impacto:</strong> Aunque eran experimentales, demostraron que las máquinas podían automatizar tareas complejas y abrir el camino de la computación moderna."
            ]
        },
        {
            year: "1950",
            img: "1940 a 2020/1950.jfif",
            alt: "IBM 650",
            titulo: "Década de 1950",
            contenido: [
                "<strong>Contexto:</strong> Transición del tubo de vacío al transistor, que permitió equipos más pequeños, rápidos y fiables.",
                "<strong>Ejemplos:</strong> IBM 650 (primera computadora producida en masa), UNIVAC I (primera computadora comercial en EE. UU.).",
                "<strong>Características:</strong> Todavía grandes y costosas, pero más accesibles a universidades y empresas.",
                "<strong>Impacto:</strong> Se democratizó el acceso a la computación en instituciones educativas y de negocios, marcando el inicio de la era comercial."
            ]
        },
        {
            year: "1960",
            img: "1940 a 2020/1960.jpg",
            alt: "PDP-8",
            titulo: "Década de 1960",
            contenido: [
                "<strong>Contexto:</strong> La miniaturización avanzó y aparecieron las minicomputadoras.",
                "<strong>Ejemplos:</strong> PDP-8 (DEC), IBM System/360 (familia de computadoras compatibles entre sí).",
                "<strong>Características:</strong> Más pequeñas que las de los 50, más baratas, usadas en laboratorios, empresas y universidades.",
                "<strong>Impacto:</strong> Por primera vez la computación empezó a verse como una herramienta práctica y no solo experimental."
            ]
        },
        {
            year: "1970",
            img: "1940 a 2020/1970.jfif",
            alt: "Apple I",
            titulo: "Década de 1970",
            contenido: [
                "<strong>Contexto:</strong> Surge la microinformática gracias al microprocesador (Intel 4004 en 1971).",
                "<strong>Ejemplos:</strong> Altair 8800 (1975), Apple I (1976), Commodore PET.",
                "<strong>Características:</strong> Computadoras personales rudimentarias, con carcasa sencilla y muchas veces ensambladas por los usuarios.",
                "<strong>Impacto:</strong> Nace la idea de 'PC en cada hogar', sembrando la semilla de la revolución digital."
            ]
        },
        {
            year: "1980",
            img: "1940 a 2020/1980.jfif",
            alt: "IBM PC",
            titulo: "Década de 1980",
            contenido: [
                "<strong>Contexto:</strong> Boom de las computadoras personales. La informática deja de ser exclusiva de científicos y llega a oficinas y hogares.",
                "<strong>Ejemplos:</strong> IBM PC (1981), Commodore 64 (1982), Macintosh (1984).",
                "<strong>Características:</strong> Uso de sistemas operativos como MS-DOS y los primeros entornos gráficos.",
                "<strong>Impacto:</strong> Se establecieron los estándares que definirían la informática durante décadas."
            ]
        },
        {
            year: "1990",
            img: "1940 a 2020/1990.jfif",
            alt: "Windows 95",
            titulo: "Década de 1990",
            contenido: [
                "<strong>Contexto:</strong> Internet se expande al público general, impulsando nuevas formas de comunicación y comercio.",
                "<strong>Ejemplos:</strong> Windows 95, procesadores Pentium, primera PlayStation (1994).",
                "<strong>Características:</strong> PCs multimedia con CD-ROM, disquetes aún vigentes, aparición de la World Wide Web.",
                "<strong>Impacto:</strong> La sociedad empieza a conectarse globalmente y se gestan las bases de la era digital moderna."
            ]
        },
        {
            year: "2000",
            img: "1940 a 2020/2000.avif",
            alt: "iPod",
            titulo: "Década de 2000",
            contenido: [
                "<strong>Contexto:</strong> Explosión de la informática personal y portátil, con el auge de Internet de banda ancha.",
                "<strong>Ejemplos:</strong> iPod (2001), laptops asequibles, Windows XP (2001), primeras redes sociales.",
                "<strong>Características:</strong> Computadoras más rápidas y conectadas; telefonía móvil comienza a volverse inteligente.",
                "<strong>Impacto:</strong> Integración del hardware con la vida cotidiana: música digital, redes y comunicación en tiempo real."
            ]
        },
        {
            year: "2010",
            img: "1940 a 2020/2010.jfif",
            alt: "Smartphone",
            titulo: "Década de 2010",
            contenido: [
                "<strong>Contexto:</strong> El smartphone y la computación en la nube transforman la forma en que vivimos.",
                "<strong>Ejemplos:</strong> iPhone, Android, tablets, servicios como Google Drive y Netflix.",
                "<strong>Características:</strong> Dispositivos móviles con múltiples funciones, acceso constante a Internet y aplicaciones.",
                "<strong>Impacto:</strong> La informática se volvió omnipresente, conectando a miles de millones en tiempo real."
            ]
        },
        {
            year: "2020",
            img: "1940 a 2020/2020.jfif",
            alt: "Inteligencia Artificial",
            titulo: "Década de 2020",
            contenido: [
                "<strong>Contexto:</strong> Avances en inteligencia artificial, big data, computación cuántica y redes 5G.",
                "<strong>Ejemplos:</strong> Chips con IA integrada (Apple M1, Google TPU), auge de la realidad virtual y aumentada.",
                "<strong>Características:</strong> Hardware más especializado y eficiente energéticamente, con foco en la IA y la nube.",
                "<strong>Impacto:</strong> La tecnología redefine industrias enteras, desde la medicina hasta el entretenimiento."
            ]
        }
    ];

    return (
        <div className="page">
            <header className="topbar">
                <div>
                    <button className="hamb">☰</button>
                    <h1 className="brand title1">Más allá de la pantalla</h1>
                </div>
                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/Historia" className="active">Historia</Link>
                    <Link to="/Creadores">Creadores</Link>
                    <Link to="/Perifericos">Periféricos</Link>
                    <Link to="/Componentes">Componentes</Link>
                    <Link to="/Placa">Placa Madre</Link>
                    <Link to="/Juegos">Juegos</Link>
                </nav>
            </header>

            <main className="container">
                <h2 className="title">Historia completa del hardware</h2>
                <h4 className="lead">
                    Haz clic en cada década para leer un resumen amplio, su contexto, ejemplos y su impacto.
                </h4>

                <div className="timeline-grid">
                    <aside className="years">
                        {decadas.map(decada => (
                            <button
                                key={decada.year}
                                className={`year ${decadaActiva === decada.year ? "active" : ""}`}
                                onClick={() => setDecadaActiva(decada.year)}
                            >
                                {decada.year}s
                            </button>
                        ))}
                    </aside>

                    <section>
                        {!decadaActiva && (
                            <>
                                <h3>Seleccioná una década</h3>
                                <p>Aquí aparecerá la ficha completa con texto, datos y ejemplo.</p>
                            </>
                        )}

                        {decadas.map(decada => (
                            <div
                                key={decada.year}
                                className="ficha2"
                                style={{ display: decadaActiva === decada.year ? "flex" : "none" }}
                            >
                                <img src={decada.img} alt={decada.alt} />
                                <div>
                                    <h3>{decada.titulo}</h3>
                                    {decada.contenido.map((p, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </main>

            <footer>
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </div>
    );
}

export default Historia;
