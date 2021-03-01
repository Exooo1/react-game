import React, { useState } from 'react';
import './modal.scss'
import PlayersGame from '../PlayersGame/PlayersGame'

const Modal = (props: any) => {
    console.log(props)

    const getPlayers = props.players.map((item: any) => {
        return <div style={{ marginTop: '10px' }}>
            <h4>{item.name}</h4>
            <img style={{ width: '120px', height: '120px', borderRadius: '90px' }} src={item.image} />
            <div style={{ marginTop: '10px' }}>
                <strong style={{ color: 'green' }} > True : {item.true}</strong> <strong style={{ color: 'red' }}> False : {item.false}</strong>
            </div>
        </div>
    })


    const [modal, setModal] = useState(false)

    return (
        <>
            { modal ? <div className='modal-grid'>
                <div className='modal-grid__container'>
                    <img  style={{width:'1000px',height:'200px'}} src='https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-%D1%81-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%87%D0%BD%D0%BE%D0%B9-%D1%81%D0%BF%D0%BB%D0%B5%D1%81%D0%B5%D0%BD%D1%8C%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B0%D0%BA%D1%86%D0%B8%D0%B9-157999321.jpg' />
                    <h3> Moves made in the whole game : {props.turn}</h3>
                    <div className='modal-grid__window' style={{ gridTemplateColumns: `repeat(${props.players.length},1fr)` }}>
                        {getPlayers}
                    </div>
                </div>
            </div> : <button style={{ color: 'red' }} onClick={() => { setModal(true) }}>ShowStats</button>}
        </>
    )
}

export default Modal;