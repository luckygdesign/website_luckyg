import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import Contactform from '../components/contactform';
import Mailto from 'react-protected-mailto';
import Link from 'next/link';
 
const App: React.FC = () => {
  return (

    <div className="App home">

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

        <div className="eyecatcher-content">
          <h2>hey, i'm</h2>
          <h1>LUKAS</h1>
          <a className="button-cta" href="#contact">get in touch</a>
        </div>

        <div className="eyecatcher-scroll">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

      </section>

      {/* contact section */}
      <section id="contact">

        <div className="contact-intro">
          <h2>let's get in touch</h2>
          <p>I'd love to get in contact with you - if you like feel free to call or shoot a message!</p>
          <p>You can also use the contact form below and I will contact you back...</p>

          <div className="contact-email">
            <FontAwesomeIcon icon={faEnvelope} />
            <Mailto email="lukas@luckyg.de" />
          </div>

          <div className="contact-phone">
            <FontAwesomeIcon icon={faMobile} />
            <Mailto tel="+49 176 5763 7942" />
          </div>

        </div>

        <Contactform />
      </section>

      <footer>

        <div className="container">

          <div className="footer-company">
            <span className="company-name">LUCKYG.DESIGN</span>
            <span className="company-owner">Inhaber: Lukas Großmann</span>
            <span className="company-addres">Schanzstraße 35, 75446 Wiernsheim, GERMANY</span>
          </div>

          <div className="footer-legal">
            <Link href="/datenschutz"><a>Datenschutzerklärung</a></Link>
            <Link href="/impressum"><a>Impressum</a></Link>
            <span className="legal-credits">Layout&Design: Lukas Großmann</span>
          </div>

        </div>

      </footer>

    </div>

  );
}

export default App;
