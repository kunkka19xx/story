import React from "react";

function Comment() {
  return (
    <section>
      <div>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <div className="flex flex-row justify-between">
            <div>
              <label className="text-red-800 italic">Comment</label>
            </div>
            <div className="justify-end mr-2">
              <button className="bg-white-500 border border-black hover:bg-blue-500 hover:font-bold text-black font-thin py-0.5 px-4 rounded">Post</button>
            </div>
          </div>
          <textarea className="peer block mt-1  p-2 w-full h-32 max-h-40 rounded border border-red-800"></textarea>
        </div>
      </div>

      <div>Comment of other user</div>
    </section>
  );
}

export default Comment;
