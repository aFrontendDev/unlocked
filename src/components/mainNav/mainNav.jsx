import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import * as menuActions from '../../actions/menuActions';


class MainNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.menuChange();
  }

  render() {
    const mainNavIn = this.props.menu ? 'main-nav--in' : '';

    return (
      <nav className={`main-nav  ${mainNavIn}`}>
        <ul className="main-nav__ul">
          <li>
            <Link className="main-nav__link" onClick={this.handleClick} to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="main-nav__link" onClick={this.handleClick} to={"/dynamic/123"}>Dynamic page test</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = {
  menuChange: menuActions.menuAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
