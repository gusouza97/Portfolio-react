import React from "react";
import Header from './Header/index';
import About from "./About/index";
import Resume from "./Resume";
import MyProjects from "./MyProjects";
import Contact from "./Contact"

function App() {
  return (
    <div>
        <Header/>
        <About />
        <Resume />
        <MyProjects />
        <Contact />
    </div>
  );
}

export default App;