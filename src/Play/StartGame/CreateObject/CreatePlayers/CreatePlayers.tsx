import { useState } from 'react';
import './createPlayers.scss'



const CreatePlayers = (props: any) => {

    const [name, setName] = useState('')

    const getPlayer = props.getPlayer.map((item: any) => {
        return <>
            <img className='create-players__add' src={item.image} />
            <b className='item-text'>{item.name}</b>
        </>
    })

    const add = (e: any) => {
        e.preventDefault()
        props.addPlayers(name)
        setName('')
    }

    return (
        <div className='flex-center'>
            <div className="create-players__grid">
                {getPlayer}
            </div>
            <form className='create-players' onSubmit={add} >
                {props.getPlayer.length == props.count ? <>
                    <h1 style={{ color: 'green' }}>Your theme:</h1>
                    <h2>{props.theme.getTheme}</h2>
                    <img className='create-players__theme' src={props.theme.selectedTheme} /><br />
                    <img onClick={() => { props.setStart() }} className='create-players__button-next' src='https://www.flaticon.com/svg/vstatic/svg/892/892657.svg?token=exp=1614351433~hmac=67ed606c40d001401e2ea9afbf297ea0' />
                </> : <>
                        <img className='create-players__profile' src='https://icons-for-free.com/iconfiles/png/512/human+male+profile+user+icon-1320196240448793481.png' alt='image' /><br />
                        <input placeholder='Write name...' className='create-players__name' type='text' value={name} onChange={e => setName(e.target.value)} /><br />
                        < input className='create-players__submit' type='submit' value='+' /></>}
            </form >
        </div >
    )

}

export default CreatePlayers;