import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { FaGithub, FaInstagram, FaLinkedin, FaReact } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><FaReact />svaldo Borges</h1>
        <nav className="App-nav">
          <Link className="App-link" to='/'>Home</Link>
          <Link className="App-link" to='/about'>About</Link>
          <Link className="App-link" to='/projects'>Projects</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/About" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Route component={ NotFound } />
      </Switch>
      <footer className="footer">
        <p className="footer-phrase">© 2021. All Rights Reserved.</p>
        <section className="section-logos">
          <a
            className="footer-logos"
            href="https://www.linkedin.com/in/osvaldo-borges-campos-neto-525b521b3/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          <FaLinkedin />
          </a>
          <a
            className="footer-logos"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaInstagram />
          </a>
          <a
            className="footer-logos"
            href="https://github.com/osvaldoBorgesCNeto"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaGithub />
          </a>
        </section>
      </footer>
    </div>
  );
}

export default App;
