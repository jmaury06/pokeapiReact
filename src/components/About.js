import React from 'react';
import './styles/About.css';

const About = (props) => {



    return ( 



        <div className='divLegend'>
            <div><h2>About</h2></div>
            <p className='Legend'>{props.legend}</p>
        </div>
     );
}
 
export default About;