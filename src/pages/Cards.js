import React from 'react';
import './Cards.scss';

export default function Cards() {
    return(
        <div id="cards">
            <div>
                <h1>Adopte un perro</h1>
                <h2>"Los perros no son toda tu vida, pero hacen tu vida completa"</h2>
                <p>Tres años, siete meses y una semana después del referéndum en el que el 51,9% de los británicos votó a favor de salir de la Unión Europea (UE), el Brexit se convirtió en un hecho consumado este viernes, 308 días más tarde de lo previsto. A las 11 de la noche de Londres (la medianoche en Bruselas, sede de la UE), el Reino Unido quedó automáticamente fuera del bloque político y económico al que se había incorporado en 1973.</p>
            </div>
            <div>
                <div>
                    <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="dog.png"/>
                    <span>Xabi</span>
                    <div>    
                        <button>Información</button>
                        <button>Adoptar</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.picsum.photos/id/1062/300/240.jpg" alt="dog.png"/>
                    <span>Pablo</span>
                    <div>    
                        <button>Información</button>
                        <button>Adoptar</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.picsum.photos/id/237/300/240.jpg" alt="dog.png"/>
                    <span>Marcos</span>
                    <div>    
                        <button>Información</button>
                        <button>Adoptar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}