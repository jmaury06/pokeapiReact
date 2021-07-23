import React from 'react'
import './styles/TypesAndStats.css'

const typesAndStats = ({types, nameStats, baseStats}) => {


	return ( 

		<div className='Container2'>

            <div className='subContainer1'>

              <h3>Types</h3>
              <p className='Types'>{types.join(', ')}</p>

            </div>

            <div className='subContainer2'>

              <div><h3>Stats</h3></div>

              <div className='containerZ'>

                <div className='Stats'>

                  <div><h4><strong>Stats</strong></h4></div>
                  <div>{nameStats.map((name)=> <p>{name}</p>)}</div>

                </div>

                <div className='Value'>

                  <div><h4><strong>Value</strong></h4></div>
                  <div>{baseStats.map((baseStat)=> <p>{baseStat}</p>)}</div>

                </div>

              </div>

            </div>

          </div>

	 );
}
 
export default typesAndStats;