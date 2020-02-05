import React from 'react';
import Cards from './pages/Cards';
import Formulario from './pages/Formulario';
import Galeria from './pages/Galeria';
import facebookLogo from './assets/iconos/facebook.png';
import twitterLogo from './assets/iconos/twitter.png';
import instagramLogo from './assets/iconos/instagram.png';
import './App.scss';

function App() {
  return (
    <div id="app">
      <nav>
        <ul>
          <li>
            <img src="https://btf.grupoassa.com/imgs/profile_default.png" alt="avatar.png" />
            <div>
              <span>Joaquin Mamani</span>
              <span>8791</span>
              <span>jmamani@grupoassa.com</span>
            </div>
          </li>
          <li><a href="#cards">Cards</a></li>
          <li><a href="#formulario">Formulario</a></li>
          <li><a href="#galeria">Galería</a></li>
        </ul>
      </nav>
      <main>
        <Cards />
        <Formulario />
        <Galeria />
        <footer>
          <div>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="logo.png" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="logo.png" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="logo.png" />
                </a>
              </li>
            </ul>
            <p>Copyright © 2020 Joaquin Mamani</p>
            <p><a href="http://www.grupoassa.com" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
