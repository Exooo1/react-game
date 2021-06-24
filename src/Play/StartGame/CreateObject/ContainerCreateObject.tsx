import { connect } from 'react-redux';
import CreateObject from './CreateObject';

const mapStateToProps = (state: any) => {
	return {
		setCount: state.create.setCount,
		getPlayer: state.create.players,
		count: state.create.count,
		theme: state.theme,
		imageProfile: state.create.imageProfile,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		addCount: (count: number) => {
			dispatch({ type: 'ADD_COUNT', count });
		},
		addPlayers: (name: string) => {
			dispatch({ type: 'ADD_PLAYER', name });
		},
		setStart: () => {
			dispatch({ type: 'SET-START' });
		},
	};
};
const ContainerCreateObjects = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateObject);

export default ContainerCreateObjects;
