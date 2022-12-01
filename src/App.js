import React from 'react';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

import 'kromac-ui/src/css/style.css';
import './css/App.style.css';

const App = () => (
  <div className="App">
    <section className="main">
      <Contact />
      <section className="summary kromac-scroll">
        <AboutMe />
        <Skills />
        <Experience />
        <Portfolio />
      </section>
    </section>
  </div>
);

export default App;
