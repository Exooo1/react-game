import React from 'react';
import './createObject.scss';
import Players from './Players/Players';
import CreatePlayers from './CreatePlayers/CreatePlayers';

const CreateObject = (props: any) => {
	return (
		<div className='form'>
			<div className={props.setCount ? 'form__fillings' : 'form__filling'}>
				{props.setCount ? null : <Players addCount={props.addCount} />}
				{props.setCount ? (
					<CreatePlayers
						addPlayers={props.addPlayers}
						getPlayer={props.getPlayer}
						count={props.count}
						theme={props.theme}
						setStart={props.setStart}
						imageProfile={props.imageProfile}
					/>
				) : null}
			</div>
		</div>
	);
};

export default CreateObject;
