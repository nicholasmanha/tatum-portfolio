import "../App.css";
import "../Navbar.css";
import { Outlet, useLocation } from "react-router-dom";
// // import React, { useState } from 'react';
import NavLink from "../NavLink";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Root() {
  const aspect = "aspect-[2.35/1]";
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const screen_perc = "w-[70%]";
  return (
    <>
      <div className="flex flex-col py-12 items-center">

        <div className="w-full space-y-2 flex justify-center">
          <div className={`${screen_perc} text-left px-3`}>
            <div className="text-[3rem] font-black">TATUM BURKE</div>
            <div className="text-[1.5rem] font-bold">She/her/hers</div>
          </div>

        </div>

        {isHome && (
          <div className="flex justify-center">
            <Carousel className={`${screen_perc} group`} opts={{
              align: "start",
              loop: true,
            }}>
              <CarouselContent>
                <CarouselItem key={"7hz"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\7Hz Still.png" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"apoc"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\Apocalpyse Still.png" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"bunk"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\Bunk Beds.png" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"ear"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\Ear and Headmess.png" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"middle"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\In the Middle.png" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"joan"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\Joan Still.png" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"MWC"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\MWC&O_HS.00_06_10_04.Still003.jpg" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"pandora"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\Pandoras.00_29_44_00.Still002.jpg" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"teeth"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\Pulling Teeth.png" alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem key={"calm"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden `}>
                    <img className="w-full h-full object-cover" src="media\stills\Remain Calm.png" alt="" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="opacity-0 group-hover:opacity-60 transition-opacity duration-300 text-white" />
              <CarouselNext className="opacity-0 group-hover:opacity-60 transition-opacity duration-300 text-white" />
            </Carousel>
          </div>
        )}
        <div className={`${screen_perc} pb-12 flex justify-around`}>
          <div className="mx-16 py-2">
            <NavLink className="absolute !important" active={true} a="/" text="Home" />
          </div>
          <div className="mx-16 py-2">
            <NavLink a="films" text="Films" />
          </div>
          <div className="mx-16 py-2">
            <NavLink a="about" text="About" />
          </div>
          <div className="mx-16 py-2">
            <NavLink a="contact" text="Contact" />
          </div>
        </div>
        <div className={`${screen_perc}`}>
          <Outlet />
        </div>
      </div>

    </>
  );
}