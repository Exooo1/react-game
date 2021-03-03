import { useState } from 'react';
import './modal.scss'
import congrats from '../../../../image/congrats.jpg'

interface Rec {
    name: string
    image: string
    true: number
    false: number
}

const Modal = (props: any) => {

    const getPlayers = props.players.map((item: Rec) => {
        return <div style={{ marginTop: '10px' }}>
            <h4>{item.name}</h4>
            <img style={{ width: '120px', height: '120px', borderRadius: '90px' }} src={item.image} alt='img' />
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
                    <img style={{ width: '1000px', height: '200px' }} src={congrats} alt='img' />
                    <h3> Moves made in the whole game : {props.turn}</h3>
                    <div className='modal-grid__window' style={{ gridTemplateColumns: `repeat(${props.players.length},1fr)` }}>
                        {getPlayers}
                    </div>
                </div>
            </div> : <button style={{ color: 'white' }} onClick={() => { setModal(true) }}>ShowStats</button>}
        </>
    )
}

export default Modal;