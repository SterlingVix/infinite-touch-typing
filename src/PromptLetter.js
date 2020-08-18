import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

const Letter = styled.span`
  text-decoration: ${props => (props.isLetterInTest ? `underline` : `none`)};
  color: ${props => (props.isLetterDone ? `grey` : `black`)};
`;

export default class PromptLetter extends Component {
  static propTypes = {
    isLetterDone: PropTypes.bool.isRequired,
    isLetterInTest: PropTypes.bool.isRequired,
    letter: PropTypes.string.isRequired
  };

  render = () => {
    const { isLetterDone, isLetterInTest, letter } = this.props;

    return (
      <Letter isLetterDone={isLetterDone} isLetterInTest={isLetterInTest}>
        {letter}
      </Letter>
    );
  };
}
