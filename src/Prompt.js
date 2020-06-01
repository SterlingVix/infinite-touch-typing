import React, { Component } from "react";
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

    console.log("Prompt.currentSentence:", currentSentence);
    console.log("Prompt.sentenceCursor:", sentenceCursor);
    console.log("keyInTest:", currentSentence[sentenceCursor]);

    return (
      <div>
        <div>
          <PromptText>Prompt</PromptText>
          <CurrentSentence>{currentSentence}</CurrentSentence>
        </div>
      </div>
    );
  };
}
