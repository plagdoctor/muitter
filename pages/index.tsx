import Layout from "@components/layout";
import Image from "next/image";
import React from "react";

export default () => (
  <Layout hasTabBar seoTitle="main">
      <div className="flex justify-center pt-12 md:-mb-12 md:justify-start md:pl-12">
        <Image className=" w-8 md:w-14 " src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" width={50} height={50}></Image>
      </div>
      <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
        <h1 className=" text-red-400">It's Main</h1>
      </div>
  </Layout>   
);