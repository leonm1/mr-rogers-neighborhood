import React from 'react';
import logo from './logo.png';
import houseImg from './placeholder.png';
import OptionSection from './OptionSection';
import './App.scss';

function App() {
  return (
    <div className='App-Main'>
      <header className='App-header'>
        <div>
          <img src={logo} alt='logo' />
          <nav>
            <a nav-active='true' className='home' href='/'>
              Home
            </a>
            <a className='about' href='/'>
              About Us
            </a>
            <a className='about' href='/'>
              Compare
            </a>
            <a className='contact' href='/'>
              Contact Us
            </a>
          </nav>
        </div>
      </header>
      <main>
        <span className='left'>
          <h1>
            Enjoy the <em>Perfect</em> Afternoon
          </h1>
          <h2>
            Mr Roger's Neighborhood allows you to plan out an afternoon spot
            with everything you're looking to do all within walking distance
            from each other.
          </h2>
          <button
            onClick={() =>
              document
                .getElementById('option-section')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Start Planning
          </button>
        </span>
        <span className='right'>
          <img className='hero-img' src={houseImg} alt='house'></img>
        </span>
      </main>
      <div id='scroll-notif'>Scroll to view more</div>
      <OptionSection className='option-section' />
    </div>
  );
}

export default App;
