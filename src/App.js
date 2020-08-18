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
    const { currentSentence, sentenceCursor } = this.state;
    const { key } = evt;
    const keyInTest = currentSentence[sentenceCursor];

    this.setState({
      lastKeyPressed: key
    });

    if (_.isEqual(key.toLowerCase(), keyInTest.toLowerCase())) {
      const scoreForKey = this.score[key] || 0;
      this.score[key] = scoreForKey + 1;
      this.setState({
        sentenceCursor: sentenceCursor + 1
      });
      return true;
    }
    return false;
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
