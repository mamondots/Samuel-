import React from "react";

const Chart = () => {
  return (
    <div>
      <div>
        <h2 className="px-4 py-3 rounded bg-[#DAE6F5] text-[#262626]/70">
          <span className="font-semibold text-[#262626]">
            Read our documentation
          </span>{" "}
          with code samples
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <div className="border py-4">
          <h2 className="text-base font-semibold text-[#262626]/70 border-b pb-4 px-4">
            Chart Title
          </h2>

          <div className="py-12"></div>
        </div>
        <div className="border py-4">
          <h2 className="text-base font-semibold text-[#262626]/70 border-b pb-4 px-4">
            Chart Title
          </h2>

          <div className="py-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
