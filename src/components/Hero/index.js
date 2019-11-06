import React from 'react'
import './style.css'
import { fontSize } from '@material-ui/system'

export const Hero = ({ tagline }) => {
  return (
    <div className="hero-container">
      <h3 className="hero-tagline">{tagline}</h3>
      <p style={{ fontSize: '12pt', fontStyle: 'italic' }}>Web developer terpercaya siap membantu anda membuat website dengan react js</p>
    </div>
  )
}