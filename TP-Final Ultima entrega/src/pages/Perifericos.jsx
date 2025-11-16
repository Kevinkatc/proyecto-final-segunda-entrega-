import { Link } from "react-router-dom"
import React, { useState } from "react"
function Perifericos() {

    const [openPanel, setOpenPanel] = useState(null);

    const togglePanel = (id) => {
        setOpenPanel(openPanel === id ? null : id);
    };

    return (
        <div className="page">
            <header className="topbar">
                <div>
                    <button className="hamb">☰</button>
                    <h1 className="brand title1">Más allá de la pantalla</h1>
                </div>
                <nav id="nav" className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/Historia">Historia</Link>
                    <Link to="/Creadores">Creadores</Link>
                    <Link to="/Perifericos" className="active">Perifericos</Link>
                    <Link to="/Componentes">Componentes</Link>
                    <Link to="/Placa">Placa Madre</Link>
                    <Link to="/Juegos">Juegos</Link>
                </nav>
            </header>

            <main className="container">
                <h2 className="title">Perifericos — definiciones, ejemplos y cuidados</h2>
                <h4 className="lead">Explora por categoría y copia tus imágenes al lado.</h4>
                <div className="accordions">

                    <button className="acc-btn" onClick={() => togglePanel("entrada")}> Hardware de entrada</button>
                    <div className="acc-panel" style={{ display: openPanel === "entrada" ? "block" : "none" }}>
                        <article className="ficha--comp">
                            <div>
                                <h3>Teclado</h3>
                                <p><strong>Definición:</strong> Dispositivo para introducir texto y comandos.</p>
                                <p><strong>Ejemplo:</strong> Teclado mecánico con switches.</p>
                                <p><strong>Cuidados:</strong> limpieza periódica y evitar líquidos.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/teclado.png" alt="teclado" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Mouse</h3>
                                <p><strong>Definición:</strong> Dispositivo apuntador que controla el cursor.</p>
                                <p><strong>Ejemplo:</strong> Mouse óptico 1600 DPI.</p>
                                <p><strong>Cuidados:</strong> usar en superficies planas y limpiar el sensor.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/mouse.png" alt="mouse" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Micrófono</h3>
                                <p><strong>Definición:</strong> Captura el sonido para digitalizarlo.</p>
                                <p><strong>Ejemplo:</strong> Micrófono USB cardioide.</p>
                                <p><strong>Cuidados:</strong> evitar golpes y proteger del polvo.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/microfono.png" alt="microfono" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Escáner</h3>
                                <p><strong>Definición:</strong> Digitaliza documentos e imágenes.</p>
                                <p><strong>Ejemplo:</strong> Escáner plano A4.</p>
                                <p><strong>Cuidados:</strong> mantener limpio el cristal y taparlo después de usar.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/escaner.png" alt="escaner" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Cámara web</h3>
                                <p><strong>Definición:</strong> Captura video e imágenes en tiempo real.</p>
                                <p><strong>Ejemplo:</strong> Webcam 1080p con micrófono integrado.</p>
                                <p><strong>Cuidados:</strong> evitar luz directa y mantener limpia la lente.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/webcam.png" alt="webcam" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Joystick</h3>
                                <p><strong>Definición:</strong> Dispositivo de control para videojuegos.</p>
                                <p><strong>Ejemplo:</strong> Joystick USB con vibración.</p>
                                <p><strong>Cuidados:</strong> no forzar los controles y guardar en lugar seguro.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/joystick.png" alt="joystick" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Pantalla táctil</h3>
                                <p><strong>Definición:</strong> Permite interactuar directamente con los dedos.</p>
                                <p><strong>Ejemplo:</strong> Panel multitouch de 10 puntos.</p>
                                <p><strong>Cuidados:</strong> usar protectores y limpiar con paño suave.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/pantalla_tactil.png" alt="pantalla táctil" /></div>
                        </article>
                    </div>

                    <button className="acc-btn" onClick={() => togglePanel("salida")}> Hardware de salida</button>
                    <div className="acc-panel" style={{ display: openPanel === "salida" ? "block" : "none" }}>
                        <article className="ficha--comp">
                            <div>
                                <h3>Monitor</h3>
                                <p><strong>Definición:</strong> Dispositivo de visualización.</p>
                                <p><strong>Ejemplo:</strong> Monitor IPS 24'' 1080p.</p>
                                <p><strong>Cuidados:</strong> limpieza con paño seco, protección contra sobrevoltaje.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/monitor.png" alt="monitor" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Parlantes</h3>
                                <p><strong>Definición:</strong> Dispositivo de salida de audio.</p>
                                <p><strong>Ejemplo:</strong> Sistema estéreo 2.1.</p>
                                <p><strong>Cuidados:</strong> evitar volumen excesivo y polvo.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/parlantes.png" alt="parlantes" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Auriculares</h3>
                                <p><strong>Definición:</strong> Emiten sonido de forma personal.</p>
                                <p><strong>Ejemplo:</strong> Auriculares Bluetooth con micrófono.</p>
                                <p><strong>Cuidados:</strong> no enrollar excesivamente el cable y limpiar almohadillas.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/auriculares.png" alt="auriculares" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Proyector</h3>
                                <p><strong>Definición:</strong> Proyecta imágenes y videos en superficies.</p>
                                <p><strong>Ejemplo:</strong> Proyector LED 3000 lúmenes.</p>
                                <p><strong>Cuidados:</strong> evitar polvo en la lente y usar en ambientes controlados.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/proyector.png" alt="proyector" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Impresora</h3>
                                <p><strong>Definición:</strong> Genera copias físicas de documentos digitales.</p>
                                <p><strong>Ejemplo:</strong> Impresora láser monocromática.</p>
                                <p><strong>Cuidados:</strong> usar cartuchos originales y evitar polvo interno.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/impresora.png" alt="impresora" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Plotter</h3>
                                <p><strong>Definición:</strong> Dispositivo para impresión de planos y gráficos grandes.</p>
                                <p><strong>Ejemplo:</strong> Plotter de corte y pluma.</p>
                                <p><strong>Cuidados:</strong> mantener cabezales limpios y usar papel adecuado.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/plotter.png" alt="plotter" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>Luces LED</h3>
                                <p><strong>Definición:</strong> Emisión de señales visuales o iluminación.</p>
                                <p><strong>Ejemplo:</strong> Luces RGB de notificación.</p>
                                <p><strong>Cuidados:</strong> no sobrecargar y usar controladores adecuados.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/leds.png" alt="luces LED" /></div>
                        </article>
                    </div>
                    <button className="acc-btn" onClick={() => togglePanel("almacenamiento")}> Almacenamiento</button>
                    <div className="acc-panel" style={{ display: openPanel === "almacenamiento" ? "block" : "none" }}>
                        <article className="ficha--comp">
                            <div>
                                <h3>HDD</h3>
                                <p><strong>Definición:</strong> Disco magnético mecánico.</p>
                                <p><strong>Ejemplo:</strong> 1TB 7200RPM.</p>
                                <p><strong>Cuidados:</strong> evitar golpes, desfragmentar ocasionalmente si es necesario.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/HDD.png" alt="hdd" /></div>
                        </article>

                        <article className="ficha--comp">
                            <div>
                                <h3>SSD</h3>
                                <p><strong>Definición:</strong> Unidad basada en memoria flash, más rápida.</p>
                                <p><strong>Ejemplo:</strong> NVMe M.2 500GB.</p>
                                <p><strong>Cuidados:</strong> mantener respaldos, actualizar firmware.</p>
                            </div>
                            <div className="img-slot"><img src="/periferico/SSD.png" alt="ssd" /></div>
                        </article>
                    </div>

                </div>
            </main>

            <footer className="container footer">
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </div>
    )
}
export default Perifericos