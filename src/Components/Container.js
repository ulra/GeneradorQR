import React from 'react';
import Contenido from './Contenido';
import Qr from './Qr';


//estilos
import '../style/contenedor.css'

const Container = () => {

    return (
        <div className='contenedor container'>
            
            <div className='container grif'>
                <div className='row'>
                    <div className='col-8'>
                        <Contenido/>
                    </div>
                    <div className='col-4'>
                        <Qr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
