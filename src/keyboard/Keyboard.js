import _ from "lodash";
import KeyboardRow from "./KeyboardRow";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { keyboards } from "../constants/keys.js";

const {
  en_US: { keyboardLayout }
} = keyboards;

const KeyboardWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Keyboard = ({ charactersConfig, lastKeyPressed, onKeyClick }) => (
  <KeyboardWrapper>
    <div>
      {_.map(keyboardLayout, (row, rowIdx) => {
        return (
          <KeyboardRow
            charactersConfig={charactersConfig}
            key={`rowIdx-${rowIdx}`}
            lastKeyPressed={lastKeyPressed}
            onKeyClick={onKeyClick}
            row={row}
            rowIdx={rowIdx}
          />
        );
      })}
    </div>
  </KeyboardWrapper>
);

Keyboard.propTypes = {
  // TODO: associate the keyboard layout w/ keys.keyboards
  charactersConfig: PropTypes.object.isRequired,
  lastKeyPressed: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired
};

export default Keyboard;
