import React from 'react';

const TurnPeople = (props: any): JSX.Element => {
	return (
		<div>
			<h2>{props.name}</h2>
			<img
				alt='img'
				src={props.profile}
				style={{ width: '120px', height: '120px', borderRadius: '90px' }}
			/>
		</div>
	);
};

export default TurnPeople;
