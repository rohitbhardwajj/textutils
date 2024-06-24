import React, { useState } from 'react';


export default function Textform(props){
  const uppercase = ()=>{
   
   setText(text.toUpperCase());
   
   if(text.length===0){
    props.showAlert("please enter text","danger");
    return;
   }
   props.showAlert("converted to upper case","success");
  }
  const lowercase = ()=>{
   setText(text.toLowerCase());
   if(text.length===0){
    props.showAlert("please enter text","danger");
    return;
   }
   props.showAlert("converted to lower case","success");
  }
  const clear = ()=>{
   setText("");
  }
  const copy = ()=>{
  let text= document.getElementById("text");

    text.select();
    navigator.clipboard.writeText(text.value);
    
    props.showAlert("copied to clipboard","success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleOnChange = (event)=>{
   setText(event.target.value);
  }

  const [text, setText] = useState('');
    return(
        <>
 

<div className="container">
  <h1> {props.heading}</h1>
  <textarea className="form-control" value={text} id="text" rows="6" onChange={handleOnChange}></textarea>
<button type="button" onClick={uppercase} className="btn btn-outline-primary my-3 mx-1">UPPER CASE</button>
<button type="button" onClick={lowercase} className="btn btn-outline-secondary my-3 mx-1">LOWER CASE</button>
<button type="button" onClick={speak} className="btn btn-outline-success my-3 mx-1"><i class="fa-solid fa-volume-high"></i></button>
<button type="button" onClick={copy} className="btn btn-outline-danger my-3 mx-1">COPY TEXT</button>
<button type="button" onClick={clear} className="btn btn-outline-warning my-3 mx-1">CLEAR ALL</button>

</div>



<div className="container my-3">
  <h1>Your text summary</h1>
  <p>{text.split(" ").length-1} Word and {text.length} character</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>

</>
  

    )
};