/** @format */
/** @format */

import React, { useState } from "react";
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
function Login({ provider }) {
  console.log(provider);
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const LoginUser = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(res);
    if (res?.error) {
      console.log(res);
    }
    router.push("/");
  };
  return (
    <div className="bg-[url('/bg.jpg')] w-[100%] h-[100vh] bg-no-repeat bg-cover flex justify-center items-center">
      <div className="w-full h-screen font-sans bg-cover bg-landscape">
        <div className="container flex items-center justify-center flex-1 h-full mx-auto">
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <form className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
                <p className="mb-8 text-2xl font-light text-center text-black">
                  Login
                </p>
                <div className="mb-2">
                  <div className=" relative mb-2">
                    <button
                      type="button"
                      className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      onClick={() => signIn("facebook", { callbackUrl: "/" })}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                      </svg>
                      Facebook
                    </button>
                  </div>
                  <div className=" relative ">
                    <button
                      type="button"
                      className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      onClick={() => signIn("google", { callbackUrl: "/" })}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                      </svg>
                      Google
                    </button>
                  </div>
                </div>
                <h5 className="text-center">Or</h5>
                <div className="mb-2">
                  <div className=" relative ">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" relative ">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={(e) => {
                      LoginUser(e);
                    }}
                    type="submit"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Validate
                  </button>
                </div>
                <div className="text-center">
                  <Link href={"/signup"}>
                    <a className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                      Create an account
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
export async function getServerSideProps(context) {
  const provider = await getProviders();

  return {
    props: {
      provider,
    },
  };
}
