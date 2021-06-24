import React from 'react'
import './createTheme.scss';


const foo = <T,>(x: T): T => x

const CreateTheme = (props: any): JSX.Element => {
	return (
		<button className='create-theme'
			onClick={() => {
				props.setThems(true);
				props.addTheme(props.text, props.src);
			}}>
			<h1>{props.text}</h1>
			<img src={props.src} alt={props.text} />
		</button>
	);
};

export default CreateTheme;
