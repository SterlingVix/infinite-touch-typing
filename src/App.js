import _ from "lodash";
import Keyboard from "./Keyboard";
import Prompt from "./Prompt";
import React, { Component } from "react";
import Stats from "./Stats";
import styled from "styled-components";
import { keyMap, keysLayout } from "./constants/keys.js";
import { genSentence } from "./services/genTestWords";

const AppWrapper = styled.div`
  align-content: center;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 2em);
  justify-content: center;
`;

const GenNewSentenceButton = styled.button`
  font-size: 1.666em;
  margin: 0 auto 1em auto;
  padding: 0.25em 0.5em;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.keysLayout = keysLayout;
    this.score = {};
    this.state = {
      ...this.genNewSentenceState(),
      keysLayout: this.keysLayout
    };
  }

  componentDidMount() {
    // Bind key listener
    document.addEventListener("keypress", this.validateInput);
  }

  genNewSentenceState = () => ({
    currentSentence: genSentence(this.keysLayout),
    lastKeyPressed: "",
    sentenceCursor: 0, // The index of the current letter in test in the sentence.
    typedKey: ""
  });

  genNewSentence = () => this.setState(this.genNewSentenceState());

  toggleKeyInPractice = keyVal => {
    const { row, pos } = keyMap[keyVal];
    this.keysLayout[row][pos].isInPractice = !this.keysLayout[row][pos]
      .isInPractice;

    this.setState({
      keysLayout: this.keysLayout
    });
  };

  validateInput = evt => {
    const { key } = evt;
    const keyPressed = key.toLowerCase();
    const keyPressState = { lastKeyPressed: keyPressed };

    this.setState(state => {
      const keyInTest = state.currentSentence[state.sentenceCursor];
      const sentenceCursorState = {};

      try {
        if (_.isEqual(keyPressed, keyInTest.toLowerCase())) {
          sentenceCursorState.sentenceCursor = state.sentenceCursor + 1;
          console.log("sentenceCursorState", sentenceCursorState);
        }
      } catch (error) {
        console.error(error);
      }

      return {
        ...keyPressState,
        ...sentenceCursorState
      };
    });

    // const scoreForKey = this.score[keyPressed] || 0;
    // this.score[keyPressed] = scoreForKey + 1;
  };

  render = () => {
    const {
      currentSentence,
      keysLayout,
      lastKeyPressed,
      sentenceCursor
    } = this.state;

    return (
      <AppWrapper>
        <Prompt
          currentSentence={currentSentence}
          sentenceCursor={sentenceCursor}
        />

        <GenNewSentenceButton onClick={this.genNewSentence}>
          New sentence
        </GenNewSentenceButton>

        <Keyboard
          keysLayout={keysLayout}
          lastKeyPressed={lastKeyPressed}
          onKeyClick={this.toggleKeyInPractice}
        />

        <Stats />
      </AppWrapper>
    );
  };
}

export default App;
