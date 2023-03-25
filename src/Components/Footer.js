import React, {useContext} from 'react';
import { Context } from '../context/Context';

//estilo
import '../style/footer.css'

const Footer = () => {

    const {tema} = useContext(Context);

    const footerStyle = {
        backgroundColor: tema === 'claro' ? '#fff' : '#0a1929'
    }

    return (
        <footer style={footerStyle} className='footerQr'>
            <div className='container'>
                <p>App Creada por Raul Nuñez</p>
                <p>raulnunez.vercel.app</p>
            </div>
        </footer>
    );
}

export default Footer;
