import Footer from "@/components/footer";
import Header from "@/components/header";
import { APPLICATION_JSON, METHOD_POST } from "@/constants/headerConstant";
import { SERVER_PATH_LOCAL } from "@/constants/server";
import Link from "next/link";
import React, { useState } from "react";

import { LoginBody } from "@/model/LoginModel";



function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await handleLogin({
      email,
      password,
    });
    // setToken(token);
  };

  async function handleLogin(credentials: LoginBody) {
    const response = await fetch(`${SERVER_PATH_LOCAL}/auth/login`, {
      method: METHOD_POST,
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": APPLICATION_JSON,
      },
    });

    if (!response.ok) {
      setErrorMsg(await response.text())
    } else {
      const data = await response.json();
      const token = data["data"]["token"];
      sessionStorage.setItem("token", token);
      window.location.href = "/home";
    }
  }
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
            <form
              id="id-login-form"
              onSubmit={handleSubmit}
              action=""
              className=""
            >
              <div className="relative mt-12 mb-4 mx-auto w-5/6">
                <input
                  type="text"
                  id="id-input-email"
                  className="rounded-lg peer h-10 w-full border border-lime-800 focus:outline-none focus:border-t-white focus:border-indigo-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label
                  htmlFor="emailInput"
                  className="absolute left-0 -top-6 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:text-indigo-500 peer-focus:-top-2.5 peer-focus:text-sm"
                >
                  Your email
                </label>
              </div>
              <div className="relative mt-8 mb-4 mx-auto w-5/6 rounded-lg">
                <input
                  type="password"
                  id="id-input-password"
                  className="rounded-lg peer h-10 w-full border border-lime-800 focus:outline-none focus:border-t-white focus:border-indigo-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <label
                  htmlFor="passwordInput"
                  className="absolute left-0 -top-6 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:text-indigo-500 peer-focus:-top-2.5 peer-focus:text-sm"
                >
                  Your password
                </label>
              </div>
              <div className="relative mt-3 mx-auto w-5/6">
                <input
                  id="id-show-password"
                  className="mr-2 checked:outline-blue-500 outline-none hover:outline hover:outline-purple-700"
                  type="checkbox"
                />
                <label htmlFor="showPass">Show password</label>
              </div>
              <div className="relative mt-4 mb-4 mx-auto w-5/6">
                <button
                  type="submit"
                  className="bg-orange-50 hover:bg-indigo-300 hover:font-semibold h-9 hover:border-indigo-500 border border-lime-800 rounded-xl w-full text-center"
                >
                  Login
                </button>
              </div>

              <div className="relative mt-4 mb-4 mx-auto w-5/6">
                <h3 className="text-red-500">{errorMsg}</h3>
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
