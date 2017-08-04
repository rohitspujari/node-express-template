import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class Modal extends Component {
  componentDidMount() {
    // window.$('.carousel').carousel();
    // window.$('.materialboxed').materialbox();
    window.$('ul.tabs').tabs();
  }
  render() {
    return <div>Modal</div>;
  }
}
