import React from 'react';

const Imagename = (props) => {



    return ( 
        <div>
            <img src={props.imagen}></img>
            <h2>No. {props.number} {props.name}</h2>
        </div>
     );
}
 
export default Imagename;