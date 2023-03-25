import React, {useContext} from 'react';
import {PhotoshopPicker} from 'react-color'
import { Context } from '../context/Context';

const ColorPicker = () => {

    const {color, cambioColor} = useContext(Context);

    return (
        <div>
            <PhotoshopPicker color={color} onChangeComplete={cambioColor}/>
        </div>
    );
}

export default ColorPicker;
