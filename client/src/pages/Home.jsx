import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../sass/pages/Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="section_1">
        <header>
          <Navbar />
        </header>
        <div className="insight">
          <section>
            <div className="left">
              <p>
                Discover a new dimension of conversation with our advanced AI.
              </p>
              <NavLink to="chat">
                <button>Try AI</button>
              </NavLink>
            </div>
            <div className="right">
              <div className="dialog-block">
                <p className="mes-1">Hello, how are you today?</p>
                <p className="mes-2">Hello, I am fine !</p>
                <p className="mes-3">
                  I would like to talk about my fears. I am afraid of failure
                  and of not living up to the expectations of others.
                </p>
                <p className="mes-4">
                  I understand. It's normal to be afraid of failure and not
                  living up to the expectations of others. It is important to
                  remember that no one is perfect and failure is a part of life.
                  It is important to focus on learning from these failures
                  rather than focusing on the failure itself.
                </p>
                <p className="mes-5">
                  Thank you very much, it comforts me a lot.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="section_2">
        <div className="insight">
          <section>
            <div className="left">
              <div className="dialog-block">
                <p className="mes-1">What is the capital of Spain ?</p>
                <p className="mes-2">The capital of Spain is Madrid.</p>
                <p className="mes-3">How long does a soccer game last ?</p>
                <p className="mes-4">
                  A soccer match usually lasts 90 minutes, divided into two
                  halves of 45 minutes each.
                </p>
                <p className="mes-5">
                  What is the distance between the earth and the moon ?
                </p>
                <p className="mes-6">
                  The average distance between the Earth and the Moon is about
                  384 400 kilometers.
                </p>
                <p className="mes-7">
                  Thank you very much for these quick answers!
                </p>
              </div>
            </div>
            <div className="right">
              <p>
                Get quick and accurate answers to all your questions with our AI
              </p>
              <NavLink to="chat">
                <button>Try AI</button>
              </NavLink>
            </div>
          </section>
        </div>
      </div>
      <footer className="section_3">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
