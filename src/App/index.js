import React from "react";
import Header from './Header/index';
import About from "./About/index";
import Resume from "./Resume";
import MyProjects from "./MyProjects";

function App() {
  return (
    <div>
        <Header/>
        <About />
        <Resume />
        <MyProjects />
    </div>
  );
}

export default App;