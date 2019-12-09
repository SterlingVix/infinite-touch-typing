import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  border: solid 1px black;
  width: 100%;
  padding: 1em;
`;

const PromptText = styled.div`
  font-size: 4em;
`;

const CurrentKeys = styled.div`
  font-size: 3em;
`;

export default class Prompt extends Component {
  static propTypes = {
    currentKey: PropTypes.string.isRequired
  };

  render = () => (
    <div>
      <div>
        <PromptText>Prompt</PromptText>
        <CurrentKeys>{this.props.currentKey}</CurrentKeys>
      </div>
    </div>
  );
}
