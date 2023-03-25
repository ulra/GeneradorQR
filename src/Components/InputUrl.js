import React, {useContext} from 'react';
import { Context } from '../context/Context';

const InputUrl = () => {

    const {cambiarValor} = useContext(Context);

    const cambio = (e) => {
        cambiarValor(e.target.value)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8 mb-2'>
                    <form>
                    <label htmlFor="urñ-input">URL</label>
                    <input type='text' id='url-input' className='form-control' name='url-input' pattern='https?://.+' onChange={cambio} />
                    </form>
                </div>
            </div>
        </div>

    );
}

export default InputUrl;
