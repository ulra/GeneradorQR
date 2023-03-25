import React, {useContext, useRef} from 'react';
import {QRCodeSVG} from 'qrcode.react'
import { Context } from '../context/Context';
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';

const Qr = () => {

    const {color, imagen, alto, ancho, valor} = useContext(Context);

    const qrRef =useRef();

    const downloadPng = () => {
        toBlob(qrRef.current)
          .then(function (blob) {
            saveAs(blob, 'my-Qr.png');
          })
          .catch(function (error) {
            console.error('Error:', error);
          });
      };

    return (
        <div>

            <div ref={qrRef}>
            <QRCodeSVG
                value={valor}
                size={256}
                bgColor={ '#ffffff00' }
                fgColor={color}
                level={'H'}
                includeMargin={false}
                imageSettings={{    
                    src: imagen,
                    x: undefined,
                    y: undefined,
                    height: alto,
                    width: ancho,
                    excavate: true,
                    }}
            />
            </div>

            <button type="button" className="mt-2 btn btn-primary" onClick={downloadPng}>Descargar QR</button>


        </div>
    );
}

export default Qr;
