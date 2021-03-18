import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Pages.css';

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="main-text">
          <p>Hello, I`m Osvaldo Borges Campos Neto.</p>
          <p>I'm in training for full-stack developer.</p>
          <Link className="home-link" to="/projects">View my projects &#8680;</Link>
        </div>
      </div>
    );
  };
}

export default Home;
