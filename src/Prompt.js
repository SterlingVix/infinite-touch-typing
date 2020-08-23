import _ from "lodash";
import PromptLetter from "./PromptLetter";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const PromptWrapper = styled.div`
  border: solid 1px black;
  caret-color: transparent;
  margin-bottom: 3em;
  padding: 3em 0;
  text-align: center;
  width: 100%;
`;

const CurrentSentence = styled.div`
  font-size: 3em;
`;

const Prompt = ({ currentSentence, sentenceCursor }) => (
  <PromptWrapper>
    <CurrentSentence>
      {_.map(currentSentence, (letter, index) => (
        <PromptLetter
          isLetterDone={index < sentenceCursor}
          isLetterInTest={index === sentenceCursor}
          letter={currentSentence[index]}
          key={`promptLetter-${index}`}
        />
      ))}
    </CurrentSentence>
  </PromptWrapper>
);

Prompt.propTypes = {
  currentSentence: PropTypes.string.isRequired,
  sentenceCursor: PropTypes.number.isRequired
};

export default Prompt;
