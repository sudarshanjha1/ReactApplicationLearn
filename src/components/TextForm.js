
import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick =()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const handleNotClicked=(event)=>{
    // console.log("On Changed")
    setText(event.target.value);
    
  }
  const handleUpClick1=()=>{
    let newtextClr="";
    setText(newtextClr)
  }
  const handleUpCopy=()=>{
    let text=document.getElementById("textbox");
    navigator.clipboard.writeText(text.value);
  }
 
  const [text, setText] = useState("Enter Text Here");
  
  
  
  return (
    <>
    <div className='container'>
    <h1>{props.heading} - {text}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} id="textbox" onChange={handleNotClicked} rows="3"></textarea>
</div>
<button class="btn btn-primary" onClick={handleUpClick}>Convert to upper Case </button>
<button class="btn btn-primary" onClick={handleUpClick1}>Clear </button>
<button class="btn btn-primary" onClick={handleUpCopy}>Copy </button>

    </div>
    <div className="container" my-2>
      <h1>Your text summary</h1>
      {text.trim() === "" ? '0' : text.trim().split(/\s+/).length} word 
      and {text.trim(/\s+/).length} character
    </div>
    </>  
  )
}
