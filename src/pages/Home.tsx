import React from "react";
import MovieListing from "../MovieListing";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

function Home() {
  const aspect = "2.35/1"
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">TATUM BURKE</div>
        <div className="flex justify-center">She/her/hers</div>
        <div className="flex justify-center">
          <Carousel className="w-4/5 group" opts={{
            align: "start",
            loop: true,
          }}>
            <CarouselContent>

              <CarouselItem key={"7hz"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\7Hz Still.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"apoc"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\Apocalpyse Still.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"bunk"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\Bunk Beds.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"ear"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\Ear and Headmess.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"middle"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\In the Middle.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"joan"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\Joan Still.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"MWC"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\MWC&O_HS.00_06_10_04.Still003.jpg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"pandora"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\Pandoras.00_29_44_00.Still002.jpg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"teeth"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\Pulling Teeth.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem key={"calm"}>
                <div className={`p-1 w-full aspect-[${aspect}] overflow-hidden rounded-lg border`}>
                  <img className="w-full h-full object-cover" src="media\stills\Remain Calm.png" alt="" />
                </div>
              </CarouselItem>

            </CarouselContent>
            <CarouselPrevious className="opacity-0 group-hover:opacity-60 transition-opacity duration-300 text-white" />
            <CarouselNext className="opacity-0 group-hover:opacity-60 transition-opacity duration-300 text-white" />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;