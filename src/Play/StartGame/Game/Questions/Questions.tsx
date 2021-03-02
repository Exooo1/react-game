import { useEffect, useState } from 'react';
import './questions.scss'
import Modal from './Modal'
import next from '../../../../image/next.png'

const Questions = (props: any) => {

    const [getQuestions, setGetQuestions]: any = useState()

    const themes = props.getTheme

    let [count, setCount] = useState(0)

    let [dare, setDare] = useState(0)

    let [anim, setAnim] = useState(true)


    const truth = () => {
        if ("Provacation" === themes) {
            { count < props.question.Provacation.length ? setGetQuestions(props.question.Provacation[count]) : setGetQuestions(<Modal players={props.players} turn={props.turn} />) }
        } else if ('Party' === themes) {
            { count < props.question.Party.length ? setGetQuestions(props.question.Party[count]) : setGetQuestions(<Modal players={props.players} turn={props.turn} />) }
        } else {
            { count < props.question['18+'].length ? setGetQuestions(props.question['18+'][count]) : setGetQuestions(<Modal players={props.players} turn={props.turn} />) }
        }
        setSelect(select = !select)
    }

    const dares = () => {
        { dare < props.question.carryOut.length ? setGetQuestions(props.question.carryOut[dare]) : setGetQuestions(<Modal players={props.players} turn={props.turn} />) }
        setSelect(select = !select)
    }

    useEffect(() => {
        document.addEventListener('keydown', answerYes)
        return () => { document.removeEventListener('keydown', answerYes) }
    })

    const answerYes = (e: any) => {
        if (e.key === 'y') {
            setDare(dare += 1)
            setCount(count += 1)
            props.addTurn()
            setAnim(anim = !anim)
            props.clickButton()
            setSelect(select = !select)
            props.addTrue()
        }
    }


    useEffect(() => {
        document.addEventListener('keydown', answerNo)
        return () => { document.removeEventListener('keydown', answerNo) }

    })

    const answerNo = (e: any) => {
        if (e.key === 'n') {
            setDare(dare += 1)
            props.addFalse()
            setCount(count += 1)
            props.addTurn()
            setAnim(anim = !anim)
            props.clickButton()
            setSelect(select = !select)
        }
    }


    const addTrue = () => {
        setDare(dare += 1)
        props.addTrue()
        setCount(count += 1)
        props.addTurn()
        setAnim(anim = !anim)
        props.clickButton()
        setSelect(select = !select)
    }

    const addFalse = () => {
        setDare(dare += 1)
        props.addFalse()
        setCount(count += 1)
        props.addTurn()
        setAnim(anim = !anim)
        props.clickButton()
        setSelect(select = !select)
    }

    let [select, setSelect] = useState(false)

    return (
        <div className='questions-grid'>
            <div className='questions-grid__button'>
                {select ? <div className='questions-grid__button'>
                    <button onClick={addTrue} style={{ background: 'rgb(44 165 44' }} >Yes</button>
                    <button onClick={addFalse} style={{ background: 'red' }}>No</button>
                    <img  onClick={() => {
                        setCount(count += 1)
                        setAnim(anim = !anim)
                        props.addTurn()
                    }} className='questions-grid__button_image' src={next} alt="img" />
                </div> : null}
            </div>
            <div className={anim ? 'questions-grid__questions' : 'questions-grid__twoQuestions'}>
                {select ? < p> {getQuestions}</p> : <div>
                    <button onClick={truth}>Truth</button>
                    <button onClick={dares}>Dare</button>
                </div>}
            </div>
        </div >
    )
}

export default Questions;