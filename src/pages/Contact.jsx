import React, { useState } from "react";
import "../contactstyles.css";

function Contact() {
  const [focusedName, setFocusedName] = React.useState(false);
  const onFocusName = () => setFocusedName(true);
  const onBlurName = () => setFocusedName(false);

  const [name, setName] = useState('');

  const [focusedEmail, setFocusedEmail] = React.useState(false);
  const onFocusEmail = () => setFocusedEmail(true);
  const onBlurEmail = () => setFocusedEmail(false);

  const [email, setEmail] = useState('');

  const [focusedPhone, setFocusedPhone] = React.useState(false);
  const onFocusPhone = () => setFocusedPhone(true);
  const onBlurPhone = () => setFocusedPhone(false);

  const [phone, setPhone] = useState('');

  const [focusedMessage, setFocusedMessage] = React.useState(false);
  const onFocusMessage = () => setFocusedMessage(true);
  const onBlurMessage = () => setFocusedMessage(false);

  const [message, setMessage] = useState('');

  return (
    <>
      <div className="containercontact">
        <div className="form">
          <div className="contact-info">
            <h3 className="pb-5 title-contact">Let's get in touch</h3>

            <div className="info">
              <div className="information">
                <img src="media\home.png" className="icon" alt="" />
                <p>120 Boylston St, Boston, MA 02116</p>
              </div>
              <div className="information">
                <img src="media\email.png" className="icon" alt="" />
                <p>robertwburke@icloud.com</p>
              </div>
              <div className="information">
                <img src="media\phone-call.png" className="icon" alt="" />
                <p>(530) 524-2049</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with me :</p>
              <div className="social-icons-contact">
                <a href="#">
                  <img
                    src="media\media-icons\icon-facebook-red.png"
                    alt=""
                  ></img>
                </a>
                <a href="#">
                  <img src="media\media-icons\icon-indeed-red.png" alt=""></img>
                </a>
                <a href="https://www.instagram.com/robertburkefilms/?hl=en">
                  <img
                    src="media\media-icons\icon-instagram-red.png"
                    alt=""
                  ></img>
                </a>
                <a href="https://vimeo.com/user160672798">
                  <img src="media\media-icons\icon-vimeo-red.png" alt=""></img>
                </a>
                <a href="https://www.linkedin.com/in/robert-burke-b07b01207">
                  <img
                    src="media\media-icons\icon-linkedin-red.png"
                    alt=""
                  ></img>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form
              action="https://formsubmit.co/robertwburke@icloud.com"
              method="POST"
              autocomplete="off"
            >
              <input type="hidden" name="_subject" value="new email"></input>

              <h3 className="title-contact">Contact me</h3>
              <div className={`input-container${(focusedName || name !== "") ? " focus" : ""}`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={event => setName(event.target.value)}
                  onFocus={onFocusName}
                  onBlur={onBlurName}
                  className="input"
                  required
                ></input>
                <label for="">Username</label>
                <span>Username</span>
              </div>
              <div className={`input-container${(focusedEmail || email !== "") ? " focus" : ""}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                  onFocus={onFocusEmail}
                  onBlur={onBlurEmail}
                  className="input"
                  required
                ></input>
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className={`input-container${(focusedPhone || phone !== "") ? " focus" : ""}`}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={event => setPhone(event.target.value)}
                  onFocus={onFocusPhone}
                  onBlur={onBlurPhone}
                  className="input"
                />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div
                className={`input-container textarea${
                  (focusedMessage || message !== "") ? " focus" : ""
                }`}
              >
                <textarea
                  name="message"
                  onChange={event => setMessage(event.target.value)}
                  onFocus={onFocusMessage}
                  onBlur={onBlurMessage}
                  className="input"
                ></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;