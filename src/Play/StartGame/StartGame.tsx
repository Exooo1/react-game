import React from 'react';
import './startGame.scss';
import ContainerTheme from './ChoiceTheme/ContainerTheme';
import ContainerCreateObjects from './CreateObject/ContainerCreateObject';
import ContainerGame from './Game/ContainerGame';

const StartGame = (props: any): JSX.Element => {
	return (
		<div className='create'>
			{props.oneStep ? null : <ContainerTheme />}
			{props.oneStep && props.setStart ? <ContainerCreateObjects /> : null}
			{props.setStart ? null : <ContainerGame />}
		</div>
	);
};

export default StartGame;
