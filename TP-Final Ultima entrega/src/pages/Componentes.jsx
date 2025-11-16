import { Link } from "react-router-dom"
function Componentes() {
    return (
        <div className="page">
            <header className="topbar">
                <div><button className="hamb">☰</button>
                    <h1 className="brand title1">Más allá de la pantalla</h1>
                </div>
                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/Historia">Historia</Link>
                    <Link to="/Creadores">Creadores</Link>
                    <Link to="/Perifericos">Perifericos</Link>
                    <Link to="/Componentes" className="active">Componentes</Link>
                    <Link to="/Placa">Placa Madre</Link>
                    <Link to="/Juegos">Juegos</Link>
                </nav>
            </header>
            <main className="container">
                <h2 className="title">Componentes — definiciones, tipos y cuidados</h2>
                <h4 className="lead">Todo lo que necesitas saber sobre los elementos esenciales y su mantenimiento</h4>
                <section className="ficha-lista">
                    <article className="ficha--comp1">
                        <div>
                            <h3>Procesador (CPU)</h3>
                            <p><strong>Definición:</strong> Es el cerebro de la computadora, encargado de ejecutar instrucciones y
                                procesar datos.</p>
                            <p><strong>Funcion:</strong> Ejecuta programas, realiza cálculos complejos y coordina el funcionamiento de los
                                demás componentes.</p>
                            <p><strong>Tipos:</strong> Intel (Core i3, i5, i7, i9), AMD (Ryzen 3, 5, 7, 9).</p>
                            <p><strong>Cuidados:</strong> Mantenerlo fresco con disipador y ventilador adecuados; aplicar correctamente la
                                pasta térmica; evitar sobrecargar la CPU con programas pesados sin ventilación suficiente.</p>
                        </div>
                        <div className="img-slot1">
                            <img src="componente/procesador.png" alt="procesador" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Placa Madre (Motherboard)</h3>
                            <p><strong>Definición:</strong> Tarjeta principal donde se conectan todos los componentes de la PC.</p>
                            <p><strong>Funcion:</strong> Facilita la comunicación entre CPU, memoria, almacenamiento y tarjetas de
                                expansión; distribuye energía y datos.</p>
                            <p><strong>Cuidados:</strong> Evitar golpes y descargas eléctricas; limpiar el polvo; no doblar los conectores
                                al instalar componentes.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/placa_madre.png" alt="placa madre" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Memorias RAM</h3>
                            <p><strong>Definición:</strong> Memoria de acceso rápido utilizada temporalmente por la computadora para
                                ejecutar programas.</p>
                            <p><strong>Funcion:</strong> Almacena información de forma temporal para que el procesador pueda acceder
                                rápidamente; influye directamente en la velocidad de la PC.</p>
                            <p><strong>Tipos:</strong> DDR3, DDR4, DDR5.</p>
                            <p><strong>Cuidados:</strong> Manipular con cuidado, evitando tocar los contactos metálicos; instalar
                                correctamente según la placa madre; mantener libre de polvo.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/RAM.png" alt="Memoria RAM" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Disco Duro</h3>
                            <p><strong>Definición:</strong> Dispositivo de almacenamiento permanente de datos.</p>
                            <p><strong>Funcion:</strong> Guarda el sistema operativo, programas y archivos del usuario. Los SSD son más
                                rápidos y resistentes que los HDD tradicionales.</p>
                            <p><strong>Tipos:</strong> HDD (magnético), SSD (estado sólido).</p>
                            <p><strong>Cuidados:</strong> Evitar golpes (sobre todo HDD); hacer respaldos frecuentes; no llenar al 100%
                                para mantener rendimiento.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/disco_duro.png" alt="HDD y SSD" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Tarjeta Grafica (GPU)</h3>
                            <p><strong>Definición:</strong> Componente que procesa información visual y genera imágenes para el monitor.
                            </p>
                            <p><strong>Funcion:</strong> Mejora el rendimiento en videojuegos, diseño gráfico, edición de video y tareas
                                que requieren procesamiento paralelo.</p>
                            <p><strong>Tipos:</strong> Integrada (dentro de la CPU) o dedicada (tarjeta independiente).</p>
                            <p><strong>Cuidados:</strong> Mantener ventilada; limpiar polvo regularmente; no sobrecargar con temperaturas
                                extremas.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/GPU.png" alt="GPU" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Fuente de alimentacion (PSU)</h3>
                            <p><strong>Definición:</strong> Suministra electricidad a todos los componentes de la PC.</p>
                            <p><strong>Funcion:</strong> Convierte la corriente alterna de la red eléctrica en corriente continua que la
                                PC puede usar; regula la tensión para proteger los componentes.</p>
                            <p><strong>Cuidados:</strong> No sobrecargar; mantener ventilada; usar estabilizador o UPS para proteger
                                contra picos de tensión.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/fuente.png" alt="Fuente de alimentacion" />
                        </div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Disipador</h3>
                            <p><strong>Definición:</strong> Componente metálico que absorbe y dispersa
                                el calor de la CPU o GPU.</p>
                            <p><strong>Funcion:</strong> Transferir el calor desde el procesador hacia el aire circundante para mantener
                                temperaturas seguras.</p>
                            <p><strong>Tipos:</strong> Pasivos (sin ventilador) y con aletas de diferentes diseños para maximizar la
                                disipación.</p>
                            <p><strong>Cuidados:</strong> Mantener limpio de polvo; revisar que no esté suelto; reemplazar pasta térmica
                                al instalarlo.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/disipador.png" alt="Disipador" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Cooler (Ventilador)</h3>
                            <p><strong>Definición:</strong> Ventilador que se monta sobre el disipador o directamente en la carcasa para
                                mover aire y enfriar componentes.</p>
                            <p><strong>Funcion:</strong> Acelerar la expulsión del calor absorbido por el disipador, evitando
                                sobrecalentamiento.</p>
                            <p><strong>Tipos:</strong> Ventiladores de CPU, GPU, y de gabinete; refrigeración líquida con bomba y radiador
                                (water cooling).</p>
                            <p><strong>Cuidados:</strong> Limpiar polvo de las aspas y rejillas; asegurarse que gire libremente;
                                reemplazar si hace ruido excesivo o falla.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/cooler.png" alt="Cooler" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Gabinete</h3>
                            <p><strong>Definición:</strong> Estructura donde se montan todos los componentes internos de la PC.</p>
                            <p><strong>Funcion:</strong> Protege los componentes, organiza el espacio interno y facilita la circulación de
                                aire para refrigeración.</p>
                            <p><strong>Tipos:</strong> Torre (ATX, Micro-ATX), compacto, mini.</p>
                            <p><strong>Cuidados:</strong> Mantener limpio de polvo; organizar los cables para no obstruir el flujo de
                                aire; asegurar una buena ventilación.</p>
                        </div>
                        <div className="img-slot1"><img src="componente/gabinete.png" alt="Gabinete" /></div>
                    </article>
                </section>
            </main>
            <footer className="container footer">
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </div>
    )
}
export default Componentes