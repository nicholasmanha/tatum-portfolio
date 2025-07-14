import React from "react";
import MovieListing from "../MovieListing";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import NavLink from "@/NavLink";


function Home({}) {
  const aspect = "2.35/1";
  return (
    <>
      <div className="flex">
        <div className="w-3/5 text-lg pr-5">
          <p className="text-lg">
            <div className="text-2xl font-bold inline">Hello!</div> My name is Tatum Burke, and I’m a sound designer,
            screenwriter and filmmaker based in New England. Click the bars
            above to take a look at my experience!
          </p>

          <br></br>
          <p className="font-semibold text-2xl">AWARDS</p>
          <div className="text-xl">Short Sounds Film Festival</div>
          <ul className="list-disc list-outside pl-6">
            <li>Best Narrative Sound Design - ‘7Hz’ (WINNER) </li>
          </ul>
          <div className="text-xl">EVVYs</div>
          <ul className="list-disc list-outside pl-6">
            <li>
              2025
              <ul className="list-disc list-outside pl-6">
                <li>Outstanding Writing for Film - ‘Cece’ (WINNER) </li>
                <li>Outstanding Sound Design for Film - ‘7Hz’</li>
                <li>Outstanding Narrative Editing - ‘7Hz’ </li>
                <li>
                  Outstanding Studio Production - ‘The Ear and Headmess Show’
                </li>
                <li>
                  Outstanding Lighting for Studio Television - ‘Speedwell’{" "}
                </li>
              </ul>
            </li>
            <li>
              2024
              <ul className="list-disc list-outside pl-6">
                <li>Student Award of Distinction (WINNER) </li>
                <li>Outstanding Writing for Film - ‘E’ </li>
                <li>
                  Outstanding Narrative Editing - ‘Men, Women and Children &
                  Others’
                </li>
                <li>
                  Outstanding Sound Design for Theater - ‘In the Waiting Room’
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-2/5 p-5 flex flex-col items-center justify-center">
          <img src="media\headshot.jpg"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
