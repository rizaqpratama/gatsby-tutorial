import React from 'react'
import './style.css'
import { HeroImage } from './styles'
import imgSource from '../../images/1.png'

export const Hero = ({ tagline }) => {
  return (
    <div className="hero-container">
      <div>
        <h3 className="hero-tagline">{tagline}</h3>
        <p style={{ fontSize: '12pt', fontStyle: 'italic' }}>Web developer terpercaya siap membantu anda membuat website dengan react js</p>
      </div>
      <HeroImage src={imgSource} />
    </div>
  )
}