import React, {createContext, useState} from "react";
import logoLight from '../Assets/logoLight.png'
//Context

export const Context = createContext();

//Provider
export const Provider = ({children}) => {
    const [tema, setTema] = useState('claro');
    const [color, setColor] = useState('#333');
    const [imagen, setImagen] = useState(logoLight)
    const [ancho, setAncho] = useState(50)
    const [alto, setAlto] = useState(50)
    const [valor, setValor] = useState('')

    const cambiarAlto = (e) => {
            setAlto(e)
    }

    const cambiarAncho = (e) => {
        setAncho(e)     
    }

    const cambio = () => {
        setTema((tema) => (tema === 'claro' ? 'oscuro' :  'claro'))
    };

    const cambiarValor = (e) => {
        setValor(e)
    }

    const cambioColor = (e) => {
        setColor(e.hex)
    };

    const cambiarImagen = (e) => {
        setImagen(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
    }

    const temaProvider = {
        tema,
        cambio,
        cambioColor,
        color,
        imagen,
        cambiarImagen,
        submit,
        alto,
        ancho,
        cambiarAlto,
        cambiarAncho,
        valor, 
        cambiarValor
    };

    return (
        <Context.Provider value={temaProvider}>{children}</Context.Provider>
    );
}

