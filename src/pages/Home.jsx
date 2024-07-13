import React from "react";
import MovieListing from "../MovieListing";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-logo-container">
        <img className="main-logo" src="/media/roblogomain.png" alt=""></img>
      </div>
      <div id="dialog2" class="triangle_down1"></div>
      <div className="pb-5 container">
        <h1 id="films" className="mb-5 text-uppercase font-weight-bold">
          Films
        </h1>

        <div className="grid-container">
        <MovieListing
            title="Men, Women and Children and Others"
            url="https://www.youtube.com/embed/6NhRwufxpls?si=mJjYLlsBVgZ_HGJN"
            readmore="Currently in distribution"
          >
            An exploration of the gender binary and how childhood shapes identity.<br></br>
            <br></br>- Directed, Written and Produced by Robert Burke <br></br>- Story by Emma Boothroyd and Robert Burke
            <br></br>- Production Designed and Produced by Lulu Dalzell<br></br>- Assistant Directed and Produced by Ainsley Gasbarro
            <br></br>- Cinematography by Quinlan Harp<br></br>- Starring Robbie Doty, Ray Cheverton, Saskia Penning, Landon Butler, Olivia Tosto, Jack Reisman and Keely Seward<br></br>
          </MovieListing>
          
          <MovieListing
            title="Sofia the Dealer"
            url="https://player.vimeo.com/video/697807012?h=8947ee0e3c"
            readmore="As the lead creative, logistical and technical head of Sofia the Dealer, I was in charge of seeing the films completion from start to finish. This included writing the feature length original screenplay, conducting all the casting and crew hiring, preparing all necessary documents for the day of filming, and ensuring a well run set when filming began. As co-editor of the project, I was in charge of calling all creative shots, piecing together the initial assembly cut, and refining any edits as needed. For distribution, I dedicated time to submitting the film to festivals, uploading it to a platform and hosting a premiere screening."
          >
            Sofia, a quiet high school senior, struggles to keep herself and her
            ailing mother above the poverty line. But after a freak accident in
            her backyard, she's given the chance to make more than enough. Set
            during the Corona Virus pandemic.<br></br>
            <br></br>- Directed, Written, Produced and Edited by Robert Burke
            <br></br>- Shot by Michael Bunte<br></br>- Edited by Nicholas Manha
            <br></br>- Music by Morgan Fator<br></br>- Starring Sara Medina,
            Emma Barlow, Francisco Grijalva, Lexi Lynn<br></br>
          </MovieListing>

          <MovieListing
            title={["In the Middle", <small> - Coming Soon</small>]}
            link={[
              "GoFundMe",
              "https://www.gofundme.com/f/in-the-middle-film?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1",
            ]}
            image={["https://i.ibb.co/j619pCz/itmthumb.png"]}
            readmore="As the lead creative, logistical and technical head of In the Middle, I was in charge of seeing the films completion from start to finish. This included writing the feature length original screenplay, conducting all the casting and crew hiring, preparing all necessary documents for the day of filming, and ensuring a well run set when filming began. As co-editor of the project, I was in charge of calling all creative shots, piecing together the initial assembly cut, and refining any edits as needed."
          >
            An ambitious yet burnout photography student rushes to complete an
            unexpected final project amidst summer heat and shifting friendships
            <br></br>
            <br></br>- Written, Directed, Produced and Edited by Robert Burke
            <br></br>- Produced by Ainsley Gasbarro<br></br>- Shot by Michael
            Bunte<br></br>- Art Direction by Cam Russo<br></br>- Costume and
            Production Design by Lulu Dalzell<br></br>- Starring Sara Medina,
            Alex Blackmore, Corbin Lowry<br></br>
          </MovieListing>
        </div>
        <Link to="experience">
          <h1>Other Stuff I've Done</h1>
        </Link>
      </div>
    </>
  );
}

export default Home;
