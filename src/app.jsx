import React from 'react';
// Routing
import Routes from './routes.jsx';

import Header from './components/header/header';
import MainNav from './components/mainNav/mainNav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="wrapper">
        
        {/* <div className="intro">
          <div className="svg-mask svg-mask--bb">
            <svg viewBox="0 0 57 81">
              <defs>
                <clipPath id="bbClipPath">
                  <path d="M26.3338756,65 L18,65 L18,49 L27.1114274,49 C33.445303,49 37,50.9463842 37,57 C37,63.1622663 33.445303,65 26.3338756,65 Z M23.6565528,15 L34.5016593,15 C37.6071151,15 39.6993723,15.6753201 41,16.9787518 L35.3770315,20.8194346 C36.5494283,22.0152472 37.0675858,23.7319523 37.0675858,25.9591483 C37.0675858,30.5463638 34.8030455,33 28.8446703,33 L18,33 L18,32.859175 L23.6565528,28.9660829 L23.6565528,15 Z M46.369184,41.0350677 L46.369184,40.5945451 C52.0236091,37.8420017 55.6435175,32.4471487 55.6435175,25.5106732 C55.6435175,19.5208877 53.7418755,14.3708612 49.8963697,10.6047443 L49.2431718,11.0898559 L55.2121916,6.62270123 C50.927909,2.45899935 44.252293,0 35.1120762,0 L5.36839239,0 L5.36839239,43.6732487 L0,47.6602461 L0,81 L28.3872013,81 C47.839914,81 57,73.293539 57,58.4301348 C57,50.7232609 53.4943392,44.5580095 46.369184,41.0350677 Z"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div> */}

        <Header />
        <MainNav />
        <main className="main" id="main">
          <Routes />
        </main>
      </div>
    );
  }
}
