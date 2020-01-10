import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
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
    )
}
export default Footer;