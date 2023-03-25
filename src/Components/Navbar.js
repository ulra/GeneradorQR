import React, {useContext} from 'react';
import { Context } from '../context/Context';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const {tema} = useContext(Context);

    const navStyle = {
        color: tema === 'claro' ? '#333' : '#fff'
    }

    const navStyle2 = {
        backgroundColor: tema === 'claro' ? 'transparent' : '#fff'
    }

    return (
        <div>
            <nav className='navbar navbar-expand-lg' >
                <div className='container-fluid'>
                <button style={navStyle2} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={navStyle} className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >                
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0' >
                        <li className='nav-item'>
                            <NavLink to={'/'} className='nav-link' style={navStyle}  >URL</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/texto'} className='nav-link' style={navStyle} >Texto</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/email'} className='nav-link' style={navStyle}  >Email</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
