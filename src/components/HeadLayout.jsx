import styled from "styled-components";
import React from "react";
import { theme } from "../assets/theme";

const StyledHeader = styled.div`
  background-color: ${theme.color.brown};
  height: 60px;
  color: #fff;
  .head_wrapper {
    height: inherit;
    margin: auto;
    display: flex;
    align-items: center;
    max-width: 1024px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 25px;
    border: 1px solid #fff;
    padding: 0 10px;
  }
`;

export default function HeadLayout({ children }) {
  return (
    <>
      <section>
        <StyledHeader>
          <div className="head_wrapper">Summary</div>
        </StyledHeader>
      </section>
      <section>{children}</section>
    </>
  );
}
