import React from "react";
import Header from './Header/index';
import About from "./About/index";
import Resume from "./Resume";
import MyProjects from "./MyProjects";
import Contact from "./Contact"
import '../Shared/wrapper-general.css';

function App() {
  return (
    <div>
      <div className="wrapper-general">
        <Header/>
        <About />
        <Resume />
        <MyProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;