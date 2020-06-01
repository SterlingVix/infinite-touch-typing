import _ from "lodash";
import InputArea from "./InputArea";
import Keyboard from "./Keyboard";
import Prompt from "./Prompt";
import React, { Component } from "react";
import Stats from "./Stats";
import { keyMap, keysLayout } from "./constants/keys.js";
import { genSentence } from "./services/genTestWords";

class App extends Component {
  constructor(props) {
    super(props);

    this.score = {};
    this.keysLayout = keysLayout;
    this.state = {
      currentSentence: genSentence(this.keysLayout),
      keysLayout: this.keysLayout,
      lastKeyPressed: ``,
      sentenceCursor: 0, // The index of the current letter in test in the sentence.
      typedKey: ""
    };
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

    if (_.isEqual(_.toLower(key), _.toLower(keyInTest))) {
      const scoreForKey = this.score[key] || 0;
      this.score[key] = scoreForKey + 1;
      this.setState({
        lastKeyPressed: key, // TODO: dedupe me.
        sentenceCursor: sentenceCursor + 1,
        typedKey: ""
      });
      this.inputEl.focus();
      return true;
    } else {
      this.setState({
        lastKeyPressed: key,
        typedKey: key
      });
    }
    return false;
  };

  render = () => {
    const { currentSentence, sentenceCursor } = this.state;
    return (
      <div>
        <Prompt
          currentSentence={currentSentence}
          sentenceCursor={sentenceCursor}
        />
        <InputArea
          typedKey={this.state.typedKey}
          onRef={el => (this.inputEl = el)}
          validateInput={this.validateInput}
        />
        <Keyboard
          keysLayout={this.state.keysLayout}
          lastKeyPressed={this.state.lastKeyPressed}
          onKeyClick={this.toggleKeyInPractice}
        />
        <Stats />
      </div>
    );
  };
}

App.propTypes = {};

export default App;
