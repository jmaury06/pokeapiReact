import React, {useState} from "react";
import Search from './components/Search'
import Imagename from "./components/ImageAndName";
import About from "./components/About";
import './components/styles/App.css'

function App() {

  const[imagen, setImagen] = useState("https://www.shareicon.net/data/256x256/2016/10/18/844160_game_512x512.png")
  const[name, setName] = useState('Pokemon')
  const[number, setNumber] = useState('')
  const[element1, setElement1] = useState('')
  const[element2, setElement2] = useState('')
  const[statsHp, setStatsHp] = useState('')
  const[statsAtk, setStatsAtk] = useState('')
  const[statsDef, setStatsDef] = useState('')
  const[legend, setLegend] = useState('')

  return (
    <div className='background'>

      <div className='whiteBox'>

        <div className='Container1'>

          <h1 className="Title">PokeSearch</h1>
          <Search setImagen={setImagen} setName={setName} setNumber={setNumber} setLegend={setLegend} setElement1={setElement1} setElement2={setElement2} setStatsHp={setStatsHp} setStatsAtk={setStatsAtk} setStatsDef={setStatsDef} />
          <div className='imageName'>
          <Imagename imagen={imagen} number={number} name={name} />
          </div>
          
          <About legend={legend} />

          <div className='Container2'>

            <div className='subContainer1'>

              <h3 className='Types'>Types</h3>
              <p className='Element'>{element1}, {element2}</p>

            </div>

            <div className='subContainer2'>

              <div><h3>Stats</h3></div>

              <div className='containerZ'>

                <div className='Stats'>

                  <div><h4><strong>Stats</strong></h4></div>
                  <div><p>HP</p></div>
                  <div><p>ATK</p></div>
                  <div><p>DEF</p></div>

                </div>

                <div className='Value'>

                  <div><h4><strong>Value</strong></h4></div>
                  <div><p>{statsHp}</p></div>
                  <div><p>{statsAtk}</p></div>
                  <div><p>{statsDef}</p></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='footer'><span>Copyright © 2021, Guarapo Labs | All rights reserved.</span></div>

    </div>
    
  );
}

export default App;