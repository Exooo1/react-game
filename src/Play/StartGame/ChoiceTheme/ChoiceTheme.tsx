import React, { useState } from 'react';
import './choiceTheme.scss'
import CreateTheme from './CreateTheme/CreateTheme'

interface Rec {
    id: number
    src: string
    text: string
}

const ChoiceTheme = (props: any): JSX.Element => {

    const [thems, setThems] = useState(false)

    const theme = props.theme.setTheme.map((item: Rec) => {
        return <CreateTheme id={item.id} src={item.src} text={item.text} setThems={setThems} addTheme={props.addTheme} />
    })

    return (
        <div className='theme'>
            <div className='theme__container'>
                {thems ? null : theme}
            </div>
        </div>
    )
}

export default ChoiceTheme;