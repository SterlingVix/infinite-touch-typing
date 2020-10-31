import _ from "lodash";
import Key from "../Key";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const KeyRow = styled.div`
  border: solid 1px red;
  display: flex;
  padding: 1em;
  padding-left: ${props => `${1.5 * props.rowIdx + 1}em`};
`;

const KeyboardRow = ({
  charactersConfig,
  lastKeyPressed,
  onKeyClick,
  row,
  rowIdx
}) => (
  <KeyRow key={`rowIdx-${rowIdx}`} rowIdx={rowIdx}>
    {row.map(keyChar => (
      <Key
        isInPractice={charactersConfig[keyChar].isInPractice}
        isLastKeyPressed={
          keyChar === lastKeyPressed // NOTE: lastKeyPressed is always upper-case.
        }
        key={`keyChar-${keyChar}-${charactersConfig[keyChar].isInPractice}`}
        keyVal={keyChar}
        onKeyClick={onKeyClick}
      />
    ))}
  </KeyRow>
);

KeyboardRow.propTypes = {
  // TODO: associate the keyboard layout w/ keys.keyboards
  charactersConfig: PropTypes.object.isRequired,
  row: PropTypes.array.isRequired,
  lastKeyPressed: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired
};

export default KeyboardRow;
