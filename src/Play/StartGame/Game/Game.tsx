import React, { useEffect, useState } from 'react';
import './game.scss'
import PlayersGame from './PlayersGame/PlayersGame'
import StatsPlayers from './StatsPlayers/StatsPlayers'
import Questions from './Questions/Questions'
import setting from '../../../image/setting.png'

const music = require('../../../audio/background.mp3');
const background = new Audio(music.default,)
background.volume = 0.1



const Game = (props: any) => {

    const [volume, setVolume] = useState(0.52)

    background.volume = volume

    let [on_of, setOn_of] = useState(true)

    const audio = (e: any) => {
        if (e.target == 0) {
            setSetting(setting = !setting)
        }
        if (on_of) {
            background.pause()
            setOn_of(on_of = !on_of)
        } else {
            background.play()
            setOn_of(on_of = !on_of)
        }
    }

    useEffect(() => {
        background.loop = true
        background.play()
    }, [])

    let [setting, setSetting] = useState(false)

    const getPlayers = props.players.map((players: any) => <PlayersGame profile={players.image} name={players.name} />)

    return (
        <div >
            <div className="optional-volume">
                <img src='https://lh3.googleusercontent.com/proxy/uEjlhAz-ZSAHc-CQumA88HT1VFxdy0DbX5T8xFrtwg_JGtKCHckc0PfsDvJOkN93q5H238XjPJckMFg'
                    onClick={() => setSetting(setting = !setting)} />
                {setting ? <div className='setting'>
                    <div style={{ marginTop: '10px' }}>
                        <strong>On/Off:</strong> <button onClick={audio}>On/Off</button>
                    </div>
                    <div style={{ marginTop: '10px', }}>
                        <strong>Volume music:</strong><input onChange={(e) => {
                            setVolume(+e.target.value / 100)
                        }} type="range" />
                    </div>
                </div> : null}
            </div>
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
        </div>
    )
}

export default Game;