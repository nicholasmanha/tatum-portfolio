import './App.css';
import './Navbar.css';
// import React, { useState } from 'react';
import MovieListing from './MovieListing'

function App() {
  
  return (
    <div className="App">
       <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top py-3">
                <div className="container"><a href="#" className="navbar-brand text-uppercase font-weight-bold"><img className="logo" src="/media/roblogofinal.png" alt=""></img></a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><img id = "hamburger" className="hamburger" src="/media/icons8-menu-64.png" alt=""></img></button>
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a href="#films" className="nav-link text-uppercase font-weight-bold">Films</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Sound Work</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div className="main-logo-container">

            <img className="main-logo" src="/media/roblogomain.png" alt=""></img>
        </div>
      <div className="pb-5 container">
      
        <h1 id="films" className="mb-5 text-uppercase font-weight-bold">Films</h1>
                
        <div className="grid-container">

          <MovieListing title="Sofia the Dealer" url="https://player.vimeo.com/video/697807012?h=8947ee0e3c" readmore="As the lead creative, logistical and technical head of Sofia the Dealer, I was in charge of seeing the films completion from start to finish. This included writing the feature length original screenplay, conducting all the casting and crew hiring, preparing all necessary documents for the day of filming, and ensuring a well run set when filming began. As co-editor of the project, I was in charge of calling all creative shots, piecing together the initial assembly cut, and refining any edits as needed. For distribution, I dedicated time to submitting the film to festivals, uploading it to a platform and hosting a premiere screening.">
          Sofia, a quiet high school senior, struggles to keep herself and her ailing mother above the poverty line. But after a freak accident in her backyard, she's given the chance to make more than enough.
              Set during the Corona Virus pandemic.<br></br><br></br>
              - Directed, Written, Produced and Edited by Robert Burke<br></br>
              - Shot by Michael Bunte<br></br>
              - Edited by Nicholas Manha<br></br>
              - Music by Morgan Fator<br></br>
              - Starring Sara Medina, Emma Barlow, Francisco Grijalva, Lexi Lynn<br></br>
          </MovieListing>

          <MovieListing title={["In the Middle", <small> - Coming Soon</small>]} link={["GoFundMe","https://www.gofundme.com/f/in-the-middle-film?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1"]} image="https://i.ibb.co/j619pCz/itmthumb.png" readmore="As the lead creative, logistical and technical head of In the Middle, I was in charge of seeing the films completion from start to finish. This included writing the feature length original screenplay, conducting all the casting and crew hiring, preparing all necessary documents for the day of filming, and ensuring a well run set when filming began. As co-editor of the project, I was in charge of calling all creative shots, piecing together the initial assembly cut, and refining any edits as needed.">
          An ambitious yet burnout photography student rushes to complete an unexpected final project amidst summer heat and shifting friendships
                            <br></br><br></br>
                            - Written, Directed, Produced and Edited by Robert Burke<br></br>
                            - Produced by Ainsley Gasbarro<br></br>
                            - Shot by Michael Bunte<br></br>
                            - Art Direction by Cam Russo<br></br>
                            - Costume and Production Design by Lulu Dalzell<br></br>
                            - Starring Sara Medina, Alex Blackmore, Corbin Lowry<br></br>
          </MovieListing>
          
        </div>
        <h1 className="mb-5 text-uppercase font-weight-bold">Short Films</h1>
        <div className="grid-container">

          <MovieListing title="Heartbeat" tagline="Music Video Project" url="https://player.vimeo.com/video/654393219?h=f62e568bca&color=3aa5e8" readmore="As producer and editor, my responsibilities included collecting technical equipment, logistical planning and many rhythmic editing decisions.">
          A hazy reflection on the passage of time set to an original song by Eli Piccone.<br></br><br></br>- Produced and Edited by Robert Burke<br></br>
                                - Composed, Directed and Edited by Eli Piccone<br></br>
                                - Shot and Edited by Will Curtis
          </MovieListing>

          <MovieListing title="The Email" tagline="Emerson Submission Short Film" url="https://player.vimeo.com/video/745192057?h=5659220158&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479">
          A couple anxiously awaits an email that will determine the future of their relationship. Made for the UCLA Summer Session Film Institute.<br></br><br></br>- Created by Robert Burke<br></br>- Starring Ian Blank and Alexa Hellman
          </MovieListing>

          <MovieListing title="Since I Left You" tagline="Music Video Project" url="https://player.vimeo.com/video/745191380?h=b807c574af&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479">
          A college student's beloved pet fish runs away in this music video set to The Avalanches' Since I Left You.<br></br><br></br>- Directed and Shot by Robert Burke<br></br>- Edited by Ethan de Bruyn
          </MovieListing>
          
        </div>
      </div>
      <footer className="flex-shrink-0">
            <div className="container text-center">
              <small>Robert Burke Films  &#8226;  </small>
              <div className="social-icons-footer">
                <a href="#">
                  <img className="facebook" src="media\media-icons\icon-facebook-white.png" alt=""></img>
                </a>
                <a href="#">
                  <img src="media\media-icons\icon-indeed-white.png" alt=""></img>
                </a>
                <a href="https://www.instagram.com/robertburkefilms/?hl=en">
                  <img src="media\media-icons\icon-instagram-white.png" alt=""></img>
                </a>
                <a href="https://vimeo.com/user160672798">
                  <img src="media\media-icons\icon-vimeo-white.png" alt=""></img>
                </a>
                <a href="https://www.linkedin.com/in/robert-burke-b07b01207">
                  <img src="media\media-icons\icon-linkedin-white.png" alt=""></img>
                </a>
            </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
