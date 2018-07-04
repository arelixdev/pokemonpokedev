import React from 'react';

const Card = (props) =>{
	const {id, name, types} = props;
	const styleCenter = {
		textAlign: 'center',
		width: '12em',
	};
	const colorType1 = types[0][1];
	const styleColor1 = {
		backgroundColor: colorType1,
		color: 'white'
	};

	const colorType2 = types[1][1];
	const styleColor2 = {
		backgroundColor: colorType2,
		color: '#EAEAEA'
	};



	console.log(colorType1);

	return(
		<div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5" style={styleCenter}>
			<img alt='pokemon'  src={`../../img/Normal/${id}.png`}/>
			<div>
				<h5>#{id} </h5>
			</div>
			<div>
				<h2>{name}</h2>
			</div>

			<div className='ma3 br3' style={styleColor1}>
				<h3>{types[0][0]}</h3>
			</div>
			<div className='ma3 br3' style={styleColor2}>
				<h3>{types[1][0]}</h3>
			</div>
		</div>
	);
}

export default Card;