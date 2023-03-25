import React, {useContext} from 'react';
import { Context } from '../context/Context';

const InputTexto = () => {

    const {cambiarValor} = useContext(Context);

    const cambio = (e) => {
        cambiarValor(e.target.value)
    }

    return (

        <div className='container'>
        <div className='row'>
            <div className='col-8 mb-2'>
            <form>
            <label htmlFor="text-input">Texto:</label>
            <input type='text' id='text-input' className='form-control' name='url-input' style={{height: '60px'}} onChange={cambio} />
            </form>
            </div>
        </div>
    </div>
    );
}

export default InputTexto;
