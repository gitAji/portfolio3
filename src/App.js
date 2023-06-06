import React from "react";
import "./App.css";
import Header from "./components/leyout/header";
import Footer from "./components/leyout/footer";
import Skills from "./components/skills";
import Home from "./components/home";
import { Element } from "react-scroll";
import Contacts from "./components/contacts";
import Works from "./components/works";
import NavIcons from "./components/navIcons";
const App = () => {
  return (
    <>
      <Header />

      <NavIcons />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="works" className="element">
        <Works />
      </Element>
      <Element name="contacts" className="element">
        <Contacts />
      </Element>

      <Footer />
    </>
  );
};

export default App;
