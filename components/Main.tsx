"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { URL } from "url";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import SummaryBox from "./SummaryBox";
import Loader from "./Loader";

const Main = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [summary, setSummary] = useState("");
  const api_key = process.env.NEXT_PUBLIC_RAPID_API_KEY;
  const api_host = process.env.NEXT_PUBLIC_RAPID_API_HOST;

  const fetchSummary = async () => {
    setLoading(true);
    setIsError(false);
    const options = {
      method: "POST",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": api_host,
      },
      data: `{"text":"${url}"}`,
    };

    try {
      const { data } = await axios.request(options);
      setSummary(data.summary);
      setUrl("");
    } catch (error: any) {
      setIsError(true);
      console.log(error.message);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSummary();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-16 space-y-4">
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center border rounded-lg border-gray-300 dark:border-gray-600">
          <AiOutlineLink
            className="ml-2 text-gray-500 dark:text-gray-400"
            size={25}
          />
          <input
            className="w-full py-2 px-2 outline-none bg-transparent"
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your URL here"
          />
          <button
            className="h-7 w-7 mr-2 rounded-md text-xl flex items-center justify-center bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-200"
            type="submit"
          >
            ↵
          </button>
        </div>
      </form>

      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        summary && <SummaryBox text={summary} />
      )}
    </div>
  );
};

export default Main;
