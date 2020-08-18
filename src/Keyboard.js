import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Key from "./Key";
import _ from "lodash";

const KeyboardWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const KeyboardRow = styled.div`
  border: solid 1px red;
  display: flex;
  padding: 1em;
  padding-left: ${props => `${1.5 * props.rowIdx + 1}em`};
`;

export default class Keyboard extends Component {
  static propTypes = {
    keysLayout: PropTypes.array.isRequired,
    lastKeyPressed: PropTypes.string.isRequired,
    onKeyClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render = () => {
    const { keysLayout, lastKeyPressed } = this.props;

    return (
      <KeyboardWrapper>
        <div>
          {keysLayout.map((row, rowIdx) => (
            <KeyboardRow key={`rowIdx-${rowIdx}`} rowIdx={rowIdx}>
              {row.map((keyConfig, keyIdx) => (
                <Key
                  key={`keyIdx-${keyIdx}`}
                  isLastKeyPressed={
                    _.toLower(keyConfig.keyVal) === _.toLower(lastKeyPressed)
                  }
                  isInPractice={keyConfig.isInPractice}
                  keyVal={keyConfig.keyVal}
                  onKeyClick={this.props.onKeyClick}
                />
              ))}
            </KeyboardRow>
          ))}
        </div>
      </KeyboardWrapper>
    );
  };
}
