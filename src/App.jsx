import React from "react";
import { SVGSource } from "./assets/image/svg/Sprites";
import HeadLayout from "./components/HeadLayout";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";

export default function App() {
  return (
    <>
      <SVGSource />
      <HeadLayout>
        <div
          className="text-black m-auto max-w-l shadow-lg"
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
          }}
        >
          <LeftBlock />
          <RightBlock />
        </div>
      </HeadLayout>
    </>
  );
}
