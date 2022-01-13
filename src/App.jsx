import React, { Suspense } from "react";
import { SVGSource } from "./assets/image/svg/Sprites";
import HeadLayout from "./components/HeadLayout";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";
import { SnackbarProvider, useSnackbar } from "notistack";
import { setSnackbar } from "./utils/snackbar";
import styled from "styled-components";

const StyledMain = styled.div`
  height: calc(100vh - 80px) !important;
  display: grid;
  grid-template-columns: 320px 1fr;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
  @media print {
    height: 100%;
    padding: 15px;
    grid-template-columns: 320px 1fr;
  }
`;

function App() {
  setSnackbar(useSnackbar());
  useSnackbar();
  return (
    <Suspense fallback={"Loading..."}>
      <SnackbarProvider>
        <SVGSource />
        <HeadLayout>
          <SVGSource />
          <StyledMain className="m-auto text-black shadow-lg max-w-l">
            <LeftBlock />
            <RightBlock />
          </StyledMain>
        </HeadLayout>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
