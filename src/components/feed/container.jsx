import React, { Component } from "react";
import { connect } from "react-redux";

import Feed from './feed';

// import styles from './_container.scss';


class FeedContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {

    return (
      <div className="feed-container">
        <Feed />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
