import { connect } from "react-redux";
import CreateObject from './CreateObject'


let mapStateToProps = (state: any) => {

    return {
        setCount: state.create.setCount,
        getPlayer: state.create.players,
        count: state.create.count,
        theme: state.theme,
        imageProfile: state.create.imageProfile
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addCount: (count: number) => {
            dispatch({ type: 'ADD_COUNT', count })
        },
        addPlayers: (name: string, active: any) => {
            dispatch({ type: "ADD_PLAYER", name })
        },
        setStart: () => {
            dispatch({ type: 'SET-START' })
        }
    }
}
const ContainerCreateObjects = connect(mapStateToProps, mapDispatchToProps)(CreateObject);

export default ContainerCreateObjects;
