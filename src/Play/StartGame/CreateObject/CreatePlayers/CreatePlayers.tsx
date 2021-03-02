import { useState } from 'react';
import './createPlayers.scss'
import buttonNext from '../../../../image/buttonNext.svg'
import human from '../../../../image/human.png'



const CreatePlayers = (props: any) => {

    const [name, setName] = useState('')

    const getPlayer = props.getPlayer.map((item: any) => {
        return <>
            <img className='create-players__add' src={item.image} alt='img' />
            <b className='item-text'>{item.name}</b>
        </>
    })

    const add = (e: any) => {
        if (name.length >= 1) {
            e.preventDefault()
            props.addPlayers(name)
            setName('')
        }
        e.preventDefault()
    }

    return (
        <div className='flex-center'>
            <div className="create-players__grid">
                {getPlayer}
            </div>
            <form className='create-players' onSubmit={add} >
                {props.getPlayer.length === props.count ? <>
                    <h1 style={{ color: 'green' }}>Your theme:</h1>
                    <h2>{props.theme.getTheme}</h2>
                    <img className='create-players__theme' src={props.theme.selectedTheme} alt='img' /><br />
                    <img onClick={() => { props.setStart() }} className='create-players__button-next' src={buttonNext} alt="img" />
                </> : <>
                        <img className='create-players__profile' src={human} alt='img' /><br />
                        <input placeholder='Write name...' className='create-players__name' type='text' value={name} onChange={e => setName(e.target.value)} /><br />
                        < input className='create-players__submit' type='submit' value='+' /></>}
            </form >
        </div >
    )

}

export default CreatePlayers;