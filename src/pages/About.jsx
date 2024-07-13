import React from 'react'
import "../aboutstyles.css";

function About() {
  return (
    <>
      <div className="navshift"></div>
      <div class="container">
            <div class="centerlogo">
                <div class="photocontainer">
                    <img class="robphoto" src="media/robphoto.jpg" alt=""/>
                    <div class="rightpanel">
                        <div class="triangle">
                                
                        </div>
                        <div class="title"><p>Hey, I'm Robert</p></div>
                        <div class="desc">
                            
                            <p class="desctitle">About</p>
                            <p class = "description">Robert Burke is a twenty one year old filmmaker. They are currently attending Emerson College for a BFA in Media Arts Production.They grew up in Redding, California, where they filmed their first and soon to be second feature film. Sofia the Dealer, a grassroots film, was Robert's first feature, where they served as writer, director, producer and editor. Their follow up project, In the Middle, is currently in pre-production. Outside of these projects, Robert has performed a variety of roles on student film sets, including Gaffer, Grip and Sound Operator/Recordist. They're currently employed by Emerson Productions as an Audio Technician.</p>
                            <p class="desctitle">What I do</p>
                            <p>Director / Audio Technician / Editor / Cinematographer</p>
                            <div class="social-icons">
                                <a target="_blank" href="#">
                                  <img class="facebook" src="media\media-icons\icon-facebook.png" alt=""/>
                                </a>
                                <a target="_blank" href="#">
                                  <img src="media\media-icons\icon-indeed.png" alt=""/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/robertburkefilms/?hl=en">
                                    <img src="media\media-icons\icon-instagram.png" alt=""/>
                                </a>
                                <a target="_blank" href="https://vimeo.com/user160672798">
                                    <img src="media\media-icons\icon-vimeo.png" alt=""/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/robert-burke-b07b01207">
                                    <img src="media\media-icons\icon-linkedin.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default About