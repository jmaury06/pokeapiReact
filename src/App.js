import React, {useState} from "react";
import Search from './components/Search'
import Imagename from "./components/ImageAndName";
import About from "./components/About";
import TypesAndStats from "./components/TypesAndStats";
import './components/styles/App.css'

function App() {

  const [pokemon, setPokemon] = useState({
      image: 'https://www.shareicon.net/data/256x256/2016/10/18/844160_game_512x512.png',
      name: '',
      number: '',
      types: [],
      baseStats: [],
      nameStats: [],
  })
 
  const[legend, setLegend] = useState('')

  return (
    <div className='background'>
      <div className='whiteBox'>
        <div className='Container1'>
          <h1 className="Title">PokeSearch</h1>
          <Search setLegend={setLegend} setPokemon={setPokemon} />
          {/* <Search setImagen={setPokemon.image} setName={setPokemon.name} setNumber={setPokemon.number} setLegend={setLegend} setType={setPokemon.type} setBaseStats={setPokemon.baseStats} setNameStats={setPokemon.nameameStats} /> */}
          <Imagename image={pokemon.image} number={pokemon.number} name={pokemon.name} />
          <About legend={legend} />
          <TypesAndStats types={pokemon.types} baseStats={pokemon.baseStats} nameStats={pokemon.nameStats} />

        </div>

      </div>

      <div className='footer'><span>Copyright © 2021, Guarapo Labs | All rights reserved.</span></div>

    </div>
    
  );
}

export default App;

  // const[imagen, setImagen] = useState("https://www.shareicon.net/data/256x256/2016/10/18/844160_game_512x512.png")
  // const[name, setName] = useState('Pokemon')
  // const[number, setNumber] = useState('')
  // const[type, setType] = useState('')
  // const[baseStats, setBaseStats] = useState('')
  // const[nameStats, setNameStats] = useState('')