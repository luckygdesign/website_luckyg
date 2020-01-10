import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import Contactform from '../components/contactform';
import Mailto from 'react-protected-mailto';
import Layout from '../components/layout';
import Header from '../components/header';
 
const App: React.FC = () => {
  return (

    <Layout className="App home">

      {/* eyecatcher section */}
      <section id="eyecatcher">

        <Header />

        <div className="eyecatcher-content">
          <h2>hey, I'm</h2>
          <h1>LUKAS</h1>
          <a className="button-cta" href="#contact">get in touch</a>
        </div>

        <div className="eyecatcher-scroll">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

      </section>

      {/* contact section */}
      <section id="contact" className="container">

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

    </Layout>

  );
}

export default App;
