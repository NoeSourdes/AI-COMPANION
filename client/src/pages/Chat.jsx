import React, { useState, useRef, useEffect } from "react";
import logo_new_message from "../assets/logo-new-message.png";
import "../sass/pages/Chat.scss";
import logo_app from "../assets/logo-app.png";
import { NavLink } from "react-router-dom";

const Chat = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    const sentence = "Hi, I'm AI-Companion!! Ask me a question.."
    let i = 0
    const interval = setInterval(() => {
      setText(sentence.substring(0, i));
      i++
      if( i>= sentence.length){
        clearInterval(interval)
      }
    }, 50)
  }, [])


  
  const formRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [loadInterval, setLoadInterval] = useState(null);

  const loader = (element) => {
    element.textContent = "";

    const interval = setInterval(() => {
      // Update the text content of the loading indicator
      element.textContent += "";

      // If the loading indicator has reached three dots, reset it
      if (element.textContext === "...") {
        element.textContent = "";
      }
    }, 300);

    setLoadInterval(interval);
  };

  const typeText = (element, text) => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  // generate unique ID for each message div of bot
  // necessary for typing text effect for that specific reply
  // without unique ID, typing text will work on every element
  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  };

  const chatStripe = (value, uniqueId) => {
    return `<p class='message' id=${uniqueId}>${value}</p>`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(formRef.current);

    // user's chatstripe
    chatContainerRef.current.innerHTML += chatStripe(data.get("prompt"));

    // to clear the textarea input
    formRef.current.reset();

    // bot's chatstripe
    const uniqueId = generateUniqueId();
    chatContainerRef.current.innerHTML += chatStripe(" ", uniqueId);

    // to focus scroll to the bottom
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

    // specific message div
    const messageDiv = document.getElementById(uniqueId);

    // messageDiv.innerHTML = "..."
    loader(messageDiv);

    const message = await fetch("https://ai-companion-u9xy.onrender.com", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        prompt: data.get("prompt"),
      }),
    });

    clearInterval(loadInterval);
    messageDiv.innerHTML = "";

    if (message.ok) {
      const data = await message.json();
      const parsedData = data.bot.trim(); // trims any trailing spaces/'\n'

      typeText(messageDiv, parsedData);
    } else {
      const err = await message.text();

      messageDiv.innerHTML = "Something went wrong";
      alert(err);
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  const clearChat = () => {
    chatContainerRef.current.innerHTML = ""
  }
  return (
    <div className="Chat">
      <div className="logo">
        <NavLink to="/">
          <img src={logo_app} alt="logo application" />
        </NavLink>
      </div>
      <div className="titel">
        <p>AI-COMPANION</p>
      </div>
      <section className="section-dialogue">
        <span className="sentance">
          {text}
        </span>
        <div id="chat_container" ref={chatContainerRef}></div>
      </section>
      <div className="section-input">
        <button className="clear" onClick={clearChat}>
          <img src={logo_new_message} alt="log new message" /> New Chat
        </button>
        <form ref={formRef} onSubmit={handleSubmit}>
          <textarea
            spellCheck="false"
            placeholder="Ask me a question"
            required
            name="prompt"
            onKeyUp={handleKeyUp}
          ></textarea>
          <button className="submit" type="submit">
            <ion-icon name="send-outline"></ion-icon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
