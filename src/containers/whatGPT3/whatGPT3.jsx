import React from 'react'
import './whatgpt3.css'
import { Feature } from '../../components'

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-features'>
        <Feature />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default whatGPT3