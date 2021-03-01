import { useEffect, useState } from 'react';
import './questions.scss'
const clickButton = require("../../../../audio/click-button.mp3");

const Questions = (props: any) => {

    const audio = new Audio(clickButton.default)

    const [getQuestions, setGetQuestions]: any = useState()

    const themes = props.getTheme

    let [count, setCount] = useState(0)

    let [dare, setDare] = useState(0)

    let [anim, setAnim] = useState(true)


    const truth = () => {
        if ("Provacation" == themes) {
            { count < props.question.Provacation.length ? setGetQuestions(props.question.Provacation[count]) : setGetQuestions(<h1>The End</h1>) }
        } else if ('Party' == themes) {
            { count < props.question.Party.length ? setGetQuestions(props.question.Party[count]) : setGetQuestions(<h1>The End</h1>) }
        } else {
            { count < props.question['18+'].length ? setGetQuestions(props.question['18+'][count]) : setGetQuestions(<h1>The End</h1>) }
        }
    }

    const dares = () => {
        { dare < props.question.carryOut.length ? setGetQuestions(props.question.carryOut[dare]) : setGetQuestions(<h1>The End</h1>) }
    }

    useEffect(() => {
        document.addEventListener('keydown', answerYes)
        return () => { document.removeEventListener('keydown', answerYes) }
    })

    const answerYes = (e: any) => {
        if (e.key == 'y') {
            setDare(dare += 1)
            props.addTrue()
            setCount(count += 1)
            props.addTurn()
            setAnim(anim = !anim)
            audio.play()
        }
    }


    useEffect(() => {
        document.addEventListener('keydown', answerNo)
        return () => { document.removeEventListener('keydown', answerNo) }

    }, [])

    const answerNo = (e: any) => {
        if (e.key == 'n') {
            setDare(dare += 1)
            props.addFalse()
            setCount(count += 1)
            props.addTurn()
            setAnim(anim = !anim)
            audio.play()
        }
    }


    const addTrue = () => {
        setDare(dare += 1)
        props.addTrue()
        setCount(count += 1)
        props.addTurn()
        setAnim(anim = !anim)
        audio.play()
    }

    const addFalse = () => {
        setDare(dare += 1)
        props.addFalse()
        setCount(count += 1)
        props.addTurn()
        setAnim(anim = !anim)
        audio.play()
    }

    return (
        <div className='questions-grid'>
            <div className='questions-grid__button'>
                <button onClick={addTrue} style={{ background: 'rgb(44 165 44' }} >Yes</button>
                <button onClick={addFalse} style={{ background: 'red' }}>No</button>
                <h2>Next turn</h2>
                <img onClick={() => {
                    setCount(count += 1)
                    setAnim(anim = !anim)
                    props.addTurn()
                }} className='questions-grid__button_image' src='https://iconarchive.com/download/i86013/graphicloads/100-flat-2/arrow-forward.ico' />
            </div>
            <div className={anim ? 'questions-grid__questions' : 'questions-grid__twoQuestions'}>
                <button onClick={truth}>Truth</button>
                <button onClick={dares}>Dare</button>
                < p> {getQuestions}</p><br />
            </div>
        </div >
    )
}

export default Questions;