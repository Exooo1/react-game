import { connect } from 'react-redux';
import StartGame from './StartGame';

const mapStateToProps = (state: any) => {
	return {
		oneStep: state.theme.oneStep,
		setStart: state.create.setStart,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {};
};
const ContainerProducts = connect(
	mapStateToProps,
	mapDispatchToProps,
)(StartGame);

export default ContainerProducts;
