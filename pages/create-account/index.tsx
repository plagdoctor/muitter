import type { NextPage } from "next";
import { useState } from "react";
const CreateAccount: NextPage = () => {
    const [state, setState] = useState({
      loading: false
    });
    return (
        <div className="flex w-full flex-wrap">
        
        <div className="flex w-full flex-col md:w-1/2">
            <div className="flex justify-center pt-12 md:-mb-12 md:justify-start md:pl-12">
            <img className=" w-8 md:w-14 " src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"    alt="logo" />
            </div>

            <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
            <p className="text-center text-3xl">Join Muitter</p>
            <form className="flex flex-col pt-3 md:pt-8" >
                <div className="flex flex-col pt-4">
                <div className="text-lg">Name</div>
                <input type="text" id="name" placeholder="John Smith" className=" mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow " />
                </div>

                <div className="flex flex-col pt-4">
                <div className="text-lg">Email</div>
                <input type="email" id="email" placeholder="your@email.com" className=" mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow " />
                </div>

                <div className="flex flex-col pt-4">
                <div className="text-lg">Password</div>
                <input type="password" id="password" placeholder="Password" className=" mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow " />
                </div>

                <div className="flex flex-col pt-4">
                <div className="text-lg">Confirm Password</div>
                <input type="password" id="confirm-password" placeholder="Password" className=" mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow " />
                </div>

                <input type="submit" value="Register" className="mt-8 bg-black p-2 text-lg font-bold text-white hover:bg-gray-600" />
            </form>
            <div className="pt-12 pb-12 text-center">
                <p>Already have an account? <div className="font-semibold underline">Log in here.</div></p>
            </div>
            </div>
        </div>

        <div className="w-1/2 shadow-2xl">
            <img className=" hidden h-screen w-full object-cover md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
        </div>
        </div>

    );
}

export default CreateAccount;