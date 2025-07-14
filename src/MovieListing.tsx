import React, { useState } from "react";
import ReadMore from "./ReadMore";

interface Episode {
  title: string;
  url: string;
}

interface MovieListingProps {
  image?: string[];
  info?: string;
  url?: string;
  episodes?: Episode[]; // Array of episodes with titles and URLs
  tagline?: string;
  title: string;
  link?: [string, string]; // tuple for link text and URL
  children: React.ReactNode;
  readmore?: React.ReactNode;
}

function MovieListing(props: MovieListingProps) {
  const [currentUrl, setCurrentUrl] = useState(props.url || (props.episodes?.[0]?.url ?? ""));
  
  const hasMultipleEpisodes = props.episodes && props.episodes.length > 1;

  return (
    <div className={`grid-item ${hasMultipleEpisodes ? 'w-full' : 'w-1/2'}`}>
      <div className={hasMultipleEpisodes ? 'flex gap-4' : ''}>
        {/* Main content area */}
        <div className={hasMultipleEpisodes ? 'w-1/2' : ''}>
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
            <div className={`aspect-video mb-2 ${hasMultipleEpisodes ? 'w-full pr-3' : ''}`}>
              <iframe
                src={currentUrl}
                title={props.title}
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

        {/* Episodes sidebar - only show if there are multiple episodes */}
        {hasMultipleEpisodes && props.episodes && (
          <div className="w-64 flex-shrink-0">
            <div className="space-y-2">
              {props.episodes.map((episode, index) => (
                <div
                  key={index}
                  className="cursor-pointer !underline"
                  onMouseEnter={() => setCurrentUrl(episode.url)}
                >
                  <span className="text-lg font-medium">{episode.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieListing;