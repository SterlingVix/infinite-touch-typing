import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  keyboardRow: {
    border: "solid 1px red",
    display: "flex",
    padding: "1em"
  },
  keyChar: {
    border: "solid 1px black",
    borderRadius: `0.33em`,
    margin: "0.1em",
    padding: "1em"
  },
  keyboard: {
    fontFamily: "courier monospace"
  }
};

export default class Keyboard extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.keyboardRows = [
      [`Q`, `W`, `E`, `R`, `T`, `Y`, `U`, `I`, `O`, `P`, `[`, `]`, `\\`],
      [`A`, `S`, `D`, `F`, `G`, `H`, `J`, `K`, `L`, `;`, `'`],
      [`Z`, `X`, `C`, `V`, `B`, `N`, `M`, `.`, `/`]
    ];
  }

  render = () => (
    <div style={styles.keyboard}>
      {this.keyboardRows.map((row, rowIdx) => (
        <div style={styles.keyboardRow} key={`rowIdx-${rowIdx}`}>
          {row.map((keyChar, keyIdx) => (
            <div style={styles.keyChar} key={`keyIdx-${keyIdx}`}>
              {keyChar}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
