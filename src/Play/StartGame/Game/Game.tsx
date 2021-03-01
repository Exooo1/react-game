import React, { useState } from 'react';
import './game.scss'
import PlayersGame from './PlayersGame/PlayersGame'
import StatsPlayers from './StatsPlayers/StatsPlayers'
import Questions from './Questions/Questions'


const Game = (props: any) => {

    debugger
    const getPlayers = props.players.map((players: any) => <PlayersGame profile={players.image} name={players.name} />)

    return (
        <div className='start-grid'>
            <div style={{ gridTemplateColumns: `repeat(${props.count},1fr)` }} className='start-grid__players'>{getPlayers}</div>
            <div className='start-grid__questions'><Questions question={props.question}
                getTheme={props.getTheme}
                addTurn={props.addTurn}
                addTrue={props.addTrue}
                addFalse={props.addFalse}
                players={props.players} /></div>
            <div className='start-grid__stats-players'><StatsPlayers
                theme={props.theme}
                question={props.question}
                getTheme={props.getTheme}
                turn={props.turn}
                players={props.players}
                turnPlayers={props.turnPlayers} /></div>
        </div >
    )
}

export default Game;