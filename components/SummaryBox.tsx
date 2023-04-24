"use client";
import { FC, useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

const text = `This article discusses the concept of the Node.js close queue, which is a queue of functions that are executed when a Node.js process is about to exit. The close queue can be used to perform cleanup tasks, such as closing database connections or releasing resources. The article provides a visualization of how the close queue works and explains how to add functions to the queue using the process.on('beforeExit') and process.on('exit') methods. The article also discusses some common pitfalls when working with the close queue, such as the order in which functions are executed and the need to handle errors properly.`;

interface SummaryBoxProps {
  text: string;
}

const SummaryBox: FC<SummaryBoxProps> = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      isCopied && setIsCopied(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <article className="p-4 border text-gray-600 dark:text-gray-300 rounded-xl border-gray-300 dark:border-gray-600 empty:hidden">
      <div className="flex justify-between items-center pb-4">
        <p className="font-bold text-black dark:text-white">
          Summary of Article
        </p>
        <button
          aria-label="copy button"
          className="p-2 rounded-md text-xl flex items-center justify-center bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-200"
          type="submit"
          onClick={copyToClipboard}
        >
          {isCopied ? <BsCheckLg /> : <FiCopy />}
        </button>
      </div>
      {text}
    </article>
  );
};

export default SummaryBox;
