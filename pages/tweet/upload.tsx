import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import { Message } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UploadTweetForm {
    message:string;
}

interface UploadTweetMutation {
    ok:boolean;
    tweet : Message;
}

const Upload : NextPage = () => {

  const {register, handleSubmit } = useForm<UploadTweetForm>();
  const [uploadTweet, {loading, data}] = useMutation<UploadTweetMutation>("/api/tweet");
  const router = useRouter();
  const onValid = (formData:UploadTweetForm) => {
    if(loading) return;
    console.log(formData);
    uploadTweet(formData);
  }
  useEffect(() => {
    if (data?.ok) {
      router.replace(`/tweet/${data.tweet.id}`)
    }
  }, [data,router]);  
    return (
        <Layout canGoBack hasTabBar title="Create Tweet">

            <div className="flex flex-col pt-12 md:-mb-12 md:justify-start md:px-12">
                <form onSubmit={handleSubmit(onValid)} className="p-4 space-y-4">
                    <TextArea 
                    register= {register("message", {required:true, minLength: 5})} 
                    required 
                    placeholder="A bold tweet!" />
                <Button text={loading ? "Loading..." : "Tweet" } />
                </form>                
            </div>
        </Layout>   
      
    );
};

export default Upload;