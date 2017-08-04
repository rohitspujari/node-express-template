import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeWrapper from './StripeWrapper';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <li>
            <a>Still deciding .. </a>
          </li>
        );

      case false: //Logged Out
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        return [
          <li key={0}>
            <a href="/api/logout">Logout</a>
          </li>,
          <li key={2} style={{ margin: '0 35px' }}>
            {`Credits: ${this.props.auth.credits}`}
          </li>,
          <li key={1} style={{ marginRight: 10 }}>
            <StripeWrapper />
          </li>
        ];
    }
  }

  render() {
    //console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper blue" style={{ paddingLeft: 10 }}>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            WhatSay
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
