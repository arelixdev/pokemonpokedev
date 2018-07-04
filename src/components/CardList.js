import React from 'react';
import Card from './Card';


const CardList = ({pokemons}) => {
	const cardsArray = pokemons.map((user, i)=> {
		return <Card key={i}id={pokemons[i].id} name={pokemons[i].name} types={pokemons[i].types}/>
	});
    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;