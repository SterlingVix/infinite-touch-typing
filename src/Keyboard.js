import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

const KeyboardWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const KeyboardRow = styled.div`
  border: solid 1px red;
  display: flex;
  padding: 1em;
`;

const KeyChar = styled.div`
  border: solid 1px black;
  border-radius: 0.33em;
  margin: 0.1em;
  padding: 1em;
`;

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
    <KeyboardWrapper>
      {this.keyboardRows.map((row, rowIdx) => (
        <KeyboardRow key={`rowIdx-${rowIdx}`}>
          {row.map((keyChar, keyIdx) => (
            <KeyChar key={`keyIdx-${keyIdx}`}>{keyChar}</KeyChar>
          ))}
        </KeyboardRow>
      ))}
    </KeyboardWrapper>
  );
}
