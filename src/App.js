import _ from "lodash";
import InputArea from "./InputArea";
import Keyboard from "./Keyboard";
import Prompt from "./Prompt";
import React, { Component } from "react";
import Stats from "./Stats";
import { keyboardRows } from "./constants/keys.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.score = {};
    this.keysInPractice = _.flatten(keyboardRows);
    this.state = {
      currentKey: this.getRandomKey()
    };
  }

  getRandomKey = () => {
    const thisKey = this.keysInPractice[
      _.random(0, this.keysInPractice.length)
    ];
    console.debug(`, thisKey`, thisKey);
    return thisKey;
  };

  validateInput = evt => {
    const { key } = evt;

    if (_.isEqual(_.toLower(key), _.toLower(this.state.currentKey))) {
      const scoreForKey = this.score[key] || 0;
      this.score[key] = scoreForKey + 1;
      this.setState({
        currentKey: this.getRandomKey()
      });
      this.inputEl.focus();
      return true;
    }
    return false;
  };

  render = () => {
    return (
      <div>
        <Prompt
          currentKey={this.state.currentKey}
          key={`prompt-${this.state.currentKey}`}
        />
        <InputArea
          key={`input-${this.state.currentKey}`}
          onRef={el => (this.inputEl = el)}
          validateInput={this.validateInput}
        />
        <Keyboard />
        <Stats />
      </div>
    );
  };
}

App.propTypes = {};

export default App;
