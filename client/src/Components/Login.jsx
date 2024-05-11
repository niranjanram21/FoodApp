/* eslint-disable react/prop-types */
import { useState } from "react";
import assets from "../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm relative">
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-100"
        >
          <img src={assets.cross_icon} alt="Close" className="mt-4 mr-2" />
        </button>
        <form className="space-y-8">
          <h2 className="text-left mb-4 text-2xl font-bold text-slate-800 lg:text-2xl">{currState}</h2>
          {currState !== "Login" && (
            <div>
              <input
                placeholder="Enter your name"
                name="username"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 focus:ring-indigo-300 focus:outline-none transition duration-100"
              />
            </div>
          )}
          <div>
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 focus:ring-indigo-300 focus:outline-none transition duration-100"
            />
          </div>
          <div>
            <input
              placeholder="Enter your password"
              name="password"
              type="password"
              className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 focus:ring-indigo-300 focus:outline-none transition duration-100"
            />
          </div>
          <button className="w-full bg-red-600 text-white rounded-lg py-3 font-semibold transition duration-100 hover:bg-red-700 focus:ring ring-gray-300">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="text-center text-sm text-gray-500">
            {currState === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={() => setCurrState("Login")}
                  className="text-red-500 hover:text-red-600"
                >
                  Login
                </a>
              </p>
            ) : (
              <p>
                Don`&apos;`t have an account?{" "}
                <a
                  href="#"
                  onClick={() => setCurrState("Sign Up")}
                  className="text-red-500 hover:text-red-600"
                >
                  Create Account
                </a>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
