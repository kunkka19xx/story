import React, { useState } from "react";

function MiniEnd() {
  const [duration, setDuration] = useState(10);
  const [createdDate, setCreatedDate] = useState(new Date());

  const calDuration = () => {
    setDuration(10);
  };

  return (
    <section className="font-thin italic">
      <div className="flex flex-row mt-2">
        <p className="mr-2">Created at: {createdDate.toDateString()},</p>
        <div className="mr-2">{duration} minutes to read.</div>
        <button>Tags</button>
      </div>
    </section>
  );
}

export default MiniEnd;
