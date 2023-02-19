import React from 'react'

const Header = () => {
  return (
   <header>
    <div className="logoBrand">
        <a href="#" className="logoName">Learnable</a>
    </div>

    <nav>
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About us   </li>
        </ul>
    </nav>
   </header>
  )
}

export default Header