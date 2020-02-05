import React from 'react';
import './Formulario.scss';

export default function Formulario() {
    return(
        <div id="formulario">
            <h1>Formulario</h1>
            <h2>Subtitle formulario</h2>
                <p>Tres años, siete meses y una semana después del referéndum en el que el 51,9% de los británicos votó a favor de salir de la Unión Europea (UE), el Brexit se convirtió en un hecho consumado este viernes, 308 días más tarde de lo previsto. A las 11 de la noche de Londres (la medianoche en Bruselas, sede de la UE), el Reino Unido quedó automáticamente fuera del bloque político y económico al que se había incorporado en 1973.</p>
            <div>
                <div>
                    <label>Nombre</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Sexo</label>
                    <select>
                        <option defaultValue>Seleccione su sexo</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                    </select>
                </div>
                <div>
                    <div>
                        <input type="checkbox" /><label>Perro</label>
                    </div>
                    <div>
                        <input type="checkbox" /><label>Gato</label>
                    </div>
                    <div>
                        <input type="checkbox" /><label>Hámster</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" name="sexo" />
                        <label>Masculino</label>
                    </div>
                    <div>
                        <input type="radio" name="sexo" />
                        <label>Femenino</label>
                    </div>
                </div>
                <textarea placeholder="Comentarios"></textarea>
                <button>Enviar</button>
            </div>
        </div>
    );
}