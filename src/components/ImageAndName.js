import React from 'react';
import './styles/ImagenAndName.css';

const Imagename = (props) => {



    return ( 
        <div className='divImage'>
            <img src={props.imagen}  className='images'></img>
            <h2 className="numberName">{props.number} {props.name}</h2>
        </div>
     );
}
 
export default Imagename;