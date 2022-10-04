import React from 'react'; 

import { About, Contact, Education, Experience, Footer, Header, Skills, Websites } from './containers';
import { Cta, Navbar } from './components';
import './app.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Skills />
      <Websites />
      <Cta />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;