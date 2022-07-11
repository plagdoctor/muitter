import Input from "@components/input";
import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface EnterForm {
    email?: string;
    password?: string;
  }
const Login: NextPage = () => {

    const {register, reset, handleSubmit} = useForm<EnterForm>();
    return (
        <div className="flex w-full flex-wrap">
        
        <div className="flex w-full flex-col md:w-1/2">
            <div className="flex justify-center pt-12 md:-mb-12 md:justify-start md:pl-12">
            <img className=" w-8 md:w-14 " src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"    alt="logo" />
            </div>

            <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
            <p className="text-center text-3xl">Enter to Muitter</p>
            <form className="flex flex-col pt-3 md:pt-8" >
                <Input register={register("email")}  name="email" label="Email Adress" type="text" placed="your name" required />
                <Input register={register("password")}  name="password" label="Password" type="password"  required />
                <input type="submit" value="Log in" className="mt-8 bg-black p-2 text-lg font-bold text-white hover:bg-gray-600" />
            </form>
            <div className="pt-12 pb-12 text-center">
                <p>Don't you have an account? </p>
                <div className="font-semibold underline">Sign up here.</div>
            </div>
            </div>
        </div>

        <div className="w-1/2 shadow-2xl">
            <img className=" hidden h-screen w-full object-cover md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
        </div>
        </div>

    );
}

export default Login;