import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full border-r border-zinc-700 overflow-y-auto">
      <h1 className="py-5 border-b border-zinc-700">Recents</h1>

      {"abcde".split("").map((item) => (
        <div className="flex flex-col items-center justify-center h-20 border-b border-zinc-700">
          <h1 className="text-2xl font-bold">Hi</h1>
          <h2 className="text-sm font-light">Hay</h2>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
