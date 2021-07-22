import React from 'react';
import './styles/About.css';

const About = (props) => {



    return ( 



        <div>
            <h3>About</h3>
            <p className='Legend'>{props.legend}</p>
        </div>
     );
}
 
export default About;