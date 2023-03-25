import React, {useContext} from 'react';
import { Context } from '../context/Context';

const Imagen = () => {

    const {imagen, cambiarImagen} = useContext(Context);

    return (
        <form>
            <div className='mb-3'>
                <label for='basic-url' className='form-label'>Inserta la Url de tu imagen</label>
                <div className='input-group'>
                    <input type='text' className='form-control' id='basic-url' aria-describedby='basic-addon3' value={imagen} onChange={cambiarImagen} />
                </div>
            </div>
        </form>
    );
}

export default Imagen;
