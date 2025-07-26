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
} from "@/components/ui/carousel";

export default function Root() {
  const aspect = "aspect-[2.35/1]";
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const screen_perc = "w-[70%]";
  return (
    <>
      <div className="flex flex-col py-12 items-center">
        <div className="w-full space-y-2 mb-4 flex justify-center">
          <div className={`${screen_perc} text-left`}>
            <div className="text-[3rem] font-black">TATUM BURKE</div>
            <div className="text-[1.5rem] font-bold">She/her/hers</div>
          </div>
        </div>

        {isHome && (
          <div className="flex justify-center">
            <Carousel
              className={`${screen_perc} group`}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem key={"7hz"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\7Hz Still.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      7Hz
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"apoc"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\Apocalpyse Still.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Apocolypse Now
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"bunk"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\Bunk Beds.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Bunk Beds
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"ear"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\Ear and Headmess.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Ear and Headmess
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"middle"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\In the Middle.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      In the Middle
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"joan"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\Joan Still.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Joan
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"MWC"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\MWC&O_HS.00_06_10_04.Still003.jpg"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Men, Women and Children & Others
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"pandora"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\Pandoras.00_29_44_00.Still002.jpg"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Pandoras
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"teeth"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\Pulling Teeth.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Pulling Teeth
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem key={"calm"}>
                  <div className={`p-1 w-full ${aspect} overflow-hidden relative`}>
                    <img
                      className="w-full h-full object-cover"
                      src="media\stills\Remain Calm.png"
                      alt=""
                    />
                    <span className="absolute bottom-2 right-2 text-white text-[2rem] pb-4 pr-16 font-semibold drop-shadow-lg">
                      Remain Calm
                    </span>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="z-50 opacity-0 group-hover:opacity-50 hover:opacity-60 transition-opacity duration-300 text-white" />
              <CarouselNext className="z-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-white" />
            </Carousel>
          </div>
        )}
        <div
          className={`${screen_perc} mb-24 flex justify-between px-[1%] border-2 border-black`}
        >
          <div className="py-2">
            <NavLink
              className="absolute !important"
              active={true}
              a="/"
              text="Home"
            />
          </div>
          <div className="py-2">
            <NavLink a="films" text="Films" />
          </div>
          <div className="py-2">
            <NavLink a="sound" text="Sound" />
          </div>
          <div className="py-2">
            <NavLink a="writing" text="Writing" />
          </div>
          <div className="py-2">
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
