import React, { Component } from "react";
import { connect } from "react-redux";

import * as menuActions from '../../actions/menuActions';

import userprofileImg from '../../_assets/images/userprofile.jpg';


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
          <svg className="header__logo-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 328">
            <path d="M215.6 78.5l-64-11.5 7.6 21.5 21.9 3.9c-2.1 1.8-4.2 3.9-6.1 6.3-7.9 10.1-10.7 23.3-8.2 39.1 4.8 31.1-15.1 37.7-17.2 38.3L113 189.3l-5.6 28.6-3-1.8-11.5-32-21.8-2 17.1 47.5 59.4 34.5 67.7-11.7 44.3-52.5.2-68.7-44.2-52.7zm-76.7 157.7l-13.4-7.8 4.7-24.2 24.8-8.9c13.8-3.8 37.5-21.1 31.4-60.5-1.6-10.1-.2-18.1 4.2-23.8 6.5-8.5 18-9.8 18-9.8v-.3l9 10.8c-4.2 2.5-8.4 5.9-12 10.5-7.9 10.1-10.7 23.3-8.2 39.1 4.8 31.1-15.1 37.7-17.2 38.3l-36.6 13.1-4.7 23.5zm100.7-43.6l-35 41.5-46.7 8.1 2.9-14.6 24.8-8.9c13.8-3.8 37.5-21.1 31.4-60.5-1.6-10.1-.2-18.1 4.2-23.8 2.7-3.5 6.2-5.8 9.4-7.2l9.3 11.1-.3 54.3zM444.5 167.3v-1.1c13.7-6.7 22.4-19.7 22.4-36.5 0-14.5-4.6-27-13.9-36.1l-1.6 1.2L465.8 84c-10.4-10.1-26.5-16-48.6-16h-71.9v105.8l-13 9.7v80.8H401c47 0 69.1-18.7 69.1-54.7.1-18.8-8.4-33.8-25.6-42.3zm-54.3-61.5h24.9c7.1 0 11.9 1.7 14.9 4.9l-12.9 9.6c2.7 3 3.9 7.3 3.9 12.8 0 11.5-5.2 17.6-18.9 17.6h-24.9l13-10.1v-34.8zm7.6 120.4h-20.5v-39.5h22.4c15.6 0 24.3 4.8 24.3 19.7 0 15.3-8.8 19.8-26.2 19.8zM1218.8 68l-32.3 63.8-31.4-62.2-.7-1.6h-51.9l58.1 114.9-41.1 81.3h50.1L1268.9 68zM485.5 264.2V68h113.1v39.8h-70.1v36.5h70.1V184h-70.1v40.4h70.1v39.8H485.5zM719 68l62.3 196.3h-48.8l-11.2-38.4h-48.8l-11.2 38.4h-48.8L674.7 68H719zm-7 117.7l-14.6-56.9h-1.1l-14.6 56.9H712zM781.9 197.8V68h46.5v127.3c0 18.5 5.6 30.6 26.6 30.6s26.6-12.1 26.6-30.6V68h46.5v129.8c0 43.5-24.7 68.7-73.2 68.7s-73-25.2-73-68.7zM1092.7 68v42.6h-50.8v153.7h-46.5V110.6h-51V68h148.3zM1617.2 68l62.3 196.3h-48.8l-11.2-38.4h-48.8l-11.2 38.4h-48.8L1572.9 68h44.3zm-7.1 117.7l-14.6-56.9h-1.1l-14.6 56.9h30.3zM1788.9 68l-32.3 63.8-31.5-62.2-.7-1.6h-51.8l58.1 114.9-41.1 81.3h50.1L1839 68zM1500.5 225.4c2.8-6.8 4.2-14.8 4.2-23.8 0-18.9-8.5-34-25.9-42.6v-1.1c13.8-6.7 22.6-20 22.6-36.9 0-31-20.7-52.9-63.1-52.9h-72.4v86.8l13.2 6.9v101.9h69.1c35.6 0 57-10.7 65.5-31.4l-13.2-6.9zm-89.5-119h25.1c13.8 0 19 6.2 19 18.1 0 11.6-5.2 17.8-19 17.8H1411v-35.9zm33.9 119h-20.7v-40l-12.9-6.8h22.3c15.7 0 24.5 4.9 24.5 20 0 1.6-.1 3.1-.3 4.5l13.2 6.9c-1.7 11.8-10.4 15.4-26.1 15.4z"/>
          </svg>
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
