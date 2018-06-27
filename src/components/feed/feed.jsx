import React, { Component } from "react";
import { connect } from "react-redux";

import feedData from './feedMockData.js';

import FeedPost from './feedPost';

// import styles from './_feed.scss';


class Feed extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const feed = feedData;
    console.log(feed);

    return (
      <div className="feed">

      {
        feed.map((data, index) => {

          return(
            <FeedPost key={`feed-post__${index}`} data={data}/>
          )
        })
      }

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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
