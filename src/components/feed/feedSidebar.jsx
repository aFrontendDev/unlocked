import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import * as overlayActions from '../../actions/overlayActions';

import trendingData from './_MockDataTrending';
import productsData from './_MockDataProducts';
import followData from './_MockDataFollow';


class FeedSidebar extends Component {

  constructor(props) {
    super(props);

    this.delayA = null;
    this.delayB = null;

    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleAskClick = this.handleAskClick.bind(this);
  }

  handleCreateClick() {
    console.log('create click');
    this.props.openOverlay();
  }

  handleAskClick() {
    console.log('ask click')
  }

  handleBasketClick(prod) {
    const self = this;
    clearTimeout(this.delayA);
    clearTimeout(this.delayB);
    // this.props.addToWishlist();
    const added = document.querySelector(`.${prod}`);
    if (added) {
      added.classList.add('added--in');
      this.delayA = setTimeout(() => {
        added.classList.add('added--out');
        clearTimeout(this.delayA);
      }, 500)

      this.delayB = setTimeout(() => {
        added.classList.remove('added--in');
        added.classList.remove('added--out');
        clearTimeout(this.delayB);
      }, 1000)
    }
  }

  handleWishlistClick() {
    // this.props.addToWishlist(); 
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
                      {/* <img src={item.img} alt="user image" /> */}
                      <div className="svg-mask svg-mask--hex">
                        <svg viewBox="0 0 24 24">
                          <defs>
                            <clipPath id="hexClipPath">
                              <path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z"/>
                            </clipPath>
                          </defs>
                          <image xlinkHref={item.img} x="0" y="0" className="svg-mask-img"/>
                        </svg>
                    </div>
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
                  <div key={`products__${index}`} className="promo-block__thumb product-block">
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
                      <div className="product-block__actions">
                        <button className="btn--unstyled product-block__link" onClick={() => {this.handleBasketClick(`product-added_${index}`)}}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.5 22h-9.5v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v5.181c.482-.114.982-.181 1.5-.181l.5.025v-7.025h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h12.816c-.553-.576-1.004-1.251-1.316-2zm-5.5-18c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm11.5 11c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>
                        </button>
                        
                        <button className="btn--unstyled product-block__link" onClick={() => {this.handleBasketClick(`product-added_${index}`)}}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                            <path d="M19.5,6.4 C21.4501287,6.39572568 23.2806832,7.33947967 24.4083355,8.93052348 C25.5359878,10.5215673 25.8200491,12.5613983 25.17,14.4 L14,22.75 L2.83,14.38 C2.17995087,12.5413983 2.46401222,10.5015673 3.59166452,8.91052348 C4.71931681,7.31947967 6.54987133,6.37572568 8.5,6.38 C10.3399358,6.37266002 12.0794053,7.21838935 13.21,8.67 L14,9.67 L14.79,8.67 C15.9246575,7.22589686 17.6634995,6.38785625 19.5,6.4 Z M19.5,5.4 C17.3543523,5.40003065 15.3272364,6.38410328 14,8.07 C11.8476795,5.33428579 8.01220384,4.59569997 4.99785756,6.33648495 C1.98351127,8.07726992 0.706236478,11.7684691 2,15 L14,24 L26,15 C26.8628113,12.8432271 26.5994854,10.3989147 25.2971044,8.47539809 C23.9947233,6.55188145 21.8229534,5.39974471 19.5,5.4 Z"/>
                          </svg>
                        </button>


                        <a className="btn--unstyled product-block__link" target="_blank" href={item.href}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                            <path d="M14,9 C11.2385763,9 9,11.2385763 9,14 C9,16.7614237 11.2385763,19 14,19 C16.7614237,19 19,16.7614237 19,14 C19,12.6739176 18.4732158,11.402148 17.5355339,10.4644661 C16.597852,9.5267842 15.3260824,9 14,9 Z M14,7.25 C17.75,7.25 21.5,9.5 26,14 C21.5,18.5 17.75,20.75 14,20.75 C10.25,20.75 6.5,18.5 2,14 C6.5,9.5 10.25,7.25 14,7.25 Z M14,18 C11.790861,18 10,16.209139 10,14 C10,11.790861 11.790861,10 14,10 C16.209139,10 18,11.790861 18,14 C18,15.060866 17.5785726,16.0782816 16.8284271,16.8284271 C16.0782816,17.5785726 15.060866,18 14,18 Z M3.43,14 C7.55,18 10.84,19.75 14,19.75 C17.16,19.75 20.45,18 24.57,14 C20.45,10 17.16,8.25 14,8.25 C10.84,8.25 7.55,10 3.43,14 Z"/>
                          </svg>
                        </a>

                        <div className={`added product-added_${index}`}>
                          <p>Added!</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
  openOverlay: overlayActions.overlayOpenAction
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedSidebar);
