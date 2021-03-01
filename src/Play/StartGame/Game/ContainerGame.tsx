import { connect } from "react-redux";
import Game from './Game'

let mapStateToProps = (state: any) => {

    return {
        players: state.create.players,
        count: state.create.count,
        theme: state.theme.selectedTheme,
        question: state.theme.question,
        getTheme: state.theme.getTheme,
        turn: state.create.turn,
        turnPlayers: state.create.turnPlayers,
        images: state.create.images
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addTurn: () => {
            dispatch({ type: 'ADD_TURN' })
        },
        addTrue: () => {
            dispatch({ type: 'ADD_TRUE' })
        },
        addFalse: () => {
            dispatch({ type: 'ADD_FALSE' })
        },
        addImage: (id: any, setImage: any) => {
            dispatch({ type: 'ADD_IMAGE', id, setImage })
        }
    }
}
const ContainerGame = connect(mapStateToProps, mapDispatchToProps)(Game);

export default ContainerGame;
