import Key from "./Key";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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

const Keyboard = ({ keysLayout, lastKeyPressed, onKeyClick }) => (
  <KeyboardWrapper>
    <div>
      {keysLayout.map((row, rowIdx) => (
        <KeyboardRow key={`rowIdx-${rowIdx}`} rowIdx={rowIdx}>
          {row.map((keyConfig, keyIdx) => {
            return (
              <Key
                key={`keyIdx-${keyIdx}`}
                isLastKeyPressed={
                  keyConfig.keyVal === lastKeyPressed.toUpperCase()
                }
                isInPractice={keyConfig.isInPractice}
                keyVal={keyConfig.keyVal}
                onKeyClick={onKeyClick}
              />
            );
          })}
        </KeyboardRow>
      ))}
    </div>
  </KeyboardWrapper>
);

Keyboard.propTypes = {
  keysLayout: PropTypes.array.isRequired,
  lastKeyPressed: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired
};

export default Keyboard;
