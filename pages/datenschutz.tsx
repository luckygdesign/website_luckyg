import React, { useState } from 'react';

import * as Text from '../components/text';

import Layout from '../components/layout';
import Header from '../components/header';


const App: React.FC = () => {

  const [lang, setLang] = useState('de')

  return (

    <Layout className="App datenschutz">

      {/* eyecatcher section */}
      <section id="eyecatcher">

        <Header />

      </section>

      {/* contact section */}
      <section id="content">

        <div className="container">

          <div className="language-switch">

            <button
              id="#en"
              onClick={() => setLang('en')}
              className={ lang==="en" ? 'active' : null}
            >
              English
            </button>

            <button
              id="de"
              onClick={() => setLang('de')}
              className={ lang==="de" ? 'active' : null}
            >
              Deutsch
            </button>

          </div>
      
          { lang==="de" ?  <Text.DatenschutzDe /> : <Text.DatenschutzEn /> }

        </div>

      </section>

    </Layout>

  );
}

export default App;
