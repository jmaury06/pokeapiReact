 import React, {useState} from 'react';
 import styled from 'styled-components';
 import lupa from './img/lupa.svg';
 import './styles/Search.css';

const Search = (props) => {

    const fetchData = async() => {

        const namePokemonInput = document.querySelector('input').value
        const namePokemon = namePokemonInput.toLowerCase()

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
            const data = await res.json()

            const pokeImage = data.sprites.other.dream_world.front_default
            const pokeName = data.name
            const pokeNumber = data.id
            const pokeElement1 = data.types[0].type.name
            const pokeElement2 = data.types[1].type.name
            const pokeStatsHp = data.stats[0].base_stat
            const pokeStatsAtk = data.stats[1].base_stat
            const pokeStatsDef = data.stats[2].base_stat

            console.log(pokeNumber);

            const res2 = await fetch(`https://pokeapi.co/api/v2/ability/${pokeNumber}`)
            const data2 = await res2.json()

            const pokeLegend = data2.effect_entries[1].effect
            
            props.setImagen(pokeImage)
            props.setName(pokeName)
            props.setNumber(pokeNumber)
            props.setElement1(pokeElement1)
            props.setElement2(pokeElement2)
            props.setStatsHp(pokeStatsHp)
            props.setStatsAtk(pokeStatsAtk)
            props.setStatsDef(pokeStatsDef)

            props.setLegend(pokeLegend)

        } catch (error) {
            console.log(error);
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          fetchData();
          
        }
    }

    return ( 

        <div>
            <div className='divInput'>
                <input type="text" placeholder="Enter Pokemon" onKeyPress={handleKeyPress} />
                <img src={lupa} className='lupa' />
            </div>
        </div>

     );
}

export default Search;