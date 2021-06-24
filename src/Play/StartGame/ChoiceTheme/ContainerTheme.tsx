import { connect } from 'react-redux';
import ChoiceTheme from './ChoiceTheme';

const mapStateToProps = (state: any) => ({ theme: state.theme });

const mapDispatchToProps = (dispatch: any) => ({
	addTheme: (text: string, src: string) => {
		dispatch({ type: 'ADD_THEME', text, src });
	},
});


const ContainerTheme = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ChoiceTheme);

export default ContainerTheme;
