import React, { useState } from "react";
// import abc from "./file1";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function Home() {
  const [mode, setMode] = useState("light");
  // let name = "bahria";
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <div>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <h1> {name} University</h1>
      <div className="container"></div>
      <p>
        Open the command line terminal on your system. Navigate to your Laravel
        application directory. Then execute the following PHP artisan command to
        check the Laravel version. The above output shows that you are running
        Laravel Framework 7.17.
      </p> */}
      <Navbar
        tname="bahria"
        abouttxt="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/*    <Navbar/> */}
      <br />
      <hr /> <hr />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </div>
  );
}
export default Home;
