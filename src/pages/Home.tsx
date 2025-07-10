import React from "react";
import MovieListing from "../MovieListing";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-center">TATUM BURKE</div>
        <div className="text-center">She/her/hers</div>
        <div className="flex justify-center">
          <div className="justify-center">carousel</div>
        </div>
        <div className="flex">navbar</div>
      </div>
    </>
  );
}

export default Home;
