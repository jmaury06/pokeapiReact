import React from 'react'
import './styles/TypesAndStats.css'

const typesAndStats = ({types, nameStats, baseStats}) => {


	return ( 

		<div className='Container2'>
            <div className='subContainer1'>
              <h3>Types</h3>
              <p>{types.join(', ')}</p>
            </div>
            <div className='subContainer2'>
              <div className='containerTitle'><h3>Stats</h3></div>
              <div className='containerStats'>  
                <div><p><strong>Stats</strong></p></div>
                <div><p><strong>Value</strong></p></div>
                </div>
                <div className='containerStats'>  
                <div>{nameStats.map((name)=> <p>{name}</p>)}</div>
                <div>{baseStats.map((baseStat)=> <p>{baseStat}</p>)}</div>
                </div>
            </div>

          </div>

	 );
}
 
export default typesAndStats;