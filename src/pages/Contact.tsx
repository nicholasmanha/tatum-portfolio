import React, { useState } from "react";
import "../contactstyles.css";
import { GoHomeFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

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
      <div className="mb-[3rem]">
        <p className="text-5xl font-bold mb-5">CONTACT</p>
        <div className="flex w-full">
          <div className="w-1/2">
            <form
              action="https://formsubmit.co/robertwburke@icloud.com"
              method="POST"
              className="flex flex-col gap-4 !p-0 w-1/2"
            >
              <input type="hidden" name="_subject" value="new email" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-1 border border-gray-300 rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-1 border border-gray-300 rounded"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="p-1 border border-gray-300 rounded"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="p-1 border border-gray-300 rounded resize-vertical"
              ></textarea>

              <button
                type="submit"
                className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <div className="text-lg flex mb-4"> <div className="flex flex-col justify-center mr-2"> <GoHomeFill size={25} /></div> Bostom, MA</div>
            <div className="text-lg flex mb-4"><div className="flex flex-col justify-center mr-2"><MdEmail size={25} /> </div>tatumwburke@icloud.com</div>
            <div className="text-lg flex mb-4"><div className="flex flex-col justify-center mr-2"><FaPhone size={25} /> </div>(530)524-2049</div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;