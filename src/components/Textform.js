import React ,{useState}from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        var newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleloclick=()=>{
        var newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleclearclick=()=>{
        var newText = "";
        settext(newText)
        props.showAlert("Text cleared!","success")
    }
    const handlesentenceclick=()=>{
        var newText = text[0].toUpperCase() + text.slice(1).toLowerCase();
        settext(newText) 
        props.showAlert("Converted to sentence!","success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("copied text into clipboard!","success")

    }
    const capitalFirstLetter = ()=>{
        let words = text.split(" ")
       let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        settext(uppercaseword)
        props.showAlert("Capital every first letter of word !","success")

    }
    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        settext(newText);
        props.showAlert("Reverse words !","success")

      };
      const setText = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        settext(newText);
        props.showAlert("Set reversed text!","success")

      };
    const handleOnChange=(event)=>{
        settext(event.target.value);
    }
    

    const [text, settext] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
           <h1 className="mb-4">{props.heading}</h1>
              <div className="mb-3">
                  <textarea className="form-control" style={{background:props.mode==='dark'?'#091652':'white',color:props.mode==='dark'?'white':'black'}} 
                   value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
              </div>
              <button disabled={text.length===0} className="btn btn-info mx-1 my-1"  onClick={handleupclick} >Convert to uppercase</button>
              <button disabled={text.length===0} className="btn btn-info mx-1  my-1"onClick={handleloclick} >Convert to Lowercase</button>
              <button  disabled={text.length===0} className="btn btn-info mx-1  my-1" onClick={handleclearclick} >clear</button>
              <button disabled={text.length===0} className="btn btn-info mx-1  my-1"onClick={handlesentenceclick} >Sentence case</button>
              <button disabled={text.length===0} className="btn btn-info mx-1 my-1"onClick={handleCopy} >copy Text</button>
              <button disabled={text.length===0} className="btn btn-info mx-1  my-1" onClick={capitalFirstLetter} >capitalize case</button>
              <button disabled={text.length===0} className="btn btn-info mx-1  my-1" onClick={reversed} >Reverse text</button>
              <button disabled={text.length===0} className="btn btn-info mx-1 my-1"onClick={setText} >set Text</button>



        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summery</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
        </>
    )
}
