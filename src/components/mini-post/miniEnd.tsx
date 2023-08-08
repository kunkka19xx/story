import React, { useState } from "react";

function MiniEnd() {
  const [duration, setDuration] = useState(10);
  const [createdDate, setCreatedDate] = useState(new Date());

  const calDuration = () => {
    setDuration(10);
  };

  return (
    <section className="font-thin italic h-full">
      <div className="relative h-full grid-rows-2 flex flex-col">
        <div className="row-span-1"></div>
        <div className="absolute inset-x-0 bottom-0 lg:flex md:flex flex-row mt-1 sm:flex-wrap">
          <p className="mr-2">Created at: {createdDate.toDateString()},</p>
          <p className="mr-2">{duration} minutes to read.</p>
          <button>Tags</button>
        </div>
      </div>
    </section>
  );
}

export default MiniEnd;
