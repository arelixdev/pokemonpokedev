import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
	return(
		<div className='pa2'>
			<input
			className='pa3 ba b--yellow' 
			type='search' 
			placeholder='Search pokemons'
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;