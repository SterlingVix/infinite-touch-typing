import styled from "styled-components";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Key extends Component {
  static propTypes = {
    isInPractice: PropTypes.bool.isRequired,
    isLastKeyPressed: PropTypes.bool.isRequired,
    keyVal: PropTypes.string.isRequired,
    onKeyClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  // getKeyBackground = isInPractice =>
  //   `background: ${isInPractice ? "lightskyblue" : "lavenderblush"};`;
  // getKeyBoxShadow = isInPractice =>
  //   `box-shadow: ${
  //     isInPractice ? `3px 3px 5px` : `7px 7px 7px`
  //   } 0px rgba(0, 0, 0, 0.66);`;

  setKeyColor = isInPractice => `
    background: ${isInPractice ? "lightskyblue" : "lavenderblush"};
    box-shadow: ${
      isInPractice ? `3px 3px 5px` : `7px 7px 7px`
    } 0px rgba(0, 0, 0, 0.66);
  `;

  handleKeyClick = () => {
    const { keyVal, onKeyClick } = this.props;
    onKeyClick(keyVal);
  };

  render = () => {
    const { isInPractice, isLastKeyPressed, keyVal } = this.props;

    const KeyChar = styled.div`
      // border: solid 1px black;
      ${this.setKeyColor(isInPractice)}
      border-radius: 0.33em;
      color: black;
      cursor: pointer;
      font-weight: ${isLastKeyPressed ? `700` : `500`};
      margin: 0 0.2em;
      padding: 1em;
      text-decoration: ${isLastKeyPressed ? `underline` : `none`};
      user-select: none;
      width: 1em;

      &:hover {
        ${this.setKeyColor(!isInPractice)}
        opacity: 0.5;
      }
    `;

    return <KeyChar onClick={this.handleKeyClick}>{keyVal}</KeyChar>;
  };
}
