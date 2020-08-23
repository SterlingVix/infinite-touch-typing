import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Letter = styled.span`
  text-decoration: ${props => (props.isLetterInTest ? "underline" : "none")};
  color: ${props => (props.isLetterDone ? "grey" : "black")};
`;

const PromptLetter = ({ isLetterDone, isLetterInTest, letter }) => (
  <Letter isLetterDone={isLetterDone} isLetterInTest={isLetterInTest}>
    {letter}
  </Letter>
);

PromptLetter.propTypes = {
  isLetterDone: PropTypes.bool.isRequired,
  isLetterInTest: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired
};

export default PromptLetter;
