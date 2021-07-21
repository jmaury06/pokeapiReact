import React, {fragment, useState} from "react";
import Search from './components/Search'
import Imagename from "./components/ImagenAndName";
import About from "./components/About";

function App() {

  const[imagen, setImagen] = useState("https://www.shareicon.net/data/256x256/2016/10/18/844160_game_512x512.png")
  const[name, setName] = useState('')
  const[number, setNumber] = useState('')
  const[element, setElement] = useState('')
  const[statsHp, setStatsHp] = useState('0')
  const[statsAtk, setStatsAtk] = useState('0')
  const[statsDef, setStatsDef] = useState('0')
  const[legend, setLegend] = useState('Legend')

  return (
    <div>
      <h1>PokeSearch</h1>
      <Search setImagen={setImagen} setName={setName} setNumber={setNumber} setLegend={setLegend} setElement={setElement} setStatsHp={setStatsHp} setStatsAtk={setStatsAtk} setStatsDef={setStatsDef} />
      <Imagename imagen={imagen} number={number} name={name} />
      <About legend={legend} />
      <div>
        <h3>Types</h3>
        <p>{element}</p>
      </div>
      <div>
        <h3>Stats</h3>
        <p><strong>Stats</strong></p>
        <p>HP</p>
        <p>ATK</p>
        <p>DEF</p>
        <p><strong>Value</strong></p>
        <p>{statsHp}</p>
        <p>{statsAtk}</p>
        <p>{statsDef}</p>
      </div>
    </div>
  );
}

export default App;