import React, {useContext} from 'react';
import { Context } from '../context/Context';

const Estilo = () => {

    const {alto, cambiarAlto, ancho, cambiarAncho} = useContext(Context);

    const cambioAlto = (e) => {
        cambiarAlto(e.target.value)
    }

    const cambioAncho = (e) => {
        cambiarAncho(e.target.value)
    }

    return (
        <div>
            <label for='customRange3' className='form-label'>Alto</label>
            <p><strong>{alto}PX</strong></p>
            <input type='range' className='form-range' min='5' max='128' id='customRange3' value={alto} onChange={cambioAlto}/>

            <label for='customRange' className='form-label'>Ancho</label>
            <p><strong>{ancho}PX</strong></p>
            <input type='range' className='form-range' min='5' max='128' id='customRange' value={ancho} onChange={cambioAncho}/>
        
        </div>
    );
}

export default Estilo;
