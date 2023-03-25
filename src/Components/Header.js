import React, {useContext} from 'react';
import { Context } from '../context/Context';

//Logos
import LogoDark from '../Assets/logoDark.png'
import LogoLight from '../Assets/logoLight.png'

//Estilo
import '../style/header.css'

const Header = () => {

    const {tema, cambio} = useContext(Context);

    const headerStyle = {
        borderBottom: `3px solid ${'#eee'}`
    }

    const iconStyle = {
        color: tema === 'claro' ? '#333' : '#fff'
    }

    const botonStyle = {
        borderColor: tema === 'claro' ? '#333' : '#fff',
    }

    return (
        <nav style={headerStyle} className='navbar navbar-expand-lg header'>
         <div className='container-fluid'>
            <img className='logo' src={tema === 'claro' ? LogoLight : LogoDark} alt='logo'/>
            <button style={botonStyle} className='btn m-2' onClick={cambio}>
                {
                    tema === 'claro' ?
                    <span class="material-symbols-outlined">
                        dark_mode
                    </span>
                    :
                    <span style={iconStyle} class="material-symbols-outlined">
                        sunny
                    </span>
                }
            </button>
         </div>
        </nav>
    );
}

export default Header;
