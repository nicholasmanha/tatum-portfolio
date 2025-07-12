import React from "react";
import MovieListing from "../MovieListing";
import { Link, } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import NavLink from "@/NavLink";

interface HomeProps {
  home?: boolean;
}

function Home({ home = false }: HomeProps) {
  const aspect = "2.35/1"
  return (
    <>
      <div className="">Hello! My name is Tatum Burke, and I’m a sound designer, screenwriter and filmmaker based in New England. Click the bars above to take a look at my experience!

        AWARDS
        Short Sounds Film Festival
        Best Narrative Sound Design - ‘7Hz’ (WINNER)
        EVVYs:
        2025
        Outstanding Writing for Film - ‘Cece’ (WINNER)
        Outstanding Sound Design for Film - ‘7Hz’
        Outstanding Narrative Editing - ‘7Hz’
        Outstanding Studio Production - ‘The Ear and Headmess Show’
        Outstanding Lighting for Studio Television - ‘Speedwell’
        2024
        Student Award of Distinction (WINNER)
        Outstanding Writing for Film - ‘E’
        Outstanding Narrative Editing - ‘Men, Women and Children & Others’
        Outstanding Sound Design for Theater - ‘In the Waiting Room’</div>
    </>
  );
}

export default Home;