import Header from "@/components/header";
import React from "react";

function Tech() {
  return (
    <section>
      <div className="z-0 pb-16">
        <Header></Header>
      </div>
      <div className="flex flex-row">
        <div className="w-1/6 border-r border-gray-500"></div>
        <div className="w-2/3 pl-2 pr-2">Tech</div>
        <div className="w-1/6 border-l border-gray-500"></div>
      </div>
    </section>
  );
}

export default Tech;
