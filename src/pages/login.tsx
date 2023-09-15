import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-r from-zinc-100 to-stone-50 bg-opacity-95">
      <div id="id-header" className="z-50 pb-16">
        <Header></Header>
      </div>

      <div className="min-h-full flex-grow w-full">
        <div className="flex flex-col-reverse md:flex-row min-h-full">
          {/* left */}
          <div className="w-full md:w-1/2 min-h-full items-center">
            <div className="items-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full min-h-full"
                alt="Sample image"
              />
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2 min-h-full items-center">
            <h1 className="mt-6 text-center font-semibold">
              Login to Noah's world!
            </h1>
            <form action="" className="">
              <div className="relative mt-12 mb-4 mx-auto w-5/6">
                <input
                  type="text"
                  id="id-input-email"
                  className="rounded-lg peer h-10 w-full border border-lime-800 focus:outline-none focus:border-t-white focus:border-indigo-500"
                  required
                ></input>
                <label
                  htmlFor="myInput"
                  className="absolute left-0 -top-6 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:text-indigo-500 peer-focus:-top-2.5 peer-focus:text-sm"
                >
                  Your email
                </label>
              </div>
              <div className="relative mt-8 mb-4 mx-auto w-5/6 rounded-lg">
                <input
                  type="password"
                  id="id-input-email"
                  className="rounded-lg peer h-10 w-full border border-lime-800 focus:outline-none focus:border-t-white focus:border-indigo-500"
                  required
                ></input>
                <label
                  htmlFor="myInput"
                  className="absolute left-0 -top-6 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:text-indigo-500 peer-focus:-top-2.5 peer-focus:text-sm"
                >
                  Your password
                </label>
              </div>
              <div className="relative mt-3 mx-auto w-5/6">
                <input
                  className="mr-2 checked:outline-blue-500 outline-none hover:outline hover:outline-purple-700"
                  type="checkbox"
                />
                <label htmlFor="">Show password</label>
              </div>
              <div className="relative mt-4 mb-4 mx-auto w-5/6">
                <button className="bg-orange-50 hover:bg-indigo-300 hover:font-semibold h-9 hover:border-indigo-500 border border-lime-800 rounded-xl w-full text-center">
                  Login
                </button>
              </div>

              <div className="relative mt-4 mb-2 mx-auto w-5/6">
                <a
                  href=""
                  type="button"
                  target="_blank"
                  className="font-light text-blue-500 hover:italic hover:underline h-9 rounded-xl w-full text-left"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative mt-2 mb-4 mx-auto w-5/6">
                <Link href="/register">
                  <button
                    formNoValidate
                    className="bg-green-100 hover:bg-indigo-300 hover:font-semibold h-9 hover:border-indigo-500 border border-lime-800 rounded-xl w-full text-center"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Login;
