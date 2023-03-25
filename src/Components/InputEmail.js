import React, {useContext} from 'react';
import { Context } from '../context/Context';

const InputEmail = () => {

    const {cambiarValor} = useContext(Context);

    const cambio = (e) => {
        cambiarValor(e.target.value)
    }

    return (

        <div className='container'>
        <div className='row'>
            <div className='col-8 mb-2'>
            <form>
            <label htmlFor="email-input">Email:</label>
            <input type='email' className='form-control' name='email-input' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id='email-input' onChange={cambio}/>
            </form>
            </div>
        </div>
    </div>

    );
}

export default InputEmail;
