import React from 'react';

const Card = (props) =>{
	const {id, name, types} = props;
	console.log(types);
	return(

		<div>
			<img alt='pokemon' src={`../../img/Normal/${id}.png`}/>
			<div>
				<h2>{name}</h2>
			</div>
		</div>
	);
}

export default Card;