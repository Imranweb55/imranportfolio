import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

function Approutes() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <div id="home">
            <Home />
          </div>
          <div id="about-us">
            <About />
          </div>
          <div>
            <Education />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Project />
          </div>
          <div>
            <Contact />
          </div>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default Approutes;
