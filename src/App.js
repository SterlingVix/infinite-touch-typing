import _ from "lodash";
import Keyboard from "./keyboard/Keyboard";
import Prompt from "./Prompt";
import React, { Component } from "react";
import Stats from "./Stats";
import styled from "styled-components";
import { defaultConfig } from "./constants/keys.js";
import { genSentence } from "./services/genTestWords";

const AppWrapper = styled.div`
  align-content: center;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 2em);
  justify-content: center;

  &:focus {
    // prevent element border on focus
    outline: none;
  }
`;

const GenNewSentenceButton = styled.button`
  font-size: 1.666em;
  margin: 0 auto 1em auto;
  padding: 0.25em 0.5em;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.score = {};

    this.genNewSentenceState = (
      charactersConfig = this.state.charactersConfig
    ) => {
      // Initialize a new test config.
      return {
        currentSentence: genSentence(charactersConfig),
        lastKeyPressed: "",
        sentenceCursor: 0, // The index of the current letter in test in the sentence.
        typedKey: ""
      };
    };

    this.state = {
      // NOTE: "Key" values should always be upper-case.
      charactersConfig: defaultConfig,
      ...this.genNewSentenceState(defaultConfig) // currentSentence, lastKeyPressed, sentenceCursor, typedKey
    };
  }

  genNewSentence = () => this.setState(this.genNewSentenceState());

  toggleKeyInPractice = keyVal => {
    this.keyMap[keyVal].isInPractice = !this.keyMap[keyVal].isInPractice; // Toggle on/off.

    this.setState({
      keyMap: this.keyMap // FIXME: deduplicate
    });
  };

  validateInput = evt => {
    const { key } = evt;
    const keyPressed = key.toUpperCase();

    this.setState(state => {
      const keyInTest = state.currentSentence[state.sentenceCursor];

      return {
        lastKeyPressed: keyPressed,
        sentenceCursor: _.isEqual(keyPressed, keyInTest)
          ? state.sentenceCursor + 1
          : state.sentenceCursor
      };
    });

    // const scoreForKey = this.score[keyPressed] || 0;
    // this.score[keyPressed] = scoreForKey + 1;
  };

  render = () => {
    const {
      charactersConfig,
      currentSentence,
      lastKeyPressed,
      sentenceCursor
    } = this.state;

    return (
      <AppWrapper onKeyPress={this.validateInput} tabIndex={0}>
        <Prompt
          currentSentence={currentSentence}
          sentenceCursor={sentenceCursor}
        />

        <GenNewSentenceButton onClick={this.genNewSentence}>
          New sentence
        </GenNewSentenceButton>

        <Keyboard
          charactersConfig={charactersConfig}
          lastKeyPressed={lastKeyPressed}
          onKeyClick={this.toggleKeyInPractice}
        />

        <Stats />
      </AppWrapper>
    );
  };
}

export default App;
