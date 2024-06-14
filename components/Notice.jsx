"use client";
import { useState } from "react";

const Notice = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <div className="fixed bottom-3 right-3 z-50 rounded-md bg-cyan-900 px-5 py-2 font-mono border-gray-400 border-2">
          <a href="https://contest-hive-dev.vercel.app" className="text-xs md:text-sm">
            A New UI of{" "}
            <b className="text-green-400 underline underline-offset-4">
              Contest Hive
            </b>{" "}
            is available &rarr;
          </a>
          <button
            className="absolute -mt-5 rounded-full bg-gray-300 p-2 right-0 -mr-2 h-7 w-7"
            onClick={() => setVisible(false)}
          >
            <svg viewBox="0 0 490 490" fill="#000000">
              <polygon
                points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Notice;
