import React, { useState } from "react";

export default function TextForm(props) {

  const HandleUppercase=()=>
  {
    // console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
  }

  const HandleOnChange= (event)=>
  {
    // console.log("On Change");
    setText(event.target.value)
  }

  const HandleLowercase=()=>
  {
    // console.log("lowercase clicked");
    let newText=text.toLowerCase();
    setText(newText)
  }

  const HandleClear=()=>
  {
    setText("")
  }

  const CopyText=()=>
  {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.Mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea value={text} placeholder="Enter text" className="form-control" onChange={HandleOnChange} 
          id="myBox" rows="8" style={{backgroundColor:props.Mode==="light"?"white":"#6c757d", 
          color:props.Mode==="light"?"black":"white"}}></textarea>
          <small id="emailHelp" className="form-text text-muted">Enter text to analyze</small>
          </div>
          <button className="btn btn-primary mx-2" onClick={HandleUppercase}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={HandleLowercase}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={HandleClear}>Clear</button>
          <button className="btn btn-primary mx-2" onClick={CopyText}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.Mode==="light"?"black":"white"}}>
      <h1 >Your Text Summary</h1>
      <p><strong>No. of words </strong>{text.split(" ").length} </p>
      <p><strong>No.of Characters </strong>{text.length}</p>
      <p><strong>Minutes to read </strong>{0.008*text.split(" ").length} </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </>
  );
}
