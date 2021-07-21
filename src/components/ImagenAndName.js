import React from 'react';

const Imagename = (props) => {



    return ( 
        <div>
            <img src={props.imagen} class="rounded mx-auto d-block" width='150px' height='150px'></img>
            <h2 class="text-center">No. {props.number} {props.name}</h2>
        </div>
     );
}
 
export default Imagename;