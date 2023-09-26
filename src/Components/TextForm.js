import React, {useState}from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>
    {   
      let newText = text.toUpperCase('hello');
      setText(newText);
      props.showAlert("Converted to uppercase","success");
    }

    const handleLowClick=()=>
    {   
      let newText = text.toLowerCase('hello');
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick=()=>
    {   
      let newText = ('');
      setText(newText);
      props.showAlert("Cleared Text","success");
    }
    
    const handleCopyClick=()=>
    {   
      var text =document.getElementById("my_Box");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Coped to Clipbord","success");
    }

    const handleSpacesClick=()=>
    {   
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    
    const handleEmailClick=()=>
    {   
      let newText = text.split(/[ ]+/);
      setText(newText.join("")+text.length+("@gmail.com"));
    }

    const handleOnChange=(event)=>
    {
        console.log("on change")
       setText(event.target.value);
    }

    const [text, setText] = useState("");  
    
  return (
    <>
  <div className ='container my-3'>
     <h1 className='container' style={{color:props.Mode ==='light'?'black':'white'}}>{props.Heading}</h1> 
      <div className="mb-3">
        <textarea className={`form-control `} value={text} id="my_Box" style={{backgroundColor: props.Mode ==='light'?'white':'#222222',color:props.Mode ==='light'?'black':'white'}} rows="8" onChange = {handleOnChange} placeholder={props.placeHolder}></textarea>
     </div >
        <button type="button" className="btn btn-primary"  onClick={handleUpClick}>UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>lowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleSpacesClick}>Handle spaces</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleEmailClick}>make Email</button>
  </div>
  
  <div className="container my-1" style={{color:props.Mode ==='light'?'black':'white'}} >
    <h2> TEXT SUMMARY</h2>
    <p>Charectors in Text : {text.length} &   Words in Text : {text.length> 0?text.split(" ").length:(0)}</p>
    <p></p>
    <h2>PREVIEW</h2>
    <p>{text.length>0?text:"Enter text to textbox to Preview"}</p>
    
    </div>

  </>
  )
}
