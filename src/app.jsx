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
        <Header />
        <MainNav />
        <main className="main" id="main">
          <Routes />
        </main>
      </div>
    );
  }
}
