// import React from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleRemove = () => {
    var text = document.getElementById("myBox");
    setText("");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const style = {
    //  maxHeight:'1000px',
    minHeight: "50vh",
    resize: "none",
    padding: "9px",
    boxSizing: "border-box",
    fontSize: "15px",
  };
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="form-floating my-3">
        <textarea
          style={style}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
        ></textarea>
      </div>
      <div className="container my-3">
        <p><b>{text.split(" ").length-1} Words and {text.length} Characters</b></p>
      </div>
      <div className="container my-3">
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemove}
        >
          Remove Text
        </button>
      </div>
    </div>
  );
}
