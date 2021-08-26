import React from "react";

export default function HeadLayout({ children }) {
  return (
    <>
      <section>
        <div className="h-14">
          <div className="flex items-center text-white m-auto max-w-l h-full bg-gray-400 pl-8 text-xl">
            Summary
          </div>
        </div>
      </section>
      <section>{children}</section>
    </>
  );
}
