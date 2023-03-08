import { Link } from "react-router-dom";
import { useState } from "react";

export default function Test() {
  return (
    <>
      <div className="wave  relative  flex justify-center bg-black items-center h-screen w-screen">
        <div className="absolute">
          <div className="flex gap-2  flex-wrap flex-row w-[100%] h-[100%]">
            <Link className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2"   to="/modal3">modal3</Link>
            <Link className="rounded-2xl w-fit   h-[5%]  bg-white text-center p-2"  to="/modal1">modal1</Link>
            <Link className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2"   to="/DashBoard">DashBoard</Link>
            <Link className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2"   to="/modal2">modal2</Link>
            <Link className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2"   to="/Auth">Auth</Link>
          </div>
        </div>
      </div>
    </>
  );
}
