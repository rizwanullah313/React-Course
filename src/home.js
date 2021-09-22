import React, { useState } from "react";
import Alert from "./components/Alert";
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
            showAlert(" Dark Mode has been Enabled", "success " );
        } else {
            setMode("light");
            document.body.style.backgroundColor = "gray";
            showAlert(" White Mode has been Enabled", "success ")

        }
    };

    const [alert, setAlert] = useState(null); // alert ka object

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

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
            <Alert alert={alert} />
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
                {/* <About /> */}
            </div>
        </div>
    );
}
export default Home;
