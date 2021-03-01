const initial: any = {

    players: [],

    count: 0,

    setCount: false,

    turn: 0,

    setStart: true,

    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU',
        'https://image.freepik.com/free-vector/people-profile-icon_24877-40758.jpg', 'https://image.freepik.com/free-vector/people-profile-icon_24877-40756.jpg',
        'https://image.freepik.com/free-vector/people-profile-icon_24877-40761.jpg'],

    turnPlayers: 0,

    countFalse: 0,

    countTrue: 0,

    id: 0



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
            const add = {
                name: name,
                image: state.images[state.players.length],
                id: state.id
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
            if (state.turnPlayers == state.count - 1) {
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
            state.countTrue = 1
            const stats = state.players.map((item: any) => {
                if (item.id == state.turnPlayers) {
                    item.true += state.countTrue
                }
                return item
            })

            return {
                ...state,
                players: stats
            }
        }
        case 'ADD_FALSE': {
            state.countFalse += 1
            const stats = state.players.map((item: any) => {
                item.false = state.countFalse
                return item
            })

            return {
                ...state,
                players: stats
            }
        }
        case 'ADD_IMAGE': {
            const stats = state.players.map((item: any) => {
                if (item.id == action.id) {
                    item.image =state.images[action.setImage]
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