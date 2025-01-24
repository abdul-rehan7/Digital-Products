"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex items-center w-screen h-screen  justify-center bg-green-500 ">
            <div className="flex justify-center flex-col  items-center">

          <p> Signed in as &nbsp; ➡️ &nbsp; Mail: {session.user.email}</p>
          <p> Name: {session.user.name}</p>
          <br />
          <button className="bg-black rounded-md text-white w-[7rem]  p-3 hover:bg-transparent hover:text-black transition border-2 border-black  active:bg-black active:text-gray-600 text-center " onClick={() => signOut()}>
            Sign out
          </button>
            </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-screen space-x-4 h-screen flex items-center justify-center bg-gray-200 ">
        <button className="bg-white rounded-md text-black w-[9rem]  p-3 hover:bg-transparent hover:text-white transition border-2 border-white  active:bg-white active:text-gray-600 text-center ">
        Not signed in?
        </button>
     
        <button className="bg-black rounded-md text-white w-[7rem]  p-3 hover:bg-transparent hover:text-black transition border-2 border-black  active:bg-black active:text-gray-600 text-center " onClick={() => signIn()}>
            Sign In
          </button>
      </div>
    </>
  );
}
