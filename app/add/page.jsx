"use client";

import { useState } from "react";

const Add = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <form className="text-center font-bold p-20">
        <input
          className="border border-slate-800 outline-0 px-4 py-2 rounded"
          placeholder="Enter recipe title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Add;
