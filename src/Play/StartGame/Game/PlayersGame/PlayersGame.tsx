import React, { useState } from 'react';
import './playersGame.scss'
import pencil from '../../../../image/pencil.png'


const PlayersGame = (props: any) => {

    let [image, setImage] = useState(false)

    const one = () => {
        props.addImage(props.id, 0)
        setImage(image = !image)
    }
    const two = () => {
        props.addImage(props.id, 1)
        setImage(image = !image)
    }
    const three = () => {
        props.addImage(props.id, 2)
        setImage(image = !image)
    }
    const four = () => {
        props.addImage(props.id, 3)
        setImage(image = !image)
    }

    return (
        <div className="players-game">
            <h2>{props.name}</h2>
            {image ? <div className='players-game__image-grid'>
                <img onClick={one} src={props.images[0]} />
                <img onClick={two} src={props.images[1]} />
                <img onClick={three} src={props.images[2]} />
                <img onClick={four} src={props.images[3]} />
            </div> : <img className='players-game__profile' src={props.profile} onClick={() => setImage(image = !image)} />}
        </div>
    )
}

export default PlayersGame;