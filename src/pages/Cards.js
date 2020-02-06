import React from 'react';
import './Cards.scss';

export default function Cards() {
    return(
        <div id="cards">
            <div>
                <h1>Adopte un perro</h1>
                <h2>"Los perros no son toda tu vida, pero hacen tu vida completa"</h2>
                <p>Adoptar es un acto de amor y de responsabilidad, por eso es necesario estar completamente seguros de que estamos capacitados y listos para tener un perro. Un animal de compañía dependerá toda su vida de nosotros. Recordá que un perro puede vivir entre 15 y 20 años y estás asumiendo un compromiso serio por todo ese tiempo.</p>
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