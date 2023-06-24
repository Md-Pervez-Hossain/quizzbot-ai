"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AiOutlineFileWord, AiOutlineFileText } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../app/customEditorClassName.css";

const DynamicEditor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);
const SavedDocumentDetails = () => {
  const [editorState, setEditorState] = useState(null);

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  return (
    <div className="my-8 mx-20 flex flex-col ">
      <div className="flex justify-between">
        <span className="text-lg font-bold">View Document</span>
        <div className="space-x-2">
          <button className="px-3 py-3 bg-gradient-color-62 text-white rounded">
            <AiOutlineFileWord className="text-2xl" />
          </button>
          <button className="px-3 py-3 bg-gradient-color-62 text-white rounded">
            <AiOutlineFileText className="text-2xl" />
          </button>
          <button className="px-3 py-3 bg-gradient-color-62 text-white rounded">
            <MdContentCopy className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-between items-center gap-6 mt-12 mb-6">
        <div className="flex flex-col flex-grow">
          <input
            type="text"
            name="saveGeneratedQuestion"
            className="px-6 py-2 w-full rounded-2xl border-2 border-[#eee]"
            placeholder="Artificial Intelligence"
          />
        </div>
        <button className="px-3 py-3 bg-gradient-color-62 text-white rounded">
          <AiOutlineSave className="text-2xl" />
        </button>
      </div>

      {/* Third Row */}
      <div className="flex items-center mt-4">
        <DynamicEditor
          editorState={editorState}
          wrapperClassName="wrapperClassName"
          editorClassName="customEditorClassName"
          toolbarClassName="customToolbarClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};

export default SavedDocumentDetails;
