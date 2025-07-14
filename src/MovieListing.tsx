import React from "react";
import ReadMore from "./ReadMore";

interface MovieListingProps {
  image?: string[];
  info?: string;
  url?: string;
  tagline?: string;
  title: string;
  link?: [string, string]; // tuple for link text and URL
  children: React.ReactNode;
  readmore?: React.ReactNode;
}

function MovieListing(props: MovieListingProps) {
  return (
    <div className="grid-item w-1/2">
      {/* if there is an image */}
      {props.image ? (
        props.image.length === 2 ? (
          <>
            <a href={props.image[1]} target="_blank" rel="noopener noreferrer">
              <img className="mb-4 " src={props.image[0]} alt="" />
            </a>
          </>
        ) : (
          <img className="mb-4 w-1/2" src={props.image[0]} alt="" />
        )
      ) : (
        <div className="aspect-video mb-2">
          <iframe
            src={props.url}
            title="SofiaTheDealer"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      {props.url ? (
        <a className="!text-black !underline" href={props.url}>
          <h3 className="font-weight-bold mb-0">{props.title}</h3>
        </a>
      ) : (
        <h3 className="font-weight-bold mb-0">{props.title}</h3>
      )}
      <div className="textdesc text-lg">
        {props.info && <div className="text-lg mb-3">{props.info}</div>}
        {props.tagline && (
          <div className="text-lg mb-3 font-semibold">{props.tagline}</div>
        )}

        {props.link && (
          <a href={props.link[1]}>
            <h6 className="pb-1">{props.link[0]}</h6>
          </a>
        )}

        <p id="inthemiddledesc">{props.children}</p>
      </div>
    </div>
  );
}

export default MovieListing;
