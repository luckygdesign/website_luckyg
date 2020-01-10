import React from 'react';

const Header = () => {
    return (
        <header className="container">
          <nav>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/#contact">contact</a></li>
            </ul>
          </nav>
          <div className="logo">
            <span>luckyg.design</span>
            <img src="/images/logo.png" alt="Luckyg-Design Logo Icon" />
          </div>
        </header>
    )
}

export default Header;