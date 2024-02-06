import React from 'react'
import { planetType } from '../types'

const Planet:React.FC<{planet: planetType}> = ({planet}) : JSX.Element => {

  return (
    <div className='card'>
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  )
}

export default Planet