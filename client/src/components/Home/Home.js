import React from "react";
import TextInput from "./TextInput";
import PrimaryButton from "../PrimaryButton";
import Output from "../Shared/Output";

const Home = () => {
  return (
    <div className="my-16">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="col-span-1">
          <TextInput label="How Many Question?" name="questionCount" />
          <div className="flex flex-col mb-4">
            <label htmlFor="" className=" text-sm">
              Paste Your Text?
            </label>
            <textarea className="px-6 py-2 rounded-2xl border-2 border-gray-200 mt-3" rows={7}></textarea>
          </div>
          <TextInput label="Language?" name="language" />
          <TextInput label="Difficulty?" name="difficulty" />
          <TextInput label="Number Of Versions?" name="versionCount" />
          <PrimaryButton>Generate Output</PrimaryButton>
        </div>
        <div className="rounded-lg mr-8 col-span-2">
          <Output />
        </div>
      </div>
    </div>
  );
};

export default Home;
