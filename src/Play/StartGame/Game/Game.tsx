import React, { useEffect, useState } from 'react';
import './game.scss'
import PlayersGame from './PlayersGame/PlayersGame'
import StatsPlayers from './StatsPlayers/StatsPlayers'
import Questions from './Questions/Questions'
const clickButton = require("../../../audio/click-button.mp3");
const audioButton = new Audio(clickButton.default)
const music = require('../../../audio/background.mp3');
const background = new Audio(music.default,)



const Game = (props: any) => {

    console.log(props)

    const [volume, setVolume] = useState(0.2)

    const clickButton = () => {
        audioButton.play()
    }

    background.volume = volume
    audioButton.volume = volume

    let [musicOffOn, setMusicOffOn] = useState(false)

    let [click, setClick] = useState(false)

    const musicAudio = (e: any) => {
        if (musicOffOn) {
            background.muted=false
            setMusicOffOn(musicOffOn = !musicOffOn)
        } else {
            background.muted=true
            setMusicOffOn(musicOffOn = !musicOffOn)
        }
    }
    const clickAudio = (e: any) => {
        if (click) {
            audioButton.muted=false
            setClick(click = !click)
        }
        audioButton.muted=true
        setClick(click = !click)
    }

    useEffect(() => {
        background.loop = true
        background.play()
    }, [])

    let [setting, setSetting] = useState(false)

    const getPlayers = props.players.map((players: any) => <PlayersGame id={players.id} profile={players.image} name={players.name} images={props.images} addImage={props.addImage} />)

    return (
        <div >
            <div className="optional-volume">
                <img src='https://lh3.googleusercontent.com/proxy/uEjlhAz-ZSAHc-CQumA88HT1VFxdy0DbX5T8xFrtwg_JGtKCHckc0PfsDvJOkN93q5H238XjPJckMFg'
                    onClick={() => setSetting(setting = !setting)} />
                {setting ? <div className='setting'>
                    <div style={{ marginTop: '20px' }}>
                        <strong>Music :</strong> <button onClick={musicAudio}>On/Off</button><br/>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <strong >click :</strong> <button onClick={clickAudio}>On/Off</button>
                    </div>
                    <div style={{ marginTop: '20px', }}>
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
                    players={props.players}
                    turn={props.turn}
                    clickButton={clickButton}
                /></div>
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