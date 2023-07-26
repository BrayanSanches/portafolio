import React, { useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';

function Inicio() {
  return     	<section className="home" id="home">
  <div className="home-text">
    <div className="slide">
      <span className="one">Hola</span>
      <span className="two">Soy</span>
    </div>
    <h1>Brayan Luis</h1>
    <h3>Sanchez <span>Quispe</span></h3>
    <p>Estudiante de ingenieria de sistemas <br/> en desarrollo Frontend</p>
    <div className="button">
      <a href="https://github.com/BrayanSanches" className="btn" target="_blank">Git Hub</a>
    </div>
  </div>
</section>;
}
  
function Acerca() {
  return 	<section className="about" id="about">
  <div className="about-img">
    <img src="/ab.png"/>
  </div>

  <div className="about-text">
    <h2>Acerca de <span>MI</span></h2>
    <p> <br/> Hola, me llamo Brayan Luis y estoy encantado de poder compartir contigo un poco más sobre mí. Actualmente, me encuentro cursando el noveno semestre de la facultad de ingeniería de sistemas en la prestigiosa Universidad Nacional del Centro del Perú. Desde que ingresé a esta carrera, he desarrollado una pasión innegable por la tecnología y su aplicación en la resolución de problemas complejos.
      </p>
      
  </div>
</section>;
}

function Estudios() {
  return <section className="services" id="estudios">
	<div className="main-text">
		<h2><span>Mis </span>Estudios</h2>
	</div>
	<div className="services-content">
		<div className="box">
			<div className="s-icons">
				<i className='bx bxl-html5'></i>
			</div>
			<h3>HTML</h3>
			<p>HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear y estructurar páginas web. Permite definir la estructura y contenido de una página mediante etiquetas y elementos, y se utiliza en conjunto con CSS y JavaScript para diseñar y hacer que las páginas sean interactivas.</p>
			<a href="https://developer.mozilla.org/es/docs/Web/HTML" className="btn" target="_blank">Leer Mas</a>
		</div>

		<div className="box">
			<div className="s-icons">
				<i className='bx bxl-css3' ></i>
			</div>
			<h3>CSS</h3>
			<p>
				CSS (Cascading Style Sheets) es un lenguaje de diseño utilizado para controlar la presentación y apariencia de las páginas web. Permite aplicar estilos, como colores, fuentes, tamaños y diseños, a los elementos HTML para lograr un aspecto visual atractivo y coherente.</p>
			<a href="https://developer.mozilla.org/es/docs/Web/CSS" className="btn" target="_blank">Leer Mas</a>
		</div>

		<div className="box">
			<div className="s-icons">
				<i className='bx bxl-javascript' ></i>
			</div>
			<h3>JavaScript</h3>
			<p>JavaScript es un lenguaje de programación orientado a objetos utilizado en el desarrollo web para agregar interactividad y funcionalidad a las páginas HTML. Permite manipular el DOM, gestionar eventos, realizar cálculos y comunicarse con servidores, creando aplicaciones web dinámicas y potentes.</p>
			<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="btn" target="_blank">Leer Mas</a>
		</div>

		<div className="box">
			<div className="s-icons">
				<i className='bx bx-edit-alt'></i>
			</div>
			<h3>Svelte</h3>
			<p>React es una biblioteca de JavaScript que permite construir interfaces de usuario interactivas y reactivas de manera eficiente y escalable utilizando componentes reutilizables y un enfoque declarativo.</p>
			<a href="https://svelte.dev/docs" className="btn" target="_blank">Leer Mas</a>
		</div>

		<div className="box">
			<div className="s-icons">
				<i className='bx bxl-react' ></i>
			</div>
			<h3>React</h3>
			<p>React es una biblioteca de JavaScript que permite construir interfaces de usuario interactivas y reactivas de manera eficiente y escalable utilizando componentes reutilizables y un enfoque declarativo.</p>
			<a href="https://legacy.reactjs.org/docs/getting-started.html" className="btn" target="_blank">Leer Mas</a>
		</div>

		<div className="box">
			<div className="s-icons">
				<i className='bx bxl-github'></i>
			</div>
			<h3>GitHub</h3>
			<p>GitHub es una plataforma de desarrollo colaborativa basada en la nube que permite a los desarrolladores alojar, gestionar y compartir proyectos de software. </p>
			<a href="https://docs.github.com/es" className="btn" target="_blank">Leer Mas</a>
		</div>
	</div>

</section>;
}

function Portafolio() {
  return <section className="portfolio" id="portfolio">
	<div className="main-text">
		<h2><span>Mis </span>Proyectos Academicos</h2>
	</div>
	<div className="portfolio-content">
		<div className="row">
			<img src="/project1.png" />
			<div className="layer">
				<h5>Pagina Demo</h5>
				<p>Demo de una pagina para una empresa donde evidencie los servicios que ofrece</p>
				<a href="https://gaming-2218.github.io/blog_demo/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>
		<div className="row">
			<img src="/project2.png" />
			<div className="layer">
				<h5>Animaciones</h5>
				<p>Animacion basica de una esfera con css y JavaScript</p>
				<a href="https://brayansanches.github.io/tareas/ball/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>
		<div className="row">
			<img src="/project3.png" />
			<div className="layer">
				<h5>JSON</h5>
				<p>Extraccion de datos de un JSON mediante fetch y map </p>
				<a href="https://brayansanches.github.io/tareas/p-json/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>

	</div>
	<div className="main-text">
		<h2><span> <br/> Mis </span>Proyectos Personales</h2>
	</div>
	<div className="portfolio-content">
		
		<div className="row">
			<img src="/p4.png" />
			<div className="layer">
				<h5>Aplicacion BanckTrax</h5>
				<p>Aplicacion web de gestion de creditos </p>
				<a href="https://brayansanches.github.io/tareas/p-json/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>
	</div>
</section>;
}

function Final() {
  return <footer>&copy; {new Date().getFullYear()} Mi Portafolio</footer>;
}

function App() {
  const [esNavAbierto, setEsNavAbierto] = useState(false);

  const alternarNav = () => {
    setEsNavAbierto(!esNavAbierto);
  };

  return (
    <Router>
      <header>
        <Link to="/" className="logo">Porta<span>foli</span>o</Link>
        <ul className={`navlist ${esNavAbierto ? 'open' : ''}`}>
          <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
          <li><NavLink to="/acerca" activeclassname="active">Acerca de mi</NavLink></li>
          <li><NavLink to="/estudios" activeclassname="active">Estudios</NavLink></li>
          <li><NavLink to="/portafolio" activeclassname="active">Proyectos</NavLink></li>
        </ul>
        <div className="bx bx-menu" id="menu-icon" onClick={alternarNav}></div>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>

      <Final />
    </Router>
  );
}

export default App;
