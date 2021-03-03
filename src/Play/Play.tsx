import React, { useState } from 'react';
import styled from "styled-components";
import './play.scss'
import button from '../image/button.png'
import ContainerStartGame from './StartGame/ContainerStartGame'
import { Provider } from 'react-redux';
import git from '../image/git.png'
import rolling from '../image/rolling.png'

const Button = styled.button`
 border-radius:120px;
 width: 180px;
 height:180px;
 display: flex;
 justify-content: center;
 align-items: center;
 position: fixed;
 left: calc(50.3% - 100px);
 top:calc(50.7% - 100px);
 border:none;
 box-shadow: 0 0 10px rgba(0,0,0,3);
 font-size: 40px;
 outline: none !important;
 color:white;
 background-image: url(${button});
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 cursor: pointer;
`;

const Play = (props: any): JSX.Element => {

  const store = props.store

  const [animation, setAnimation] = useState(false)

  const [start, setStart] = useState(false)

  const animationButton = (): void => {
    setAnimation(true)
    setTimeout(() => {
      setStart(true)
    }, 1000)
  }

  return <>
    <Provider store={store}>
      <Button onClick={animationButton} className={animation ? 'play-anim' : ''}><strong>Play</strong></Button>
      {start ? <ContainerStartGame /> : null}
      <header>
        <img alt='img' src={rolling} className='logo' />
        <a href='https://github.com/Exooo1/react-game/tree/react-game' target='blank'><img className='link' src={git} alt='img' /></a>
      </header>
    </Provider>
  </>
}

export default Play;