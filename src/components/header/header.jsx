import React, { Component } from "react";
import { connect } from "react-redux";

import * as menuActions from '../../actions/menuActions';

import userprofileImg from '../../_assets/images/userprofile.jpg';
import logo from '../../_assets/images/trybe-logo.png';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.props.menuChange()
  }

  render() {

    return (
      <header className="header">
        <div className="header__menu">
          <button onClick={this.handleMenuClick} className="btn--unstyled header__menu-btn">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
          </button>
        </div>
        
        <a href="/" className="header__logo">
          <h1 className="header__logo-title"><img src={logo} alt="Trybelogo" className="header__logo-img" /><span className="visually-hidden">Trybe</span></h1>
        </a>

        <div className="header__actions">
          <button className={`btn--unstyled header__action header__user`}>
            {/* <img className="header__user-img" src={userprofileImg} alt="user image" /> */}
            <div className="svg-mask svg-mask--hex">
                {/* <img src={data.user.img} alt="user image" className="post__user-img" /> */}
                <svg viewBox="0 0 24 24">
                  <defs>
                    <clipPath id="hexClipPath">
                      <path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z"/>
                    </clipPath>
                  </defs>
                  <image xlinkHref={userprofileImg} x="0" y="0" className="svg-mask-img"/>
                </svg>
            </div>
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
  menuChange: menuActions.menuAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
