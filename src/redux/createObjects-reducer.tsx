import man1 from '../image/man1.png'
import man2 from '../image/man2.jpg'
import man3 from '../image/man3.jpg'
import man4 from '../image/man4.jpg'

const initial: any = {

    players: [],

    count: 0,

    setCount: false,

    turn: 0,

    setStart: true,

    images: [man1,
        man2, man3,
        man4],

    turnPlayers: 0,

    countFalse: 0,

    countTrue: 0,

    id: 0



}

interface IObject {
    name: string,
    image: string,
    id: number,
    true: number,
    false: number
}

const createObjects = (state = initial, action: any) => {
    debugger
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                ...state,
                count: action.count,
                setCount: true
            }
        case 'ADD_PLAYER':
            state.id++;
            let str = action.name
            const name = str[0].toUpperCase() + str.slice(1);
            const add: IObject = {
                name: name,
                image: state.images[state.players.length],
                id: state.id,
                true: 0,
                false: 0,
            }
            return {
                ...state,
                players: [...state.players, add],
            }
        case 'SET-START':
            return {
                ...state,
                setStart: false
            }
        case "ADD_TURN": {
            if (state.turnPlayers === state.count - 1) {
                state.turnPlayers = 0
            } else {
                state.turnPlayers++
            }

            state.turn += 1
            return {
                ...state,
                turn: state.turn,
                turnPlayers: state.turnPlayers
            }
        }
        case 'ADD_TRUE': {

            let a = 1
            state.countTrue = 1
            const stats = state.players.map((item: any) => {
                if (item.id === state.turnPlayers + 1) {
                    item.true += a
                }
                return item
            })

            return {
                ...state,
                players: stats
            }
        }
        case 'ADD_FALSE': {
            let a = 1
            state.countTrue = 1
            const stats = state.players.map((item: any) => {
                if (item.id === state.turnPlayers + 1) {
                    item.false += a
                }
                return item
            })

            return {
                ...state,
                players: stats
            }
        }
        case 'ADD_IMAGE': {
            const stats = state.players.map((item: any) => {
                if (item.id === action.id) {
                    item.image = state.images[action.setImage]
                }
                return item
            })
            return {
                ...state,
                players: stats
            }
        }

        default:
            return state;
    }
}
export default createObjects;