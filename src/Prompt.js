import _ from "lodash";
import React, { Component } from "react";
import PromptLetter from "./PromptLetter";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  border: solid 1px black;
  width: 100%;
  padding: 1em;
`;

const PromptText = styled.div`
  font-size: 4em;
`;

const CurrentSentence = styled.div`
  font-size: 3em;
`;

export default class Prompt extends Component {
  static propTypes = {
    currentSentence: PropTypes.string.isRequired,
    sentenceCursor: PropTypes.number.isRequired
  };

  render = () => {
    const { currentSentence, sentenceCursor } = this.props;

    return (
      <div>
        <div>
          <CurrentSentence>
            {_.map(currentSentence, (letter, index) => (
              <PromptLetter
                isLetterInTest={index === sentenceCursor}
                key={index}
                letter={currentSentence[index]}
              />
            ))}
          </CurrentSentence>
        </div>
      </div>
    );
  };
}
