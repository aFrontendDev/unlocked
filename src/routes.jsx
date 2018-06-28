import React from 'react';
import {
  Switch, Route
} from 'react-router-dom';

// Pages
import DynamicPage from './pages/dynamic/index.jsx';
import FeedPage from './pages/feedPage/feedPage';
import ProfilePage from './pages/profile/profile';

class Routes extends React.Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route exact path="/dynamic/:anId" component={DynamicPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route component={FeedPage} />
      </Switch>
    )
  }
}

export default Routes;