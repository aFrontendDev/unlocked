import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';

import feedData from './_MockDataFeed';

// import styles from './_feed.scss';


class FeedPost extends Component {

  constructor(props) {
    super(props);

    const id = props.data.id;
    const liked = window.localStorage.getItem(`trybe-liked-${id}`) ? true : false ;

    this.state = {
      animateIn: false,
      liked,
      videoPlaying: false
    }

    this.likedSvg = this.likedSvg.bind(this);
    this.notLikedSvg = this.notLikedSvg.bind(this);
    this.handleLikeBtn = this.handleLikeBtn.bind(this);
    this.handleVideoBtnClick = this.handleVideoBtnClick.bind(this);
    this.handleChatClick = this.handleChatClick.bind(this);
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  likedSvg() {

    return(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
        <path d="M14,24 L26,15 C27.2937635,11.7684691 26.0164887,8.07726992 23.0021424,6.33648495 C19.9877962,4.59569997 16.1523205,5.33428579 14,8.07 C11.8476795,5.33428579 8.01220384,4.59569997 4.99785756,6.33648495 C1.98351127,8.07726992 0.706236478,11.7684691 2,15 L14,24 Z"/>
      </svg>
    )
  }

  notLikedSvg() {

    return(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
        <path d="M19.5,6.4 C21.4501287,6.39572568 23.2806832,7.33947967 24.4083355,8.93052348 C25.5359878,10.5215673 25.8200491,12.5613983 25.17,14.4 L14,22.75 L2.83,14.38 C2.17995087,12.5413983 2.46401222,10.5015673 3.59166452,8.91052348 C4.71931681,7.31947967 6.54987133,6.37572568 8.5,6.38 C10.3399358,6.37266002 12.0794053,7.21838935 13.21,8.67 L14,9.67 L14.79,8.67 C15.9246575,7.22589686 17.6634995,6.38785625 19.5,6.4 Z M19.5,5.4 C17.3543523,5.40003065 15.3272364,6.38410328 14,8.07 C11.8476795,5.33428579 8.01220384,4.59569997 4.99785756,6.33648495 C1.98351127,8.07726992 0.706236478,11.7684691 2,15 L14,24 L26,15 C26.8628113,12.8432271 26.5994854,10.3989147 25.2971044,8.47539809 C23.9947233,6.55188145 21.8229534,5.39974471 19.5,5.4 Z"/>
      </svg>
    )
  }

  handleLikeBtn() {
    const like = !this.state.liked;
    this.setState({
      liked: like
    });

    if (like) {
      window.localStorage.setItem(`trybe-liked-${this.props.data.id}`, 'true');
    } else {
      window.localStorage.removeItem(`trybe-liked-${this.props.data.id}`);
    }
  }

  handleVideoBtnClick(videoId) {
    const targetId = videoId;
    const _Target = document.querySelector(`#${targetId}`);
    if (_Target) {
      const isPaused = _Target.paused;
      if (isPaused) {
        _Target.muted = false;
        _Target.play();
        this.setState({
          videoPlaying: true
        })
      } else {
        _Target.pause();
        this.setState({
          videoPlaying: true
        })
      }
    }
  }

  handleChatClick() {
    console.log('click chat');
  }

  handleThumbClick(data) {
    console.log('click thumb', data);
  }

  onEnter() {
    this.setState({
      animateIn: true
    })
  }

  render() {
    const data = this.props.data;
    const hasLiked = this.state.liked;
    const animateInClass = this.state.animateIn ? 'post--in' : '';
    const likes = this.state.liked ? data.likes + 1 : data.likes;
    const videoId = `video-id__${data.id}`;
    const videoInClass = this.state.videoPlaying ? 'post__media--video-in' : '';

    return (

      <Waypoint onEnter={this.onEnter} bottomOffset="200px">
        <article className={`post ${animateInClass}`}>
          <div className="post__user">
            <img src={data.user.img} alt="user image" className="post__user-img" />
            <div className="post__user-details">
              <p>{data.user.name}</p>
              <p>{data.user.location}</p>
            </div>
          </div>

          <div className={`post__media ${videoInClass}`}>
            {
              data.mainMedia.video 
              ? <video id={videoId} src={data.mainMedia.video.src} poster={data.mainMedia.video.poster} playsInline muted />
              : <picture>
                  <source srcSet={data.mainMedia.image.large.src} media="(min-width: 768px)" />
                  <img srcSet={data.mainMedia.image.small.src} src={data.mainMedia.image.large.src} />
                </picture>
            }

            {
              data.mainMedia.video 
              ? <button className="btn--unstyled post__video-btn" onClick={() => {this.handleVideoBtnClick(videoId)}}>
                  <span className="post__video-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>
                  </span>
                </button>
              : null
            }
          </div>

          {
            data.thumbs && data.thumbs.length ?
              <div className="post__thumbs">
                {
                  data.thumbs.map((thumb, index) => {

                    return(
                      <button key={`post-thumb__${index}`} className="btn--unstyled thumb" onClick={() => {this.handleThumbClick(thumb)} }>
                        <img src={thumb.src} alt="thumb image" />
                        {
                          thumb.video ? 
                            <span className="thumb__icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>
                            </span>
                          : null
                        }
                      </button>
                    )
                  })
                }
              </div>
            : null
          }
          

          <div className="post__social">
            <button className="btn--unstyled post__like" onClick={this.handleLikeBtn}>
              {
                hasLiked
                ? this.likedSvg()
                : this.notLikedSvg()
              }

              <span>{likes}</span>
            </button>

            <button className="btn--unstyled post__chat" onClick={this.handleChatClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"/></svg>
            </button>

          </div>

          <h3 className="post__title">{data.title}</h3>
          <div className="post__copy">
            <p>{data.desc}</p>
          </div>

          {
            data.tags && data.tags.length ?
              <div className="post__tags">
                {
                  data.tags.map((tag, index) => {

                    return (
                      <Link key={`post-tag__${index}`} className="post__tag post__tag-link" to={`/tags/:${tag.id}`}>
                        #{tag.name}
                      </Link>
                    )
                  })
                }
              </div>
            : null
          }

        </article>
      </Waypoint>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPost);
