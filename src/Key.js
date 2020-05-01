import styled from "styled-components";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Key extends Component {
  static propTypes = {
    isInPractice: PropTypes.bool.isRequired,
    keyVal: PropTypes.string.isRequired,
    onKeyClick: PropTypes.func.isRequired
  };

  handleKeyClick = event => {
    const { keyVal, onKeyClick } = this.props;
    console.log(event);
    onKeyClick(keyVal);
  };

  constructor(props) {
    super(props);
  }

  render = () => {
    const { isInPractice, keyVal } = this.props;

    const KeyChar = styled.div`
      border: solid 1px black;
      border-radius: 0.33em;
      margin: 0.1em;
      padding: 1em;
      cursor: pointer;
      user-select: none;
      background-color: ${isInPractice ? "green" : "white"};
    `;

    return <KeyChar onClick={this.handleKeyClick}>{keyVal}</KeyChar>;
  };
}
