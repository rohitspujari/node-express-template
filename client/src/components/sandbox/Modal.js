import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.$('.modal').modal();
  }
  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Modal
        </a>

        <div id="modal1" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-action modal-close waves-effect waves-green btn-flat "
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}
