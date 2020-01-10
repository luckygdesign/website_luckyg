import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="container">
          <nav>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/#contact">contact</a></li>
            </ul>
          </nav>
          <Link href="/">
            <a className="logo">
              <span>luckyg.design</span>
              <img src="/images/logo.png" alt="Luckyg-Design Logo Icon" />
            </a>
          </Link>
        </header>
    )
}

export default Header;