import React, {fragment, useState} from "react";
import Search from './components/Search'
import Imagename from "./components/ImagenAndName";
import About from "./components/About";
import './components/styles/App.css'

function App() {

  const[imagen, setImagen] = useState("https://www.shareicon.net/data/256x256/2016/10/18/844160_game_512x512.png")
  const[name, setName] = useState('Pokemon')
  const[number, setNumber] = useState('00')
  const[element, setElement] = useState('Element')
  const[statsHp, setStatsHp] = useState('0')
  const[statsAtk, setStatsAtk] = useState('0')
  const[statsDef, setStatsDef] = useState('0')
  const[legend, setLegend] = useState('Legend')

  return (
    <div className='background'>

      <div className='whiteBox'>

        <div className='Container1'>

          <h1 className="Title"> PokeSearch</h1>
          <Search setImagen={setImagen} setName={setName} setNumber={setNumber} setLegend={setLegend} setElement={setElement} setStatsHp={setStatsHp} setStatsAtk={setStatsAtk} setStatsDef={setStatsDef} />
          <div className='imageName'>
          <Imagename imagen={imagen} number={number} name={name} />
          </div>
          
          <About legend={legend} />

          <div className='Container2'>

            <div className='subContainer1'>

              <h3 className='Types'>Types</h3>
              <p className='Element'>{element}</p>

            </div>

            <div className='subContainer2'>

              <div><h3>Stats</h3></div>

              <div className='containerZ'>

                <div className='Stats'>

                  <div><p><strong>Stats</strong></p></div>
                  <div><p>HP</p></div>
                  <div><p>ATK</p></div>
                  <div><p>DEF</p></div>

                </div>

                <div className='Value'>

                  <div><p><strong>Value</strong></p></div>
                  <div><p>{statsHp}</p></div>
                  <div><p>{statsAtk}</p></div>
                  <div><p>{statsDef}</p></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
    
  );
}

export default App;