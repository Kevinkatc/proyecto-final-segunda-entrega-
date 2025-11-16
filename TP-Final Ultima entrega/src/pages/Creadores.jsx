import { Link } from "react-router-dom"
function Creadores() {
    return (
        <div className="page">
            <header className="topbar">
                <div>
                    <button className="hamb">☰</button>
                    <h1 className="brand title1">Más allá de la pantalla</h1>
                </div>
                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/Historia">Historia</Link>
                    <Link to="/Creadores" className="active">Creadores</Link>
                    <Link to="/Perifericos">Perifericos</Link>
                    <Link to="/Componentes">Componentes</Link>
                    <Link to="/Placa">Placa Madre</Link>
                    <Link to="/Juegos">Juegos</Link>
                </nav>
            </header>
            <main className="container">
                <h2 className="title">Creadores y pioneros</h2>
                <h4 className="lead">Biografías y aportes de las personas que marcaron el hardware y la informática.</h4>

                <section className="grid creators-grid">

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/Charles_Babbage.webp" alt="Babbage" /></div>
                        <div>
                            <h3>Charles Babbage (1791-1871)</h3>
                            <p>Diseñó la máquina analítica: conceptos de unidad de cálculo y almacenamiento separadas.</p>
                            <details>
                                <summary>Leer más</summary>
                                <p>Sus diseños introdujeron ideas fundamentales: control de flujo, registro de datos y separación de unidades, que anticiparon la arquitectura moderna.</p>
                            </details>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/ada-lovelace-small-16_9.webp" alt="Ada" /></div>
                        <div>
                            <h3>Ada Lovelace (1815-1852)</h3>
                            <p>Considerada la primera programadora; analizó algoritmos para la máquina de Babbage.</p>
                            <details>
                                <summary>Leer más</summary>
                                <p>Entendió que las máquinas podían procesar símbolos más allá de números, y propuso anotaciones que incluían pasos algorítmicos.</p>
                            </details>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/alan-turing.webp" alt="Turing" /></div>
                        <div>
                            <h3>Alan Turing (1912-1954)</h3>
                            <p>Formalizó la computación y contribuyó a la criptoanálisis, estableciendo la base teórica de los ordenadores.</p>
                            <details>
                                <summary>Leer más</summary>
                                <p>La 'Máquina de Turing' es un modelo que define qué es computable y permitió el desarrollo de la ciencia informática.</p>
                            </details>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/steve-jobs.webp" alt="Jobs & Woz" /></div>
                        <div>
                            <h3>Steve Jobs & Steve Wozniak</h3>
                            <p>Popularizaron la microcomputadora personal; Wozniak diseñó hardware y Jobs lo llevó al mercado.</p>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/bill-gates.webp" alt="Gates" /></div>
                        <div>
                            <h3>Bill Gates</h3>
                            <p>Su impulso al software contribuyó a consolidar estándares que influyeron en el diseño de hardware comercial.</p>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/GordonMoore.webp" alt="Moore" /></div>
                        <div>
                            <h3>Gordon Moore</h3>
                            <p>Co-fundador de Intel y autor de la Ley de Moore, observación clave sobre la densidad de transistores.</p>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/john-von-neumann.webp" alt="von Neumann" /></div>
                        <div>
                            <h3>John von Neumann</h3>
                            <p>Propuso la arquitectura de computadora almacenada (programas en memoria), base de las computadoras modernas.</p>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/linus.webp" alt="Torvalds" /></div>
                        <div>
                            <h3>Linus Torvalds</h3>
                            <p>Creador del núcleo Linux, base de sistemas operativos de código abierto en todo el mundo.</p>
                            <details>
                                <summary>Leer más</summary>
                                <p>En 1991 lanzó el kernel Linux, que junto a la filosofía open-source impulsó servidores, dispositivos móviles (Android) y supercomputadoras.</p>
                            </details>
                        </div>
                    </article>

                    <article className="ficha">
                        <div className="ficha__img"><img src="/creadores/tim-bernet.webp" alt="Berners-Lee" /></div>
                        <div>
                            <h3>Tim Berners-Lee</h3>
                            <p>Inventor de la World Wide Web, revolucionó la forma de acceder y compartir información.</p>
                            <details>
                                <summary>Leer más</summary>
                                <p>En 1989 propuso un sistema de hipertexto que se convirtió en la WWW, facilitando la comunicación global y el nacimiento de Internet como lo conocemos.</p>
                            </details>
                        </div>
                    </article>

                </section>
            </main>

            <footer className="container footer">
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </div>
    )
}
export default Creadores