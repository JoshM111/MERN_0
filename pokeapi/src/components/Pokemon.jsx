import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [ pokemon, setPokemon ] = useState([]);
    const grabPokemon = (e) =>{

        e.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
            return response.json()
        })
        .then((jsonResponse) => {
            console.log(jsonResponse);
            setPokemon(jsonResponse.results);
        })
        .catch((jsonError) => {
            console.log(jsonError);
        })
        
        .catch((error) => {
            console.log(error);
        })
    };    
    return(
            <div>
            <button onClick={grabPokemon} class="btn btn=primary">Fetch Pokemon</button>
            <h2>Pokemon</h2>
            {
                pokemon.map((personObj, index) => (
                    <div key={index}>
                        <hr/>
                        <p>Name: {personObj.name}</p>
                    </div>
                ))
            }
        </div>
    );
}


export default Pokemon;