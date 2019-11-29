import InputArea from "./InputArea";
import Keyboard from "./Keyboard";
import Prompt from "./Prompt";
import React, { Component } from "react";
import Stats from "./Stats";

class App extends Component {
  render = () => {
    return (
      <div>
        <Prompt />
        <InputArea />
        <Keyboard />
        <Stats />
      </div>
    );
  };
}

App.propTypes = {};

export default App;
