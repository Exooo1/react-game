import React, { useState, useEffect } from 'react';
import './statsPlayers.scss'
import PlayersGame from '../PlayersGame/PlayersGame'

const StatsPlayers = (props: any) => {

    const [showStat, setShowStat] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', showStats)
        return () => { document.removeEventListener('keydown', showStats) }
    })

    const showStats = (e: any) => {
        if (e.key == 's') {
            setShowStat(true)
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', closeShowStats)
        return () => { document.removeEventListener('keydown', closeShowStats) }
    })

    const closeShowStats = (e: any) => {
        if (e.key == 's') {
            setShowStat(false)
        }
    }

    const turnPlayer = props.turnPlayers

    return (
        <div className='stats-players'>
            <h3>Your Theme</h3>
            <img className='stats-players__theme' src={props.theme} />
            <h2>TURN : {props.turn} </h2>
            <h2>Now it's turn &#8595;</h2>
            <PlayersGame name={props.players[turnPlayer].name}
                profile={props.players[turnPlayer].image}
            />
            {showStat ? <div  >
                <strong style={{ color: 'rgb(0 255 0)', fontSize: '25px', marginRight: '40px' }}>Yes : {props.players[turnPlayer].true} </strong >
                <strong style={{ color: 'red', fontSize: '25px', }}> No : {props.players[turnPlayer].false} </strong>
            </div> : null}
        </div >
    )
}

export default StatsPlayers