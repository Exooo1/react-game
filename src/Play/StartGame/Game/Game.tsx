import React, { useEffect, useState } from 'react';
import './game.scss'
import PlayersGame from './PlayersGame/PlayersGame'
import StatsPlayers from './StatsPlayers/StatsPlayers'
import Questions from './Questions/Questions'
import sett from '../../../image/setting.png'
import mark from '../../../image/mark.png'
const clickButton = require("../../../audio/click-button.mp3");
const audioButton = new Audio(clickButton.default)
const music = require('../../../audio/background.mp3');
const background = new Audio(music.default,)

const Game = (props: any) => {

    useEffect(() => {
        document.addEventListener('keydown', backgroundKey)
        return () => { document.removeEventListener('keydown', backgroundKey) }
    })

    const backgroundKey = (e: any) => {
        if (e.key === 'm') {
            background.muted = true
            setMusicOffOn(musicOffOn = !musicOffOn)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', buttonKey)
        return () => { document.removeEventListener('keydown', buttonKey) }
    })

    const buttonKey = (e: any) => {
        if (e.key === 'b') {
            audioButton.muted = true
            setClick(click = !click)
        }
    }

    const [volume, setVolume] = useState(0.2)

    const clickButton = () => {
        if (click) {

        } else {
            audioButton.muted = false
            audioButton.play()
        }

    }

    background.volume = volume
    audioButton.volume = volume

    let [musicOffOn, setMusicOffOn] = useState(false)

    let [click, setClick] = useState(false)

    const musicAudio = () => {
        if (musicOffOn) {
            background.muted = false
            setMusicOffOn(musicOffOn = !musicOffOn)
        } else {
            background.muted = true
            setMusicOffOn(musicOffOn = !musicOffOn)
        }
    }
    const clickAudio = () => {
        if (click) {
            audioButton.muted = false
            setClick(click = !click)
        }
        audioButton.muted = true
        setClick(click = !click)
    }

    useEffect(() => {
        background.loop = true
        background.play()
    }, [])

    let [setting, setSetting] = useState(false)

    const getPlayers = props.players.map((players: any) => <PlayersGame id={players.id} profile={players.image} name={players.name} images={props.images} addImage={props.addImage} />)

    let [marks, setMarks] = useState(false)

    const [color, setColor] = useState('rgb(255, 255, 255)')

    const [colorQuestion, setColorQuestion] = useState('rgb(131, 134, 139)')

    return (
        <div >
            <div className="optional-volume">
                {marks ? <div className='optional-volume__mark'  >
                    <h3>Instruction</h3>
                    <p>button - y (answer Yes)</p>
                    <p>button - n (answer No)</p>
                    <p>button - s (show stats)</p>
                    <p>button - m (off music)</p>
                    <p>button - b (off button)</p>
                    <p style={{ color: 'red', fontWeight: 700 }}>Сhange the player's photo, click on the photo!!! </p>
                    <button onClick={() => setMarks(marks = !marks)}>close</button>
                </div> : <img alt='img' style={{ marginRight: '20px', borderRadius: '90px' }} src={mark} onMouseOver={() => setMarks(true)} />}
                <img alt='img' src={sett}
                    onClick={() => setSetting(setting = !setting)} />
                {setting ? <div className='setting'>
                    <div style={{ marginTop: '20px' }}>
                        <strong>Music :</strong> <button onClick={musicAudio}>On/Off</button><br />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <strong >click :</strong> <button onClick={clickAudio}>On/Off</button>
                    </div>
                    <div style={{ marginTop: '20px', }}>
                        <strong>Volume music:</strong><input onChange={(e) => {
                            setVolume(+e.target.value / 100)
                        }} type="range" />
                    </div>
                    <div style={{ marginTop: '10px', }}>
                        <strong>Color Players:</strong><input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '10px', }}>
                        <strong>Color questions:</strong><input type='color' value={colorQuestion} onChange={(e) => setColorQuestion(e.target.value)} />
                    </div>
                </div> : null}
            </div>
            <div className='start-grid'>
                <div style={{ gridTemplateColumns: `repeat(${props.count},1fr)`, background: `${color}` }} className='start-grid__players'>{getPlayers}</div>
                <div className='start-grid__questions' style={{ background: `${colorQuestion}` }}><Questions question={props.question}
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