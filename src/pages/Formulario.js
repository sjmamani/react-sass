import React from 'react';
import './Formulario.scss';

export default function Formulario() {
    return(
        <div id="formulario">
            <div>
                <h1>¿Tienes un perro para poner en adopción?</h1>
                <h2>Complete el formulario</h2>
                <p>Una vez enviado el formulario, uno de nuestros asistentes se comunicará con usted.</p>
            </div>
            <div>
                <div>
                    <label>Nombre</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Edad</label>
                    <select>
                        <option defaultValue>Seleccione edad del perro</option>
                        <option>0 - 2 años</option>
                        <option>3 - 7 años</option>
                        <option>+8 años</option>
                    </select>
                </div>
                <div>
                    <label>Colores</label>
                    <div>
                        <div>
                            <input type="checkbox" /><span>Negro</span>
                        </div>
                        <div>
                            <input type="checkbox" /><span>Marrón</span>
                        </div>
                        <div>
                            <input type="checkbox" /><span>Blanco</span>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Sexo</label>
                    <div>
                        <div>
                            <input type="radio" name="sexo" />
                            <span>Macho</span>
                        </div>
                        <div>
                            <input type="radio" name="sexo" />
                            <span>Hembra</span>
                        </div>
                    </div>
                </div>
                <textarea placeholder="Comentarios"></textarea>
                <button>Enviar</button>
            </div>
        </div>
    );
}