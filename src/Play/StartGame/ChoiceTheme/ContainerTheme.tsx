import { connect } from "react-redux";
import ChoiceTheme from './ChoiceTheme'




let mapStateToProps = (state: any) => {
    return {
        theme: state.theme,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addTheme: (text: string, src: string) => {
            dispatch({ type: 'ADD_THEME', text, src })
        }
    }
}
const ContainerTheme = connect(mapStateToProps, mapDispatchToProps)(ChoiceTheme);

export default ContainerTheme;