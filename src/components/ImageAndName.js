import React from 'react';
import './styles/ImagenAndName.css';

const Imagename = ({image, number, name}) => {



    return ( 
        <div className='divImage'>
            <img src={image}  className='images'></img>
            <h2 className="numberName">{number} {name}</h2>
        </div>
     );
}
 
export default Imagename;