import React, { Component } from "react";
import { connect } from "react-redux";

import FeedContainer from '../../components/feed/container';

import video1 from "../../_assets/videos/ashleigh_mov_1.mp4";
import video1Still from "../../_assets/images/ashleigh_mov_clip_1.jpg";

import * as overlayActions from '../../actions/overlayActions';


class FeedPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      overlayIn: false
    }

    this._Video = document.querySelector('.overlay__video');

    this.handleOverlayClose = this.handleOverlayClose.bind(this);
  }

  handleOverlayClose() {
    this.props.closeOverlay();
  }

  componentWillReceiveProps(nextProps) {
    const overlayIn = this.state.overlayIn;
    const nextOverlayIn = nextProps.overlay;
    
    if (overlayIn !== nextOverlayIn) {
      this.setState({
        overlayIn: nextProps.overlay
      })
    }

    this._Video = document.querySelector('.overlay__video');

    if (this._Video) {
      if (nextOverlayIn) {
        this._Video.play();
      } else {
        this._Video.pause();
      }
    }
  }

  render() {
    const overlayInClass = this.state.overlayIn ? 'overlay--in' : '';
    const overlayCoverInClass = this.state.overlayIn ? 'overlay-cover--in' : '';

    return (
      <section className="section section--style-a">
        <header className="section__header visually-hidden">
          <h2 className="section__title">Social feed</h2>
        </header>
        <div className="section__body">
          <FeedContainer />
        </div>

        <div className={`overlay ${overlayInClass}`}>
          <button className="btn--unstyled overlay__btn" onClick={this.handleOverlayClose}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>
          </button>
          <div className="overlay__inner">
            <video className="overlay__video" src={video1} poster={video1Still} playsInline />
          </div>
        </div>
        <div className={`overlay-cover ${overlayCoverInClass}`}></div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    overlay: state.overlay
  };
};

const mapDispatchToProps = {
  closeOverlay: overlayActions.overlayOpenAction
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
