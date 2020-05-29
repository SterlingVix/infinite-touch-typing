import _ from "lodash";
import InputArea from "./InputArea";
import Keyboard from "./Keyboard";
import Prompt from "./Prompt";
import React, { Component } from "react";
import Stats from "./Stats";
import { keyMap, keysLayout } from "./constants/keys.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.score = {};
    this.keysLayout = keysLayout;
    this.state = {
      currentKey: `q`,
      keysLayout: this.keysLayout,
      typedKey: ""
    };
  }

  componentDidMount() {
    this.setState({
      currentKey: this.getRandomKey()
    });
  }

  getRandomKey = () => {
    const activeKeys = getActiveKeys(this.state.keysLayout);

    return _.sample(activeKeys).keyVal;
  };

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

    if (_.isEqual(_.toLower(key), _.toLower(this.state.currentKey))) {
      const scoreForKey = this.score[key] || 0;
      this.score[key] = scoreForKey + 1;
      this.setState({
        currentKey: this.getRandomKey(),
        typedKey: ""
      });
      this.inputEl.focus();
      return true;
    } else {
      this.setState({
        typedKey: key
      });
    }
    return false;
  };

  render = () => {
    return (
      <div>
        <Prompt currentKey={this.state.currentKey} />
        <InputArea
          typedKey={this.state.typedKey}
          onRef={el => (this.inputEl = el)}
          validateInput={this.validateInput}
        />
        <Keyboard
          keysLayout={this.state.keysLayout}
          onKeyClick={this.toggleKeyInPractice}
        />
        <Stats />
      </div>
    );
  };
}

App.propTypes = {};

export default App;
