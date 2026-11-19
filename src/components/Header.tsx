import React, { FC } from 'react'
import './Header.css'

const Header: FC = () => {
  return (
    <div className="Header">
        <h1>REACT FANCY CAROUSEL COMPONENT</h1>
        <p className="hint">Click any image or use the ← → keys. Hover to pause.</p>
    </div>
  )
}

export default Header