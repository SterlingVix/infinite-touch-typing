import styled from "styled-components";
import PropTypes from "prop-types";
import React, { Component } from "react";

const setKeyColor = isInPractice => `
    background: ${isInPractice ? "lightskyblue" : "lavenderblush"};
    box-shadow: ${
      isInPractice ? `3px 3px 5px` : `7px 7px 7px`
    } 0px rgba(0, 0, 0, 0.66);
  `;

const KeyChar = styled.div`
  ${props => setKeyColor(props.isInPractice)}
  border-radius: 0.33em;
  color: black;
  cursor: pointer;
  font-weight: ${props => (props.isLastKeyPressed ? `700` : `500`)};
  margin: 0 0.2em;
  padding: 1em;
  text-decoration: ${props => (props.isLastKeyPressed ? `underline` : `none`)};
  user-select: none;
  width: 1em;

  &:hover {
    ${props => setKeyColor(!props.isInPractice)}
    opacity: 0.5;
  }
`;

class Key extends Component {
  handleKeyClick = () => {
    const { keyVal, onKeyClick } = this.props;
    onKeyClick(keyVal);
  };

  render = () => {
    const { isInPractice, isLastKeyPressed, keyVal } = this.props;

    return (
      <KeyChar
        isInPractice={isInPractice}
        isLastKeyPressed={isLastKeyPressed}
        onClick={this.handleKeyClick}
      >
        {keyVal}
      </KeyChar>
    );
  };
}

Key.propTypes = {
  isInPractice: PropTypes.bool.isRequired,
  isLastKeyPressed: PropTypes.bool.isRequired,
  keyVal: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired
};

export default Key;
