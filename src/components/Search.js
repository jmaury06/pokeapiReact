 import React from 'react';
 import lupa from './img/lupa.svg';
 import './styles/Search.css';

const Search = ({setPokemon, setLegend}) => {

    const fetchData = async() => {

        const namePokemonInput = document.querySelector('input').value
        const namePokemon = namePokemonInput.toLowerCase()

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
            const data = await res.json()

            const pokeImage = data.sprites.other.dream_world.front_default
            const pokeName = data.name
            const pokeNumber = data.id
            const pokeType = data.types.map(({type:{name}}) => name)
            const baseStats = data.stats.slice(0, 3).map(({base_stat}) => base_stat)
            const nameStats = data.stats.slice(0, 3).map(({stat:{name}}) => name)

            const res2 = await fetch(`https://pokeapi.co/api/v2/ability/${pokeNumber}`)
            const data2 = await res2.json()

            const pokeLegend = data2.effect_entries[1].effect

            setLegend(pokeLegend)

            setPokemon({
                image: pokeImage,
                name: pokeName,
                number: pokeNumber,
                types: pokeType,
                baseStats: baseStats,
                nameStats: nameStats,
            })

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
                <img src={lupa} className='lupa' onClick={()=> fetchData()} />
            </div>
        </div>

     );
}

export default Search;