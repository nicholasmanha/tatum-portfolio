import React from "react";
import MovieListing from "../MovieListing";

function Experience() {
  return (
    <>
      <div className="navshift"></div>
      <div className="pb-5 container">
        <h1 className="mb-5 text-uppercase font-weight-bold">Emerson</h1>
        <div className="mx-3">
          <h2>Directing</h2>
          <br></br>
          <div className="grid-container">
            {/*  */}
            {/* Directing stuff goes here */}
            {/*  */}
            <MovieListing
              title="Heartbeat"
              tagline="Music Video Project"
              url="https://player.vimeo.com/video/654393219?h=f62e568bca&color=3aa5e8"
              readmore="As producer and editor, my responsibilities included collecting technical equipment, logistical planning and many rhythmic editing decisions."
            >
              A hazy reflection on the passage of time set to an original song
              by Eli Piccone.<br></br>
              <br></br>- Produced and Edited by Robert Burke<br></br>- Composed,
              Directed and Edited by Eli Piccone<br></br>- Shot and Edited by
              Will Curtis
            </MovieListing>

            <MovieListing
              title="The Email"
              tagline="Emerson Submission Short Film"
              url="https://player.vimeo.com/video/745192057?h=5659220158&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            >
              A couple anxiously awaits an email that will determine the future
              of their relationship. Made for the UCLA Summer Session Film
              Institute.
              <br></br>
              <br></br>- Created by Robert Burke<br></br>- Starring Ian Blank
              and Alexa Hellman
            </MovieListing>

            <MovieListing
              title="Since I Left You"
              tagline="Music Video Project"
              url="https://player.vimeo.com/video/745191380?h=b807c574af&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            >
              A college student's beloved pet fish runs away in this music video
              set to The Avalanches' Since I Left You.<br></br>
              <br></br>- Directed and Shot by Robert Burke<br></br>- Edited by
              Ethan de Bruyn
            </MovieListing>
          </div>
          <h2>Producing</h2>
          <br></br>
          <div className="grid-container">
            {/*  */}
            {/* Producing stuff goes here */}
            {/*  */}
          </div>
          <h2>Sound</h2>
          <br></br>
          <div className="grid-container">
            {/*  */}
            {/* Sound stuff goes here */}
            {/*  */}
          </div>
          <h2>Lighting</h2>
          <br></br>
          <div className="grid-container">
            {/*  */}
            {/* Lighting stuff goes here */}
            {/*  */}
          </div>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim
            minima nobis officia eum placeat rerum repellendus quasi dolorem,
            rem magnam, aliquid, sunt deleniti. Corporis quisquam quasi nulla
            voluptatum, assumenda fugiat dolor facere dignissimos! Nostrum sint
            deleniti consectetur culpa tempora at, voluptates rem doloribus. Non
            placeat vero amet quod. Non, est quasi nobis dignissimos repellat
            tenetur, voluptas, nesciunt natus laborum quibusdam aliquam! Amet
            voluptatum, voluptatibus eveniet inventore, accusamus quod omnis non
            fugiat reiciendis necessitatibus aut iusto facere vel quasi dolore!
            Saepe necessitatibus in voluptas quae! Voluptatibus beatae nulla
            ducimus laboriosam, sapiente impedit quibusdam assumenda at tempora
            reprehenderit ex consectetur ipsum, aperiam recusandae optio
            officiis, ab nihil non adipisci ullam repudiandae ad. Quae,
            provident ratione? Beatae quam minima unde voluptate molestiae,
            voluptas pariatur illum nisi modi aliquam culpa architecto vero
            magni dolores, iste laboriosam accusantium omnis praesentium.
            Deleniti, sint! Facilis nisi esse placeat libero natus recusandae.
            Nobis officiis cum voluptas tenetur vero error, in accusantium totam
            ut nostrum cumque nam sequi ratione adipisci, necessitatibus ex
            aliquam mollitia maxime iure deserunt velit maiores aspernatur
            deleniti. Eligendi, ut at! Aliquid labore fuga eaque, quam excepturi
            accusantium dignissimos voluptatum cupiditate, architecto facere
            autem blanditiis quidem quas repudiandae. Vitae sunt, asperiores
            assumenda eaque illum nemo.
          </p>
        </div>
        <h1 className="mb-5 text-uppercase font-weight-bold">FSC</h1>
        <div className="mx-3">
          <div className="grid-container">
            {/*  */}
            {/* FSC stuff goes here */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
