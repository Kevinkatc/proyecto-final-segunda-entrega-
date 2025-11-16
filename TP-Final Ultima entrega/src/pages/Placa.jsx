import { Link } from "react-router-dom"
function Placa() {
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
                    <Link to="/Componentes">Componentes</Link>
                    <Link to="/Placa" className="active">Placa Madre</Link>
                    <Link to="/Juegos">Juegos</Link>
                </nav>
            </header>
            <main className="container">
                <h2 className="title">Placa Madre — explicación detallada</h2>
                <h4 className="lead">Que es, ejemplo y cuidados.</h4>
                <section className="ficha-lista">
                    <article className="ficha--comp1">
                        <div>
                            <h3>Socket CPU</h3>
                            <p><strong>Qué es:</strong> Es el “asiento” donde se coloca el procesador, que es el cerebro de la
                                computadora. Cada procesador está diseñado para un tipo de socket específico (por ejemplo, Intel LGA1700 o
                                AMD AM4). Si el procesador y la placa madre no son compatibles en el socket, simplemente no
                                encajan.</p>
                            <p><strong>Consejo:</strong> antes de comprar un procesador o una placa madre, verificá siempre que el socket
                                sea el mismo. Esto evita gastar dinero en piezas que no funcionan juntas.</p>
                        </div>
                        <div className="img-slot1"><img src="placa/Socket.jpg" alt="socket" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Ranuras DIMM (RAM)</h3>
                            <p><strong>Qué es:</strong> Son los slots largos y delgados donde se instala la memoria RAM. La RAM es como la
                                “memoria de trabajo” de la PC: guarda temporalmente lo que el sistema y los programas usan en ese momento.
                                La velocidad y la cantidad de RAM influyen directamente en el rendimiento.</p>
                            <p><strong>Consejo:</strong> si tenés varias ranuras, instalá los módulos de RAM en pares (por ejemplo, 2x8 GB
                                en lugar de 1x16 GB). Así activás el doble canal, que mejora la velocidad de la memoria.</p>
                        </div>
                        <div className="img-slot1"><img src="placa/ranuras.jpg" alt="ranuras" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Chipset</h3>
                            <p><strong>Qué es:</strong> Es como el “coordinador de tráfico” de la placa madre. Su función es que todos los
                                componentes (procesador, RAM, discos, periféricos) puedan comunicarse de manera eficiente. Hay chipsets
                                básicos (para tareas de oficina) y otros avanzados (para gaming o trabajos pesados).</p>
                            <p><strong>Consejo:</strong> no siempre necesitás el chipset más caro. Si solo vas a estudiar o navegar,
                                alcanza con uno básico. Pero si querés jugar, editar videos o programar en serio, conviene invertir en un
                                chipset más completo.</p>
                        </div>
                        <div className="img-slot1"><img src="placa/Chipset.jpeg" alt="chipset" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>VRM (reguladores de voltaje)</h3>
                            <p><strong>Qué es:</strong> Son un conjunto de pequeños componentes electrónicos que “limpian” y regulan la
                                energía que llega al procesador y a la RAM. Sin ellos, la PC sería inestable o incluso podría quemarse el
                                procesador.</p>
                            <p><strong>Consejo:</strong> un buen VRM es clave para que la computadora dure más y funcione estable. Si
                                pensás usar procesadores potentes, juegos o programas exigentes, buscá placas madre con VRM de buena calidad
                                (suelen tener disipadores de calor encima).</p>
                        </div>
                        <div className="img-slot1"><img src="placa/VRM.jpg" alt="vrm" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Slots PCIe</h3>
                            <p><strong>Qué es:</strong> Son ranuras de expansión donde podés instalar tarjetas gráficas, de sonido, de red
                                o incluso discos SSD especiales. El más usado hoy es el PCIe x16, necesario para las tarjetas de video
                                modernas.</p>
                            <p><strong>Consejo:</strong> asegurate de que tu placa madre tenga la versión de PCIe adecuada (ejemplo: PCIe
                                4.0 o 5.0) si pensás usar una tarjeta gráfica nueva, para aprovechar todo su rendimiento.</p>
                        </div>
                        <div className="img-slot1"><img src="placa/PCI.jpg" alt="PCIe" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Conectores SATA / M.2</h3>
                            <p><strong>Qué es:</strong></p>
                            <p>-SATA: son conectores para discos duros (HDD) o SSDs más tradicionales. <br />
                                -M.2: son ranuras modernas donde se colocan discos SSD ultrarrápidos, mucho más chicos y rápidos que los
                                SATA.</p>
                            <p><strong>Consejo:</strong> instalá el sistema operativo en un disco SSD M.2 si tu placa lo permite. La
                                diferencia de velocidad al encender la PC o abrir programas es enorme.</p>
                        </div>
                        <div className="img-slot1"><img src="placa/SATA.png" alt="m2" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Batería CMOS</h3>
                            <p><strong>Qué es:</strong> Es una pequeña pila circular (similar a la de un reloj) que guarda la
                                configuración básica de la PC: fecha, hora y ajustes de la BIOS. Si se gasta, la computadora puede “olvidar”
                                estos datos cada vez que se apaga.</p>
                            <p><strong>Consejo:</strong> si tu computadora arranca siempre con la fecha mal o pide reconfiguración, cambiá
                                esta pila. Cuesta muy poco y se reemplaza fácilmente.</p>
                        </div>
                        <div className="img-slot1"><img src="placa/Bateria.jpeg" alt="cmos" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>Panel I/O</h3>
                            <p><strong>Qué es:</strong> Es la parte trasera de la placa madre donde se encuentran los puertos de conexión:
                                USB, HDMI, audio, red, etc. Básicamente, es lo que usás para conectar todos tus periféricos.</p>
                            <p><strong>Consejo:</strong> fijate cuántos dispositivos usás al mismo tiempo (teclado, mouse, pendrive,
                                auriculares, impresora, etc.) y asegurate de que tu placa tenga suficientes puertos USB y las salidas que
                                necesitás.</p>
                        </div>
                        <div className="img-slot1"><img src="placa/Panel - IO.png" alt="io" /></div>
                    </article>
                </section>
                <h2 className="title">Diferencias: placa de PC vs placa de notebook</h2>
                <h4 className="lead">Tamaño, expansion, reparacion/actualizacion, refrigeracion, durabilidad y ejemplo.</h4>
                <section className="ficha-lista">
                    <article className="ficha--comp1">
                        <div>
                            <h3>De PC</h3>
                            <ul>
                                <li>Tamaño: más grande, permite mejor distribución de componentes.</li>
                                <li>Expansión: tiene más ranuras PCIe, más slots DIMM para RAM y varios conectores SATA/M.2.</li>
                                <li>Reparación/actualización: es más fácil reemplazar piezas (CPU, RAM, GPU, fuente, etc.).</li>
                                <li>Refrigeración: al ser más espaciosa, permite disipadores y ventiladores grandes.</li>
                                <li>Durabilidad: suelen tener mejores VRM y refrigeración, lo que alarga su vida útil</li>
                                <li>Ejemplo práctico: si querés mejorar tu PC, podés cambiar el procesador, agregar RAM o poner una tarjeta
                                    gráfica nueva sin demasiada complicación.</li>
                            </ul>
                        </div>
                        <div className="img-slot1"><img src="placa/Placa de PC.jpg" alt="Placa Madre de PC" /></div>
                    </article>
                    <article className="ficha--comp1">
                        <div>
                            <h3>De Notebook</h3>
                            <ul>
                                <li>Tamaño: mucho más compacta, diseñada para ocupar el menor espacio posible.</li>
                                <li>Expansión: muy limitada. Normalmente solo permite ampliar RAM (si no viene soldada) y agregar un SSD o
                                    disco.</li>
                                <li>Reparación/actualización: la mayoría de los componentes (CPU, GPU e incluso RAM en algunos modelos)
                                    vienen
                                    soldados, lo que hace difícil o imposible reemplazarlos.</li>
                                <li>Refrigeración: tiene un sistema pequeño, lo que limita la potencia del hardware.</li>
                                <li>Durabilidad: al tener poco espacio, suele desgastarse más rápido que una PC de escritorio.</li>
                                <li>Ejemplo práctico: si tu notebook se queda corta de potencia, lo máximo que probablemente puedas hacer es
                                    cambiar el disco a un SSD y ampliar la RAM (si no está soldada).</li>
                            </ul>
                        </div>
                        <div className="img-slot1"><img src="placa/Placa de Notebook.jpg" alt="Placa Madre de Notebook" /></div>
                    </article>
                </section>
            </main>
            <footer className="container footer">
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </div>
    )
}
export default Placa