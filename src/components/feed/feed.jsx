import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import feedData from './_MockDataFeed';

import FeedPost from './feedPost';
import FeedSidebar from './feedSidebar';

// import styles from './_feed.scss';


class Feed extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const feed = feedData;

    return (
      <Fragment>

      <div className="feed">
      {
        feed.map((data, index) => {

          return(
            <FeedPost key={`feed-post__${index}`} data={data}/>
          )
        })
      }
      </div>

      <div className="feed-sidebar">
        <FeedSidebar />
      </div>

      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
