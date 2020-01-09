import React from 'react';
import Mailto from 'react-protected-mailto';
import Link from 'next/link';
 
const App: React.FC = () => {
  return (

    <div className="App impressum">

      {/* eyecatcher section */}
      <section id="eyecatcher">

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

      </section>

      {/* contact section */}
      <section id="content">

        <div className="container">
        
          <h1>Impressum</h1>

          <p>Hier kommt ganz viel Text</p>

        </div>

      </section>

      <footer>

        <div className="container">

          <div className="footer-company">
            <span className="company-name">LUCKYG.DESIGN</span>
            <span className="company-owner">Inhaber: Lukas Großmann</span>
            <span className="company-addres">Schanzstraße 35, 75446 Wiernsheim, GERMANY</span>
          </div>

          <div className="footer-legal">
            <Link href="/datenschutzerklärung"><a>Datenschutzerklärung</a></Link>
            <Link href="/impressum"><a>Impressum</a></Link>
            <span className="legal-credits">Layout&Design: Lukas Großmann</span>
          </div>

        </div>

      </footer>

    </div>

  );
}

export default App;
