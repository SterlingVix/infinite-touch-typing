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

class App extends Component {
  constructor(props) {
    super(props);

    this.keysLayout = keysLayout;
    this.score = {};
    this.state = {
      currentSentence: genSentence(this.keysLayout),
      keysLayout: this.keysLayout,
      lastKeyPressed: ``,
      sentenceCursor: 0, // The index of the current letter in test in the sentence.
      typedKey: ""
    };
    this.count = 0;

    // Bind key listener
    document.addEventListener("keypress", this.validateInput);
  }

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
    const keyPressState =  { lastKeyPressed: keyPressed };

    this.setState((state) => {
      const keyInTest = state.currentSentence[state.sentenceCursor];
      const sentenceCursorState = {};

      try {
        if (_.isEqual(keyPressed, keyInTest.toLowerCase())) {
          sentenceCursorState.sentenceCursor = state.sentenceCursor + 1;
          console.log('sentenceCursorState', sentenceCursorState);
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
    this.count++
    // console.log('fire!!!', this.count);
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
