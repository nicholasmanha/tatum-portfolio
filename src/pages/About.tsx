import React from 'react'
import "../aboutstyles.css";

function About() {
  return (
    <>
      <div className="navshift"></div>
      <div className="container">
            <div className="centerlogo">
                <div className="photocontainer">
                    <img className="robphoto" src="media/robphoto.jpg" alt=""/>
                    <div className="rightpanel">
                        <div className="triangle">
                                
                        </div>
                        <div className="title"><p>Hey, I'm Tatum</p></div>
                        <div className="desc">
                            
                            <p className="desctitle">About</p>
                            <p className = "description">Tatum Burke is a twenty-two year old filmmaker. They are currently attending Emerson College for a BFA in Media Arts Production.They grew up in Redding, California, where they filmed their first and soon to be second feature film. Sofia the Dealer, a grassroots film, was Tatum's first feature, where they served as writer, director, producer and editor. Their follow up project, In the Middle, is currently in pre-production. Outside of these projects, Tatum has performed a variety of roles on student film sets, including Gaffer, Grip and Sound Operator/Recordist. They're currently employed by Emerson Productions as an Audio Technician.</p>
                            <p className="desctitle">What I do</p>
                            <p>Director / Audio Technician / Editor / Cinematographer</p>
                            <div className="social-icons">
                                <a href="#">
                                  <img className="facebook" src="media\media-icons\icon-facebook.png" alt=""/>
                                </a>
                                <a href="#">
                                  <img src="media\media-icons\icon-indeed.png" alt=""/>
                                </a>
                                <a href="https://www.instagram.com/robertburkefilms/?hl=en">
                                    <img src="media\media-icons\icon-instagram.png" alt=""/>
                                </a>
                                <a href="https://vimeo.com/user160672798">
                                    <img src="media\media-icons\icon-vimeo.png" alt=""/>
                                </a>
                                <a href="https://www.linkedin.com/in/robert-burke-b07b01207">
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