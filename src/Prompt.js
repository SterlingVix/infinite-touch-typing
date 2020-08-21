import _ from "lodash";
import PromptLetter from "./PromptLetter";
import PropTypes from "prop-types";
import React, { Component } from "react";
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

let counter = 0;

export default class Prompt extends Component {
  static propTypes = {
    currentSentence: PropTypes.string.isRequired,
    sentenceCursor: PropTypes.number.isRequired
  };

  render = () => {
    counter++;
    console.log('firePrompt!!!', counter);
    const { currentSentence, sentenceCursor } = this.props;

    return (
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
  };
}
