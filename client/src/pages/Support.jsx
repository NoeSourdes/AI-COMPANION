import React from "react";
import Navbar from "../components/Navbar";
import "../sass/pages/Support.scss";
import logo_open_ai from '../assets/logo-open-ai.avif'
const Support = () => {
  return (
    <div className="page-support">
        <header>
          <Navbar />
        </header>
      <div className="section">
        <div className="section">
          <div className="left">
            <div className="titel">Powered by OpenAI</div>
            <div className="para">
              <p>
                I leveraged OpenAI's powerful API to enhance the functionality
                of my website. By utilizing OpenAI's advanced language models
                and machine learning algorithms, I was able to create a more
                efficient and engaging user experience for my visitors. With the
                help of OpenAI's API, my website is able to perform advanced
                natural language processing tasks such as sentiment analysis,
                language translation, and question-answering. This has allowed
                me to deliver more personalized content to my users and provide
                them with a more seamless experience overall.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="img">
                <img src={logo_open_ai} alt="logo-open-ai" />
            </div>
          </div>
        </div>
      </div>
          <p className="sentance-copy">© 2023 AI-COMPANION</p>
    </div>
  );
};

export default Support;
