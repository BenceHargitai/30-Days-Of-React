import React from "react";
import ReactDOM from "react-dom";
//import every image from the images folder
import html from "./images/1.png";
import css from "./images/2.png";
import javascript from "./images/3.png";
import react from "./images/4.png";

const techs = [
  {
    name: "HTML",
    img: html,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "JavaScript",
    img: javascript,
  },
  {
    name: "React",
    img: react,
  },
];

const Techlist = ({ techs,imagestyle }) => {

  const techlist = techs.map((tech) => (
    <li key={tech.name}>
      <img src={tech.img} alt={tech.name} style={imagestyle} />
    </li>
  ));
  return techlist;
};

const Section = ({ techs,liststyle,imagestyle }) => (
  <section>
    <div className="main-wrapper">
      <p>Frontend Techs:</p>
      <ul style={liststyle}>
        <Techlist techs={techs} imagestyle={imagestyle} />
      </ul>
    </div>
  </section>
);

const ColorDiv = ({ color }) => (
    <div
      style={{
        background: color,
        color: "white",
        width: "100%",
        height: "100px",
      }}
    >
      {color}
    </div>
)




const App = () => {

  const liststyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
  };
  const imagestyle = {
    width: "100px",
    height: "100px",
    margin: "10px",
  };
  const generate = () => {
    let color = "#";
    let letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
  };



  return (
    <div className="app">
      <main>
        <Section techs={techs} liststyle={liststyle} imagestyle={imagestyle}/>
        <ColorDiv color={generate()}/>
        <ColorDiv color={generate()}/>
        <ColorDiv color={generate()}/>
        <ColorDiv color={generate()}/>
        <ColorDiv color={generate()}/>
        <ColorDiv color={generate()}/>
      </main>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
