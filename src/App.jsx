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
		<h2><span>Mis </span>Conocimientos</h2>
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
		<h2><span>Mis </span>Estudios</h2>
	</div>
	<div className="portfolio-content">
		
		<div className="row">
			<img src="/vs.png" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 1</h4>
				<h3 style={{marginTop:'10px'}}>Herramienta de desarrollo</h3>
				<p>Breve introduccion a la IDE Visual Studio Code y a otras herramientas de desarrollo.</p>

			</div>
		</div>
		<div className="row">
			<img src="/htmlcss.png" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 2</h4>
				<h3 style={{marginTop:'10px'}}>Lenguaje Marcado de Hipertexto y Hojas de Estilos</h3>
				<p>Se hizo una introduccion a HTML y CSS </p>

			</div>
		</div>
		<div className="row">
			<img src="/js.jpg" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 3</h4>
				<h3 style={{marginTop:'10px'}}>Programación Front-End Javascript.</h3>
				<p>Se realizo pequeñas paginas web utilizando javascript</p>

			</div>
		</div>
		<div className="row">
			<img src="/js.jpg" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 4</h4>
				<h3 style={{marginTop:'10px'}}>Manejo del DOM con Javascript.</h3>
				<p>Se realizo animaciones en javascript utilizando metodos y propiedades</p>

			</div>
		</div>
		<div className="row">
			<img src="/project1.png" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 5</h4>
				<h3 style={{marginTop:'10px'}}>Pagina Demo</h3>
				<p>Demo de una pagina para una empresa donde evidencie los servicios que ofrece</p>
				<a href="https://gaming-2218.github.io/blog_demo/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>
		<div className="row">
			<img src="/project2.png" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 6</h4>
				<h3 style={{marginTop:'10px'}}>Animaciones</h3>
				<p>Animacion basica de una esfera con css y JavaScript</p>
				<a href="https://brayansanches.github.io/tareas/ball/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>
		<div className="row">
			<img src="/project3.png" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 7</h4>
				<h3 style={{marginTop:'10px'}}>JSON</h3>
				<p>Extraccion de datos de un JSON mediante fetch y map </p>
				<a href="https://brayansanches.github.io/tareas/p-json/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>

		<div className="row">
			<img src="/react.jpg" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 8</h4>
				<h3 style={{marginTop:'10px'}}>Desarrollo FrontEnd con React.</h3>
				<p>Se realizo una introduccion a react y a sus diferentes librerias</p>

			</div>
		</div>
		<div className="row">
			<img src="/react.jpg" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 9</h4>
				<h3 style={{marginTop:'10px'}}>Eventos, Condicionales y Bucles con React.</h3>
				<p>Se realizaron pequeños proyectos donde se utilizaron Eventos,Formularios,Bucles,Etc.</p>

			</div>
		</div>
		<div className="row">
			<img src="/react.jpg" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 10</h4>
				<h3 style={{marginTop:'10px'}}>Routing & consume API.</h3>
				<p>Se realizaron una introduccios a las API realizando peticiones a Jsons con fetch.</p>

			</div>
		</div>
		<div className="row">
			<img src="/react.jpg" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 11</h4>
				<h3 style={{marginTop:'10px'}}>Uso de Hooks.</h3>
				<p>Se realizaron pequeñas aplicaciones utilizando: UseState, UseEffect, UseContext,
 UseRef, UseReducer, UseCallback, useMemo y Hooks Personalizados.</p>

			</div>
		</div>
		<div className="row">
			<img src="/next.jpg" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 12</h4>
				<h3 style={{marginTop:'10px'}}>Next JS.</h3>
				<p>Se realizo una introduccion a Next js viendo como se realiza la creación del proyecto, routing en Next, estilos y formularios.</p>

			</div>
		</div>
		<div className="row">
			<img src="/spring.png" />
			<div className="layer">
			<h4 style={{marginTop:'10px'}}>Semana 13</h4>
				<h3 style={{marginTop:'10px'}}>API RESTFUL con SPRINT BOOT.</h3>
				<p>Se realizo una introduccion sobre API RESTFUL utilizando java y springboot.</p>
		
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
				<h3 style={{marginTop:'10px'}}>Aplicacion BanckTrax</h3>
				<p>Aplicacion web de gestion de creditos </p>
				<a href="https://brayansanches.github.io/tareas/p-json/" target="_blank"> <i className='bx bx-link-external'></i></a>
			</div>
		</div>
	</div>
</section>;
}

function Final() {
  return <footer style={{textAlign: 'center'}}>&copy; {new Date().getFullYear()} Mi Portafolio</footer>;
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
          <li><NavLink to="/conocimientos" activeclassname="active">Conocimientos</NavLink></li>
          <li><NavLink to="/portafolio" activeclassname="active">Estudios</NavLink></li>
        </ul>
        <div className="bx bx-menu" id="menu-icon" onClick={alternarNav}></div>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/conocimientos" element={<Estudios />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>

      <Final />
    </Router>
  );
}

export default App;
