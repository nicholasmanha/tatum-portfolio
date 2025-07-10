import React from 'react'
import ReadMore from './ReadMore'

function MovieListing(props) {
  return (
    <div className="grid-item">
        {/* if there is an image */}
        {props.image ?  
        
        (props.image.length == 2 ? <><a href={props.image[1]} target="_blank"> <img className="mb-4 itmimage" src={props.image[0]} alt="" /></a></> : <img className="mb-4 itmimage" src={props.image[0]} alt="" />) : <div className="iframe_wrapper"><iframe src={props.url} title="SofiaTheDealer" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>}

      
        <div className="textdesc">
          {props.tagline && <h8><small>{props.tagline}</small></h8>}
          
          <h3 className="font-weight-bold">{props.title}</h3>
          {props.link && <a href={props.link[1]}><h6 className="pb-1">{props.link[0]}</h6></a>}
          

          <p id="inthemiddledesc">{props.children}
            </p>
            
          <ReadMore>
            {props.readmore}
          </ReadMore>
        </div>
    </div>
  )
}

export default MovieListing