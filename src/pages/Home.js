import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Parallax } from "react-parallax";
import Image1 from '../images/milad-fakurian-_S-zZyQiOr8-unsplash.jpg'
import Image2 from '../images/milad-fakurian-GJKx5lhwU3M-unsplash.jpg'
import ScrollToTop from "react-scroll-to-top";
function Home() {
  return (
    <div className="home">
      <ScrollToTop />
      <Parallax strength={600} bgImage={Image1} > 
      <div className="about">
        
        <h2 > Hi, I'm Elli</h2>
        <div className="prompt">
          <p>Welcome to my portfolio.</p>
          <a href="https://www.linkedin.com/in/ellipapaioannou" >
           <LinkedInIcon />
          </a>
          <a href="https://github.com/ellipapaioannou1" >
           <GithubIcon />
          </a>
          <a href="mailto:papaioannou.elli@gmail.com">
           <EmailIcon />
          </a>
          
        </div>
      </div>
      </Parallax>

      <Parallax strength={600} bgImage={Image2} >

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
      </Parallax>
    </div>
  );
}

export default Home;
