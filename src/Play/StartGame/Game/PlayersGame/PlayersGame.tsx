import React, { useState } from 'react';
import './playersGame.scss'


const PlayersGame = (props: any) => {

    return (
        <div className="players-game">
            <h2>{props.name}</h2>
            <img src={props.profile} /><br />
        </div>
    )
}

export default PlayersGame;