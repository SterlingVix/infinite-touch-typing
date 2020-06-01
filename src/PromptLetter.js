import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default class PromptLetter extends Component {
  static propTypes = {
    isLetterInTest: PropTypes.bool.isRequired,
    letter: PropTypes.string.isRequired
  };

  render = () => {
    const { isLetterInTest, letter } = this.props;

    const Letter = styled.span`
      text-decoration: ${isLetterInTest ? `underline` : `none`};
    `;

    return <Letter>{letter}</Letter>;
  };
}
