import React from "react";
import MovieListing from "../MovieListing";
import { Link,} from "react-router-dom";
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
      hey wassup
    </>
  );
}

export default Home;