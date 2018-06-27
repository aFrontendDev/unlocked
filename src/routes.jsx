import React from 'react';
import {
  Switch, Route
} from 'react-router-dom';

// Pages
import DynamicPage from './pages/dynamic/index.jsx';
import FeedPage from './pages/feedPage/feedPage';

class Routes extends React.Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route exact path="/dynamic/:anId" component={DynamicPage} />
        <Route component={FeedPage} />
      </Switch>
    )
  }
}

export default Routes;