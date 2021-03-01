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
            <h1>How many people will play?</h1>
            <input className='players__create-players' placeholder='Write the number of players...' type='text' value={count} onChange={(e) => setCount(e.target.value)} /><br />
            {(count == '') || (Number.isInteger(+count)) && (+count <= 4 && +count >= 2) ? null : valid}
            <br />
            <input className='players__submit' type='submit' value='send' />
        </form>
    )
}

export default Players;