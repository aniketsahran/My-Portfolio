import React from 'react'; 

import { About, Contact, Education, Experience, Footer, Header, OtherInfo, Skills, Websites } from './containers';
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
      <Experience />
      <Cta />
      <Websites />
      <Education />
      <OtherInfo />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;