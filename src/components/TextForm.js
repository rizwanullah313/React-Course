import { string } from "prop-types";
import React, { useState } from "react";

export default function TextForm(props) {
  const handeUpClick = () => {
    console.log("Upper Case Button Click" + text);
    // settext("Change Text");
    let nText = text.toUpperCase();
    settext(nText);
  };

  const handeLoClick = () => {
    console.log("Lower Case Button Click" + text);
    // settext("Change Text");
    let nText = text.toLowerCase();
    settext(nText);
  };

  const handleclClick = () => {
    let nttext = " ";
    settext(nttext);
  };
  const handlleOnChange = (event) => {
    console.log("On Change");
    settext(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
  };
  const [text, settext] = useState(" ");
  // settext("New Text");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black"
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handlleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handeUpClick}>
          Convert To Uper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handeLoClick}>
          Convert To Lower Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleclClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <hr />
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black"
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter Text in above Box To Preview here"}
        </p>
      </div>
    </>
  );
}
