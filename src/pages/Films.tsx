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
      <div className="ml-[-10rem]">
        <div className="absolute w-30 h-30 bg-[#95EBFF] rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-black">Films</span>
        </div>
      </div>
      <div className="flex gap-8 mb-5">
        <MovieListing
          title="Men, Women and Children & Others"
          info="Short Film ◦ Filmed: 2023 ◦ Released: 2025 ◦ 21 m ◦ BFA Capstone"
          url="https://www.youtube.com/embed/gPGkGvhSADE?si=JrodVdCTIYHlUJ5c"
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
      <div className="flex gap-8 mb-5">
        <MovieListing
          title="In the Middle"
          info="Feature Film ◦Filmed: 2022 ◦ Released: 2024 ◦ 1 hr 42 min"
          url="https://www.youtube.com/embed/gPGkGvhSADE?si=JrodVdCTIYHlUJ5c"
          tagline="Writer/Director/Producer/Editor/Sound Designer"
        >
          <ReadMore linkText="About this film">
            Logline:<br></br>
            An ambitious yet burnout photography student rushes to complete an
            unexpected final project amidst summer heat and shifting
            friendships.
          </ReadMore>
        </MovieListing>
        <MovieListing
          title="Sofia the Dealer"
          info="Feature Film ◦Filmed: 2021 ◦ Released: 2022 ◦ 1 hr 27 min"
          url="https://www.youtube.com/embed/B6KjVD824rQ?si=dRQ8B0zevWEKDEXh"
          tagline="Writer/Director/Producer"
        >
          <ReadMore linkText="Awards and Info">
            Logline: <br></br>
            Sofia, a quiet high school senior, struggles to keep herself and her
            ailing mother above the poverty line. But after a freak accident in
            her backyard, she's given the chance to make more than enough. Set
            during the Corona Virus pandemic.
          </ReadMore>
        </MovieListing>
      </div>
      <p className="font-semibold text-2xl mb-3">ORGANIZATIONS</p>
      <div className="ml-[-10rem]">
        <div className="absolute w-30 h-30 bg-[#95FFB5] rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-black text-center">Emerson Channel</span>
        </div>
      </div>
      <MovieListing
        title="7Hz"
        episodes={[
          { title: "S1 E1", url:"https://www.youtube.com/embed/VPT8w2skkF4?si=1cndml9WG9SIVVyy" },
          { title: "S1 E2", url:"https://www.youtube.com/embed/3v9SGP2hXTg?si=m7BsPTx6T2yndzF3" },
        ]}
        info="Short Film ◦ Filmed: 2024 ◦ 11 m ◦ Directed Study Project"
      
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
    </>
  );
}

export default Portfolio;
