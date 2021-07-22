import React from 'react';
import './styles/ImageAndName.css';

const Imagename = (props) => {



    return ( 
        <div>
            <img src={props.imagen}  className='images'></img>
            <h2 className="numberName">No. {props.number} {props.name}</h2>
        </div>
     );
}
 
export default Imagename;