 import React, {useState} from 'react';

const Search = (props) => {

    const fetchData = async() => {

        const namePokemon = document.querySelector('input').value

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
            const data = await res.json()

            const pokeImage = data.sprites.other.dream_world.front_default
            const pokeName = data.name
            const pokeNumber = data.id
            const pokeElement = data.types[0].type.name
            const pokeStatsHp = data.stats[0].base_stat
            const pokeStatsAtk = data.stats[1].base_stat
            const pokeStatsDef = data.stats[2].base_stat
            
            props.setImagen(pokeImage)
            props.setName(pokeName)
            props.setNumber(pokeNumber)
            props.setElement(pokeElement)
            props.setStatsHp(pokeStatsHp)
            props.setStatsAtk(pokeStatsAtk)
            props.setStatsDef(pokeStatsDef)

        } catch (error) {
            console.log(error);
        }
    }

    const fetchData2 = async() => {

        const Pokemon = document.querySelector('input').value

        try {
            
            const res2 = await fetch(`https://pokeapi.co/api/v2/ability/${Pokemon}`)
            const data2 = await res2.json()

            const pokeLegend = data2.effect_entries[1].effect

            props.setLegend(pokeLegend)


        } catch (error) {
            console.log(error);
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          fetchData();
          fetchData2();
        }
    }

    return ( 

        <div>
            <input type="text" placeholder="Enter Pokemon" onKeyPress={handleKeyPress} />
            <button onClick={() => fetchData(), () => fetchData2()}>buscar</button>
        </div>

     );
}
 
export default Search;