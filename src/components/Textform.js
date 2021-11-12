import React ,{useState}from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        // console.log("handleupclick" + text)
        var newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleloclick=()=>{
        // console.log("handleupclick" + text)
        var newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleclearclick=()=>{
        // console.log("handleupclick" + text)
        var newText = "";
        settext(newText)
        props.showAlert("Text cleared!","success")
    }
    const handlesentenceclick=()=>{
        // console.log("handleupclick" + text)
        var newText = text[0].toUpperCase() + text.slice(1).toLowerCase();
        settext(newText) 
        props.showAlert("Converted to sentence!","success")
    }
    const handlecopy=()=>{
        console.log("i m copy")
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
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
        // console.log("onchange")
        settext(event.target.value);
    }
    

    const [text, settext] = useState('');
    // settext("new Text")
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
           <h1>{props.heading}</h1>
              <div className="mb-3">
                  <textarea className="form-control" style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} 
                   value = {text} onChange={handleOnChange}id="mybox" rows="8"></textarea>
              </div>
              <button className="btn btn-info mx-1"  onClick={handleupclick} >Convert to uppercase</button>
              <button className="btn btn-info mx-1"onClick={handleloclick} >Convert to Lowercase</button>
              <button className="btn btn-info mx-1" onClick={handleclearclick} >clear</button>
              <button className="btn btn-info mx-1"onClick={handlesentenceclick} >Sentence case</button>
              <button className="btn btn-info mx-1"onClick={handlecopy} >copy Text</button>
              <button className="btn btn-info mx-1" onClick={capitalFirstLetter} >capitalize case</button>
              <button className="btn btn-info mx-1" onClick={reversed} >Reverse text</button>
              <button className="btn btn-info mx-1"onClick={setText} >set Text</button>



        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summery</h2>
            <p>{text.split(" ").length=1?text.split(" ").length-1:text.split(" ").length} words and {text.length} character</p>
            <p>{0.008*[text.split(" ").length-1]} Minute to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something in the textbox above to preview here'}</p>
        </div>
        </>
    )
}
