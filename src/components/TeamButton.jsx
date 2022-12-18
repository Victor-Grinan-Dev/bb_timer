import React from 'react'
import { logos } from '../functions/logos';

const TeamButton = ({logoNum}) => {
  return (
    <div className='roundBtn'>
        <img src={logos[logoNum]} className="App-logo" alt="logo" />
    </div>
  )
}

export default TeamButton