import Image from "next/image";
import React from "react";

export default () => (
  <div className="flex w-full flex-wrap">
        
    <div className="flex w-full flex-col md:w-1/2">

      <div className="flex justify-center pt-12 md:-mb-12 md:justify-start md:pl-12">
        <Image className=" w-8 md:w-14 " src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" width={50} height={50}></Image>
      </div>
      <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
        <h1 className=" text-red-400">It's Main</h1>
      </div>
    </div>
    <div className="w-1/2 shadow-2xl">
      <img className=" hidden h-screen w-full object-cover md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
    </div>    
  </div>
);
