import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { keyboardRows } from "./constants/keys.js";

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
  }

  render = () => (
    <KeyboardWrapper>
      {keyboardRows.map((row, rowIdx) => (
        <KeyboardRow key={`rowIdx-${rowIdx}`}>
          {row.map((keyChar, keyIdx) => (
            <KeyChar key={`keyIdx-${keyIdx}`}>{keyChar}</KeyChar>
          ))}
        </KeyboardRow>
      ))}
    </KeyboardWrapper>
  );
}
