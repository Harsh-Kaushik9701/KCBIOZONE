import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram, AiFillLinkedin} from "react-icons/ai"

const Home = () => {
  return (
   <>
    <div className="Home" id='home'>
      <main>
        <h1>K.C Biozone</h1>
        <h2>Sonia Kaushik Biology Expert</h2>
      </main>
    </div>

    <div className="Home2">
      <img src={vg} alt="Graphics" />

        <div>
          <p>
          Education is the act of learning things around us. It helps us to easily understand and deal with any problem and makes balance throughout the whole life in every aspect. Education is the first and foremost rights of every human being. Without education we are incomplete and our lives are useless. Education helps us to set a goal and go ahead by working on that throughout the life. It improves our knowledge, skill, confidence level and personality
          </p>
        </div>
    </div>

    <div className="Home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p> Welcome to our biology learning hub! Here, we are passionate about exploring the wonders of life and the natural world. Our dedicated biology teacher, with years of experience and a deep love for the subject, is committed to making science engaging and accessible for all students. Whether you’re fascinated by the smallest microorganisms or the vast ecosystems, our interactive and hands-on approach ensures that every lesson is an adventure in discovery. Join us in uncovering the secrets of life and igniting your curiosity for biology!.
        </p>
      </div>
    </div>

    <div className="Home4" id="courses">
      <div>
        <h1>Available at</h1>

        <article>

          <div style={{
            animationDelay:"0.3s"
          }
          }>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s"
          }
          }>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"0.7s"
          }
          }>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
          <div style={{
            animationDelay:"0.3s"
          }
          }>
            <AiFillLinkedin/>
            <p>Linkedin</p>
          </div> 
        </article>
      </div>
    </div>
   </>
  );
};

export default Home;
