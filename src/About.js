import React, { Component } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  padding: 0.5em;
  width: 100%;
`;

const AboutItem = styled.a`
  border-bottom: 1px solid slategrey;
  padding: 0 1em;
  transition: all;
`;

const iconSize = `1em`;
const Icon = styled.img`
  margin-right: 0.25em;
  height: ${iconSize};
  width: ${iconSize};
`;

export default class About extends Component {
  render = () => (
    <AboutWrapper>
      <AboutItem
        href="https://github.com/SterlingVix/infinite-touch-typing"
        target="_blank"
      >
        <Icon
          alt="Source code - Github"
          src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg"
        />
        Source code
      </AboutItem>
    </AboutWrapper>
  );
}
