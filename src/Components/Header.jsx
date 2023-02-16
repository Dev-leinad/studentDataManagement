import React from 'react'

const Header = () => {
  return (
   <header>
    <div className="logoBrand">
        <a href="#" className="logoName">Learnable</a>
    </div>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About us   </a></li>
        </ul>
    </nav>
   </header>
  )
}

export default Header