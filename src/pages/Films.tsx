import React from "react";
import MovieListing from "../MovieListing";
import ReadMore from "@/ReadMore";

function Portfolio() {
  return (
    <>
      <div className="mb-[3rem]">
        <p className="text-5xl font-bold">FILMS</p>
        <p className="font-semibold text-2xl">ABOUT ME</p>
        <p className="text-lg">
          I earned my Bachelor of Fine Arts degree from Emerson College in
          Boston, MA. I specialized my coursework in sound design, writing,
          directing and producing. While at Emerson, I worked through a variety
          of student organizations including Emerson Independent Video, The
          Emerson Channel, Frames Per Second and National Broadcast Society.
          Additionally, I worked on multiple independent projects including BFA
          and BA capstone projects. I was given the Student Award of Distinction
          at the 2024 EVVY Awards.
        </p>
      </div>

      <p className="font-semibold text-2xl mb-3">PORTFOLIO</p>
      <div className="mb-[8rem]">
        <div className="ml-[-10rem]">
          <div className="absolute w-30 h-30 bg-[#95EBFF] rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-black">FILMS</span>
          </div>
        </div>
        <div className="flex gap-8 mb-5">
          <MovieListing
            title="Men, Women and Children & Others"
            info="Short Film ◦ Filmed: 2023 ◦ Released: 2025 ◦ 21 m ◦ BFA Capstone"
            url="https://www.youtube.com/embed/YAFgmQahAwU?si=yCDJG5LJaGTJNrga"
            tagline="Writer/Director/Producer/Assistant Editor"
          >
            <ReadMore linkText="Awards and Info">
              43RD EVVY Award Nominee
              <ul className="list-disc list-inside  pl-6">
                <li>Outstanding Lead Performance (Robbie Doty)</li>
                <li>
                  Outstanding Narrative Editing (Ellis Pizzoferrato and Tatum
                  Burke)
                </li>
              </ul>
              <p>
                Logline: An exploration of the gender binary and how childhood
                shapes identity. <br></br>
                Completed through the Emerson College Bachelor of Fine Arts
                program with Professor Hanadi Elyan.
              </p>
            </ReadMore>
          </MovieListing>
          <MovieListing
            title="7Hz"
            info="Short Film ◦ Filmed: 2024 ◦ 11 m ◦ Directed Study Project"
            url="https://www.youtube.com/embed/B6KjVD824rQ?si=dRQ8B0zevWEKDEXh"
            tagline="Sound Designer/Writer/Director/Producer/Editor"
          >
            <ReadMore linkText="Awards and Info">
              Short Sounds Film Festival
              <ul className="list-disc list-inside  pl-6">
                <li>Best Narrative Sound Design - ‘7Hz’ (WINNER)</li>
              </ul>
              44TH EVVY Award Nominee
              <ul className="list-disc list-inside  pl-6">
                <li>Outstanding Sound Design for Film - ‘7Hz’</li>
                <li>Outstanding Narrative Editing - ‘7Hz’</li>
              </ul>
            </ReadMore>
          </MovieListing>
        </div>
        {/* <div className="flex gap-8 mb-5">
          // {/* <MovieListing
          //   title="In the Middle"
          //   info="Feature Film ◦ Filmed: 2022 ◦ Released: 2024 ◦ 1 hr 42 min"
          //   url="https://www.youtube.com/embed/0ykBy6yk9ZI?si=IaB5mZ8ZegHKaVTC"
          //   tagline="Writer/Director/Producer/Editor/Sound Designer"
          // >
          //   <ReadMore linkText="About this film">
          //     Logline:<br></br>
          //     An ambitious yet burnout photography student rushes to complete an
          //     unexpected final project amidst summer heat and shifting
          //     friendships.
          //   </ReadMore>
          // </MovieListing>
          //  <MovieListing
          //   title="Sofia the Dealer"
          //   info="Feature Film ◦ Filmed: 2021 ◦ Released: 2022 ◦ 1 hr 27 min"
          //   url="https://player.vimeo.com/video/697807012?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          //   tagline="Writer/Director/Producer"
          // >
          //   <ReadMore linkText="Awards and Info">
          //     Logline: <br></br>
          //     Sofia, a quiet high school senior, struggles to keep herself and her
          //     ailing mother above the poverty line. But after a freak accident in
          //     her backyard, she's given the chance to make more than enough. Set
          //     during the Corona Virus pandemic.
          //   </ReadMore>
          // </MovieListing> 
        </div> */}
      </div>
      <div className="mb-[8rem]">
        <p className="font-semibold text-2xl mb-3">ORGANIZATIONS</p>
        <div className="ml-[-10rem]">
          <div className="absolute w-30 h-30 bg-[#95FFB5] rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-black text-center">EMERSON CHANNEL</span>
          </div>
        </div>
        <div className="flex gap-8 mb-5">
          <MovieListing
            title="Joan"
            info="TV Pilot ◦ Filmed: 2024 ◦ Released: 2025 ◦ 23 min"
            url="https://www.youtube.com/embed/BpammF26OEg?si=fpqpMKCl2w0T6guK"
            tagline="Director"
          >
            <ReadMore linkText="About this project">
              Logline: <br></br>
              A newly out trans woman named Joan begins her transition, navigating a new romantic relationship, her friends, and tense family dynamics.
            </ReadMore>
          </MovieListing>
          <MovieListing
            title="The Ear and Headmess Show"
            info="TV Show ◦ Filmed: 2024 ◦ Released: 2024 ◦ 23 min ◦ 2 Seasons"
            url="https://www.youtube.com/embed/7ZArVte29Vw?si=iMUkh87TAMfrQnp9"
            tagline="Executive Producer"
          >
            <small>Coming soon: Season 2 (July 2025)
            </small>
            <ReadMore linkText="About this project">
              EVVY Award Nominee
              <ul className="list-disc list-inside  pl-6">
                <li>Outstanding Studio Production
                </li>
              </ul>
              Logline: <br></br>
              As ratings for their sketch comedy show sink, an eclectic bunch must do anything they can to keep the show on air.
            </ReadMore>
          </MovieListing>
        </div>
        <div className="mb-5">
          <MovieListing
            title="Apocalypse Forever"
            episodes={[
              { title: "S1 E1", url: "https://www.youtube.com/embed/VPT8w2skkF4?si=1cndml9WG9SIVVyy" },
              { title: "S1 E2", url: "https://www.youtube.com/embed/3v9SGP2hXTg?si=m7BsPTx6T2yndzF3" },
              { title: "S2 E1", url: "https://www.youtube.com/embed/K5rZ5Z7StN8?si=_VNkf3qV94knGC08" },
              { title: "S2 E2", url: "https://www.youtube.com/embed/xYxlDbvLRYg?si=2EkrKHlIKP_lwZnq" },
              { title: "S3 E1", url: "https://www.youtube.com/embed/xqOqGkv66Bw?si=dgq7uir9y_gvoAVk" },
              { title: "S3 E2", url: "https://www.youtube.com/embed/-3iurvoBsY8?si=yf_YUbUNT0PtId-q" },

            ]}
            info="TV Show ◦ Filmed: 2023-2024 ◦ Released: 2023-2024 ◦ 3 Seasons"

            tagline="Director (Season 1 and 3), Executive Producer and Head Writer (Season 2)"
          >
            <ReadMore linkText="About this project">
              Logline: <br></br>
              Two underpaid and underprepared government employees put out emergency broadcasts to help those surviving a perpetual apocalypse loop.
            </ReadMore>
          </MovieListing>
        </div>
        <div className="flex gap-8 mb-5">
          <MovieListing
            title="Third Bird "
            info="TV Show ◦ Filmed: 2023 ◦ Filmed: 2023 ◦ Released: 2023 ◦ 1 Season"
            url="https://www.youtube.com/embed/GyBzaFPRr10?si=shoqn3rhqYXmxLPs"
            tagline="Director of Photography"
          >
            <ReadMore linkText="About this project">
              Logline: <br></br>
              A comedy sketch show about a troupe of comedian puppets.
            </ReadMore>
          </MovieListing>
          <MovieListing
            title="Closing Time"
            info="TV Show ◦ Filmed: 2022-2023 ◦ Released: 2022-2023 ◦ 1 Season"
            url="https://www.youtube.com/embed/pw71m2dtucs?si=6GBdz-Hq4lyC-SE9"
            tagline="Associate Producer"
          >
            <ReadMore linkText="About this project">
              EVVY Award Nominee
              <ul className="list-disc list-inside  pl-6">
                <li>Outstanding Studio Production
                </li>
              </ul>
              Logline: <br></br>
              Late night sketch comedy show.

            </ReadMore>
          </MovieListing>
        </div>
      </div>
      <div className="mb-[8rem]">
        <div className="ml-[-10rem]">
          <div className="absolute w-30 h-30 bg-[#95FFB5] rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-black text-center">EMERSON INDEPENDENT VIDEO</span>
          </div>
        </div>
        <div className="mb-5">
          <MovieListing
            title="Pandora’s Room"
            episodes={[
              { title: "E1", url: "https://www.youtube.com/embed/_w-rrGbWm9s?si=dZDRTSRwtjdWdEAm" },

            ]}
            info="TV Miniseries ◦ Filmed: 2024 ◦ Released: 2024-2025 ◦ 2 Episodes"
            url="https://www.youtube.com/embed/_w-rrGbWm9s?si=dZDRTSRwtjdWdEAm"
            tagline="Executive Producer"
          >
            <small>Coming Soon: Episode 2 (August 2025)</small>
            <ReadMore linkText="About this project">
              Logline: <br></br>
              Seven people, who unknowingly represent the seven sins, find themselves all trapped in a room together where they must figure out how to escape and who put them there in the first place.
            </ReadMore>
          </MovieListing>
        </div>
        <div className="flex gap-8 mb-5">

          <MovieListing
            title="Speedwell"
            info="TV Show ◦ Filmed: 2023 ◦ Released: 2025 ◦ 1 Episode"
            url="https://www.youtube.com/embed/UgDy-yv-J9E?si=z5_dmZyKa4gIeN6K"
            tagline="Gaffer"
          >
            <small>Coming soon: Season 2 (July 2025)
            </small>
            <ReadMore linkText="About this project">
              EVVY Award Nominee
              <ul className="list-disc list-inside  pl-6">
                <li>Outstanding Lighting Design for Studio Television
                </li>
              </ul>
              Logline: <br></br>
              A desperate father fleeing from religious persecution begs a reluctant submarine captain to ferry his people across an uncharted ocean. When a sea beast attacks, the captain must work with both her apprehensive crew & new passengers to survive.
            </ReadMore>
          </MovieListing>
          <MovieListing
            title="A Genre Away"
            info="TV Miniseries ◦ Filmed: 2022 ◦ Released: 2022 ◦ 1 Episode"
            url="https://www.youtube.com/embed/T4iQdU7rZLQ?si=B10uZGq8MaIGMn9A"
            tagline="Grip & Electric"
          >
            <small>Coming soon: Season 2 (July 2025)
            </small>
            <ReadMore linkText="About this project">
              EVVY Award Nominee
              <ul className="list-disc list-inside  pl-6">
                <li>Outstanding Lighting Design for Studio Television
                </li>
              </ul>
              Logline: <br></br>
              After her boyfriend's tragic death, a scholarly graduate student's reality is shattered when she discovers a book that allows her to travel through different film genres to see her lost love.
            </ReadMore>
          </MovieListing>
        </div>
      </div>
      <div className="mb-[8rem]">


        <div className="ml-[-10rem]">
          <div className="absolute w-30 h-30 bg-[#95FFB5] rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-black text-center">NATIONAL BROADCAST SOCIETY</span>
          </div>
        </div>
        <div className="mb-5">
          <MovieListing
            title="Remain Calm"
            info="Short Film ◦ Filmed: 2022 ◦ Released: 2023"
            url="https://www.youtube.com/embed/gPGkGvhSADE?si=oDdj1LcyPakvV64c"
            tagline="Director"
          >
            <ReadMore linkText="About this project">
              Logline: <br></br>
              A burnt out IT worker gets an unexpected high stakes phone call
            </ReadMore>
          </MovieListing>
        </div>
      </div>
      
      <div className="">
        COMING SOON <br />
        Episode 51: The Long Road Pt. 2 - Associate Producer <br/>
        Arlene (Thesis Film) - Sound Recordist<br />
        Baby Bird (Thesis Film) - Sound Recordist/Designer<br />
        Treatment (Thesis Film) - Sound Designer<br />
        Alphabet Soup (Thesis Film) - Sound Recordist/Designer<br />
        Bunk Beds (Thesis Film) - Producer<br />
        Cauldrons and Kickflips (Thesis Film) - Sound Recordist/Designer<br />
        Now Be Still (Thesis Film) - Sound Recordist/Designer<br />
        Pulling Teeth (Thesis Film) - Producer/Sound Designer<br />
        You Are Here (Thesis Film) - Key Grip/Sound Designer<br />
        Something’s Wrong with Kit - Gaffer<br />
      </div>
    </>
  );
}

export default Portfolio;
