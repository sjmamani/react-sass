import React from 'react';
import Cards from './pages/Cards';
import Formulario from './pages/Formulario';
import Galeria from './pages/Galeria';
import './App.scss';

function App() {
  return (
    <div id="app">
      <nav>
        <ul>
          <li><img src="https://btf.grupoassa.com/imgs/profile_default.png" alt="avatar.png" /></li>
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
              <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
            </ul>
            <p>Copyright © 2020 Joaquin Mamani</p>
            <p><a href="http://www.grupoassa.com" target="_blank">Términos y Condiciones</a></p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
