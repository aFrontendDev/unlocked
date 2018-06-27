import React, { Component } from "react";
import { connect } from "react-redux";

import FeedContainer from '../../components/feed/container';

import * as menuActions from '../../actions/menuActions';


class FeedPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {

    return (
      <section className="section section--style-a">
        <header className="section__header visually-hidden">
          <h2 className="section__title">Social feed</h2>
        </header>
        <div className="section__body">
          <FeedContainer />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
