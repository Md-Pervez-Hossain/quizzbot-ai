import React from "react";

const Home = () => {
  return (
    <div className="mt-16">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="col-span-1">
          <div className="flex flex-col mb-2">
            <label htmlFor="" className=" font-semibold">
              How Many Question ?
            </label>
            <input
              type="text"
              name=""
              id=""
              className="px-6 py-2 rounded-lg border-2 border-gray-200 mt-3"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="" className=" font-semibold">
              Paste Your Text ?
            </label>
            <textarea className="px-6 py-2 rounded-lg border-2 border-gray-200 mt-3"></textarea>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="" className=" font-semibold">
              Language ?
            </label>
            <input
              type="text"
              name=""
              id=""
              className="px-6 py-2 rounded-lg border-2 border-gray-200 mt-3"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="" className=" font-semibold">
              Difficulty ?
            </label>
            <input
              type="text"
              name=""
              id=""
              className="px-6 py-2 rounded-lg border-2 border-gray-200 mt-3"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="" className=" font-semibold">
              Number Of Versions ?
            </label>
            <input
              type="text"
              name=""
              id=""
              className="px-6 py-2 rounded-lg border-2 border-gray-200 mt-3"
            />
          </div>
          <button className=" mt-3 w-full px-6 py-3 rounded-lg text-white bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38%">
            Generate Output
          </button>
        </div>
        <div className=" rounded-lg  mr-8 col-span-2">
          <h2>Output Here</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
