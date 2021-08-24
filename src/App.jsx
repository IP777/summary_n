import React from "react";
import styled from "styled-components";
import HeadLayout from "./components/HeadLayout";

const StyledMain = styled.div`
  max-width: 1024px;
  margin: auto;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  padding: 0 10px;
`;

export default function App() {
  return (
    <HeadLayout>
      <StyledMain>FrontEnd developer</StyledMain>
    </HeadLayout>
  );
}
