/* eslint-disable react/prop-types */
import { useState } from "react"
import assets from "../assets/assets"

const Login = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className="bg-red-50 py-4 rounded-md sm:py-8 lg:py-12" style={{ placeSelf: "center", position: "absolute", zIndex: '1', animation: 'fadeIn 0.5s' }}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        <form className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div className="flex flex-row">
              <span><h2 className=" text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">{currState}</h2></span>
              <span className="ml-auto mt-1"><img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" /></span>
            </div>
            <div className="inputs">
              {currState === "Login" ? <></> : <div>
                <label htmlFor="username" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Your Name</label>
                <input name="username" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              </div>}

              <div>
                <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                <input name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              </div>
            </div>
            <button className="mt-2 block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4">
            {currState === "Sign Up" ? <p className="text-center text-sm text-gray-500">Already have an account? <a onClick={() => setCurrState("Login")} href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</a></p>
              : <p className="text-center text-sm text-gray-500">Don&apos;t have an account? <a onClick={() => setCurrState("Sign Up")} href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Create Account</a></p>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
