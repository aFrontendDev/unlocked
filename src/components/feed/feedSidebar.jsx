import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import trendingData from './_MockDataTrending';
import productsData from './_MockDataProducts';
import followData from './_MockDataFollow';


class FeedSidebar extends Component {

  constructor(props) {
    super(props);

    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleAskClick = this.handleAskClick.bind(this);
  }

  handleCreateClick() {
    console.log('create click');
  }

  handleAskClick() {
    console.log('ask click')
  }

  render() {
    const trending = trendingData;
    const products = productsData;
    const follow = followData;

    return (
      <Fragment>
        {/* Create cta */}
        <aside className="cta cta--style-a large-screen">
          <button className="btn btn--style-a cta__btn" onClick={this.handleCreateClick}>
            Create a Look!
          </button>
        </aside>

        {/* Ask cta */}
        <aside className="cta cta--style-a large-screen">
          <button className="btn btn--style-a cta__btn" onClick={this.handleAskClick}>
            Ask a question
          </button>
        </aside>

        {/* Follow */}
        <aside className="promo-block promo-block--style-a large-screen">
          <h3 className="promo-block__title">Follow</h3>
          <div className="promo-block__scroll">
            <div className="promo-block__inner">
            {
              follow.map((item, index) => {

                return (
                  <Link key={`follow__${index}`} className="promo-block__thumb follow-block" to={`/user/:${item.id}`}>
                    <div className="follow-block__img">
                      <img src={item.img} alt="user image" />
                    </div>
                    <div className="follow-block__detail">
                      <span className="follow-block__name">
                        @{item.name}
                      </span>
                      <span className="follow-block__location">
                        {item.location}
                      </span>
                    </div>
                  </Link>
                )
              })
            }
            </div>
          </div>
        </aside>

        {/* Top products */}
        <aside className="promo-block promo-block--style-a large-screen">
          <h3 className="promo-block__title">Trending Products</h3>
          <div className="promo-block__scroll">
            <div className="promo-block__inner">
            {
              products.map((item, index) => {

                return (
                  <a key={`follow__${index}`} target="_blank" className="promo-block__thumb product-block" href={item.href}>
                    <div className="product-block__img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="product-block__detail">
                      <h4 className="product-block__title">
                        {item.name}
                      </h4>
                      <p className="product-block__desc">
                        {item.description}
                      </p>
                      <p className="product-block__price">
                        {item.price}
                      </p>
                    </div>
                  </a>
                )
              })
            }
            </div>
          </div>
        </aside>

        {/* Trending */}
        <aside className="list-block">
          <h3 className="list-block__title">Trending</h3>
          <ul>
            {
              trending.map((item, index) => {

                return (
                  <li key={`trending__${index}`}>
                    <Link className="list-block__link" to={`/tag/:${item.id}`}>
                      #{item.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedSidebar);
