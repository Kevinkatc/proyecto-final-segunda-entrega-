import { Link } from "react-router-dom"
import React, { useEffect } from "react";
function Inicio() {

    useEffect(() => {
        // Lista de curiosidades
        const curiosidades = [
            "El primer mouse fue de madera en 1964.",
            "La primera impresora láser fue creada en 1969 por Xerox.",
            "El microprocesador Intel 4004 tenía solo 2.300 transistores.",
            "Las primeras computadoras ocupaban habitaciones enteras.",
            "La memoria RAM es más rápida que cualquier disco duro.",
            "Un SSD puede ser hasta 10 veces más rápido que un HDD.",
            "El término 'bug' viene de un insecto que se metió en un ordenador.",
            "Los discos duros modernos pueden superar los 20 TB.",
            "Los teclados QWERTY fueron diseñados para evitar atascos mecánicos.",
            "Las primeras memorias portátiles apenas tenían unos KB.",
            "Un superordenador moderno hace billones de cálculos por segundo.",
            "El USB se creó en 1996 y aún lo usamos.",
            "La primera cámara digital pesaba más de 3 kg.",
            "Los monitores CRT gastaban el doble de energía que los LCD.",
            "Las laptops modernas pesan menos que las tablets antiguas.",
            "Los procesadores actuales tienen miles de millones de transistores.",
            "Internet nació como un proyecto militar (ARPANET).",
            "El disquete de 3.5 pulgadas guardaba solo 1.44 MB.",
            "La Ley de Moore se cumple desde 1965.",
            "Los casetes también se usaban para almacenar programas de computadora."
        ];

        // Lista de consejos
        const consejos = [
            "Mantén tu PC libre de polvo.",
            "Usa estabilizadores de corriente para evitar daños.",
            "No bloquees las salidas de ventilación.",
            "Limpia teclado y mouse regularmente.",
            "Cambia la pasta térmica de la CPU cada cierto tiempo.",
            "Evita exponer la computadora a la humedad.",
            "No muevas la PC cuando está encendida."
        ];

        // Mostrar 3 curiosidades aleatorias
        function mostrarCuriosidades() {
            const lista = document.getElementById("curiosidades-list");
            if (!lista) return;
            lista.innerHTML = "";
            const usadas = [];
            while (usadas.length < 3) {
                const random = Math.floor(Math.random() * curiosidades.length);
                if (!usadas.includes(random)) {
                    usadas.push(random);
                    const li = document.createElement("li");
                    li.textContent = curiosidades[random];
                    lista.appendChild(li);
                }
            }
        }

        // Mostrar un consejo aleatorio
        function mostrarConsejo() {
            const lugar = document.getElementById("consejo");
            if (lugar) {
                lugar.textContent = consejos[Math.floor(Math.random() * consejos.length)];
            }
        }

        // Ejecutar al montar el componente
        mostrarCuriosidades();
        mostrarConsejo();

    }, []);

    return (
        <div className="page">
            <header className="topbar">
                <div>
                    <button className="hamb">☰</button>
                    <h1 className="brand title1">Más allá de la pantalla</h1>
                </div>
                <nav className="nav">
                    <Link to="/" className="active">Inicio</Link>
                    <Link to="/Historia">Historia</Link>
                    <Link to="/Creadores">Creadores</Link>
                    <Link to="/Perifericos">Perifericos</Link>
                    <Link to="/Componentes">Componentes</Link>
                    <Link to="/Placa">Placa Madre</Link>
                    <Link to="/Juegos">Juegos</Link>
                </nav>
            </header>
            <main className="container hero">
                <section className="hero-banner">
                    <img src="/inicio/hero.jpeg" className="hero-banner-img" alt="Portada" />
                    <div className="hero-overlay">
                        <p className="hero-lead">
                            Tu guía completa y didáctica del hardware: historia, creadores, componentes, cuidados y juegos
                            interactivos. Contenido extenso pensado para estudiantes.
                        </p>
                    </div>
                </section>

                <section className="hero-bottom">
                    <div className="hero-content">
                        <h2>¿Qué es el hardware?</h2>
                        <p>El hardware es la parte física de un sistema informático: piezas, circuitos y dispositivos que permiten
                            ejecutar software y procesar información. Incluye desde chips y sensores hasta cajas, cables y periféricos.
                        </p>
                        
                        <h2>Ejemplo sencillo</h2>
                        <p>Cuando escribís en un procesador de textos: el teclado (hardware de entrada) envía la letra; la CPU (hardware
                            de procesamiento) interpreta la instrucción; la RAM (hardware volátil) guarda temporalmente los datos; y el
                            monitor (hardware de salida) muestra la letra en pantalla.</p>
                        
                        <h2>Recursos rápidos</h2>
                        <ul>
                            <li>Cómo cuidar tu equipo: evitar polvo, sobrecalentamiento, usar UPS para proteger de subidas de tensión.
                            </li>
                            <li>¿PC o notebook? Depende de reparabilidad, potencia y movilidad.</li>
                            <li>¿SSD o HDD? SSD = velocidad; HDD = almacenamiento económico.</li>
                        </ul>

                        <h2>Contenido destacado</h2>
                        <ul>
                            <li>Documentación extensa por secciones: historia, creadores, componentes y placa madre.</li>
                            <li>Juegos interactivos variados con diferentes mecánicas.</li>
                        </ul>
                    </div>

                    <aside className="panel panel-consejo">
                        <h3>Curiosidades del día</h3>
                        <ul id="curiosidades-list"></ul>
                        
                        <h3>Consejo rápido</h3>
                        <p id="consejo"></p>
                    </aside>
                </section>
            </main>

            <footer className="footer">
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </div>
    )
}
export default Inicio