'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onSubmit = (e:any) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    console.log("here: ",data)
    router.push('/home')
    
  }
  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
    <div className="flex items-center justify-center w-full md:w-1/2">
      <Image src="/climate.png" alt="Login Image" width={800} height={600} className="rounded-xl"/>
    </div>
    <div className="flex flex-col items-center justify-center w-full md:w-1/4 m-10">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p className="mt-2 text-gray-600">
            Please sign in to your account.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => onSubmit(e)}>
          <div>
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-bold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;
