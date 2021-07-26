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
      <div className='bigBox'>
        <div className='whiteBox'>
          <div className='Container'>
            <h1 className="Title">PokeSearch</h1>
            <Search setLegend={setLegend} setPokemon={setPokemon} />
            <Imagename image={pokemon.image} number={pokemon.number} name={pokemon.name} />
            <About legend={legend} />
            <TypesAndStats types={pokemon.types} baseStats={pokemon.baseStats} nameStats={pokemon.nameStats} />
          </div>
        </div>
        <div className='footer'><span>Copyright © 2021, Guarapo Labs | All rights reserved.</span></div>
      </div>
    </div>
  );
}

export default App;