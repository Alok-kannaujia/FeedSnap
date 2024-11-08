import React from "react";
import HeroVideoDialog from "./ui/hero-video-dialog";

const HowToUse = () => {
  return (
    <>
      <div className="min-w-[90vw] md:mt-10 flex w-full flex-col items-center justify-center">
        <h1 className="mb-2 text-center w-[60vw] md:w-fit text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
          How to Use FeedSnap?
        </h1>
        <p className="max-w-md text-center mb-4 text-sm text-gray-400 dark:text-gray-400">
          Click on the video below to know how to use FeedSnap.
        </p>
        <div className=" aspect-video p-4 rounded-lg md:w-[60vw] w-[80vw]">
          <HeroVideoDialog
            className=""
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/xF6oBcf18Hs?si=ZdVx1J_lmQmpym2q"
            thumbnailSrc="https://utfs.io/f/ZeS8ew97fvPDdqm7OoJIVfagUN25oEvtDLj9xFGmbKHS6rZc"
            thumbnailAlt="How To Use FeedSnap - Tutorial"
          />
        </div>
      </div>
    </>
  );
};

export default HowToUse;

// Previous Code:

{
  /* <div>
        <div className="min-w-[90vw] mt-10 flex w-full flex-col items-center justify-center">
          <h1 className="mb-2 text-center w-[60vw] md:w-fit text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
            How to Use FeedSnap?
          </h1>
          <p className="max-w-md text-center text-sm text-gray-400 dark:text-gray-400">
            For video tutorial{" "}
            <Link
              className="text-slate-200 font-semibold hover:underline"
              target="_blank"
              href={"https://youtu.be/xF6oBcf18Hs"}
            >
              Click Here ▶️
            </Link>
          </p>
          <div className="md:flex md:flex-row flex flex-col m-auto md:gap-x-10 mt-6">
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md font-semibold text-center text-lg text-gray-400 dark:text-gray-100">
                Process 1
              </div>
              <div className="max-w-md text-center text-xs text-gray-300 dark:text-gray-300 mb-4">
                Enter Website details
              </div>
              <Image
                className="rounded-md p-2 md:hover:scale-105 duration-150"
                src={process1}
                width={300}
                height={300}
                alt="image"
              />
            </div>
            <ArrowRight className="md:m-auto md:rotate-0 text-slate-200 rounded-full border p-1 border-white rotate-90 my-4 mx-auto" />
            <div>
              <div className="max-w-md font-semibold text-center text-lg text-gray-400 dark:text-gray-100">
                Process 2
              </div>
              <div className="max-w-md text-center text-xs text-gray-300 dark:text-gray-300 mb-4">
                Create Project
              </div>
              <Image
                className="rounded-md p-2 md:mt-20 mx-auto md:hover:scale-105 duration-150"
                src={process2}
                width={120}
                height={120}
                alt="image"
              />
            </div>
            <ArrowRight className="md:m-auto md:rotate-0 text-slate-200 rounded-full border p-1 border-white rotate-90 my-4 mx-auto" />
            <div>
              <div className="max-w-md font-semibold text-center text-lg text-gray-400 dark:text-gray-100">
                Process 3
              </div>
              <div className="max-w-md text-center text-xs text-gray-300 dark:text-gray-300 mb-4">
                Embed Code
              </div>
              <Image
                className="rounded-md hidden md:block p-2 md:hover:scale-105 duration-150"
                src={process3}
                width={350}
                height={350}
                alt="image"
              />
              <Image
                className="rounded-md md:hidden p-2 md:hover:scale-105 duration-150"
                src={process3}
                width={300}
                height={300}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div> */
}
