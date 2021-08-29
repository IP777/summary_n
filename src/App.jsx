import React, { Suspense } from "react";

import { SVGSource } from "./assets/image/svg/Sprites";
import HeadLayout from "./components/HeadLayout";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
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
    </Suspense>
  );
}

export default App;
