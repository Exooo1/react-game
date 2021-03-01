import React, { useState } from 'react';
import './players.scss'


const Players = (props: any) => {

    const [count, setCount] = useState('')

    const valid = <p style={{ marginTop: '20px', color: 'red' }}><strong>
        Input must be numbers only!<br />
        Players must be at least 2 and no more than 4.
        </strong></p>

    return (
        <form className='players' onSubmit={(e) => {
            console.log(count.length)
            if (count.length == 0) {
                e.preventDefault()
            } else if (Number.isInteger(+count)) {
                e.preventDefault()
                props.addCount(+count)
            } else {
                e.preventDefault()
            }

        }}>
            <img style={{ width: '150px', height: '150px' }} src='https://secureservercdn.net/45.40.149.159/2m3.b32.myftpupload.com/wp-content/uploads/2017/06/small-groups-icon-300x300.png' />
            <h1>How many people will play?</h1>
            <input className='players__create-players' placeholder='Write the number of players...' type='text' value={count} onChange={(e) => setCount(e.target.value)} /><br />
            {(count == '') || (Number.isInteger(+count)) && (+count <= 4 && +count >= 2) ? null : valid}
            <br />
            <input className='players__submit' type='submit' value='Accept' />
        </form>
    )
}

export default Players;