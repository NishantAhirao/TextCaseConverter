import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextArea(props) {
  const AfterChange = (event) => {
    setText(event.target.value);
  };

  const HandleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const HandleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const HandleTitleClick = () => {
    const str = text;

    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    console.log(str2);
    setText(str2);
  };

  const HandleSentenceclick = () => {
    const str = text.toLowerCase();

    const arr = str.split(". ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(". ");
    console.log(str2);
    setText(str2);
  };

  const HandleInverseclick = () => {
    const str = text.toUpperCase();

    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    console.log(str2);
    setText(str2);
  };

  function wordcount() {
    if (text.length !== 0) {
      let A1 = text.split(" ").length;
      return A1;
    } else {
      let A1 = 0;
      return A1;
    }
  }
  function charcount() {
    let A2 = text.length;
    return A2;
  }
  


  const [text, setText] = useState("Enter your text here");
  return (
    <>
    <div id="home">
      
    </div>
    <div className="welcome">
     <h1>
   <span>We</span>
   <span>lc</span>
   <span>om</span>
   <span>
    e t

   </span>
   <span>
    o T
     </span>
   <span>E</span>
   <span>XT</span>
   <span>CO</span>
   <span>NV</span>
   <span>ER</span>
   <span>TE</span>
   <span>R</span>
     </h1>
    </div>
<div >

      <div  className="heading mb-3">
        <h2>{props.title}</h2>
        <textarea
          className="bg-image form-control my-2"
          value={text}
          
          onChange={AfterChange}
          id="exampleFormControlTextarea1"
          rows="15"
          ></textarea>
      </div>
      
<div className="mybtn">

      <button
        type="button"
        className="btn btn-white btn-animate mx-1"
        onClick={HandleUpclick}
        ><span>

        ConvertToUpperCase
      </span>
      </button>
      <button
        type="button"
        className="btn btn-white btn-animate mx-1 "
        onClick={HandleLowclick}
        ><span>

        ConvertToLowerCase
        </span>
      </button>
      <button
        type="button"
        className="btn btn-white btn-animate mx-1"
        onClick={HandleTitleClick}
        ><span>

        ConvertToTitle
        </span>
      </button>
      <button
        type="button"
        className="btn btn-white btn-animate mx-1"
        onClick={HandleSentenceclick}
        ><span>

        ConvertToSentence
        </span>
      </button>
      <button
        type="button"
        className="btn btn-white btn-animate mx-1"
        onClick={HandleInverseclick}
        ><span>

        ConvertToInverseCase
        </span>
      </button>
          </div>
        
    </div>
      <div className="details my-3">
        <h4>
          {wordcount()} words, {charcount()} character
        </h4>
        <h5>{wordcount() * 0.008} minutes to read</h5>
        <div id="preview" className="contain my-4">
          <h2 className="textpre">- PREVIEW</h2>
          <div className="forbox1" >{text} </div>
        </div>
      </div>
      <div id="aboutus" className="about">
        <h3 className="textpre">-@bout TEXTCONVERTER</h3>
      <p className="para">

      <h5>Welcome to the Convert Case Text Generator Tool
      </h5>
A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:
      </p>

      <p className="para"><h5>
        Sentence Case
        </h5>
The sentence case converter will allow you to paste any text you’d like, and it will automatically transform it to a fully formed structured sentence.

It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.

Note: it won’t, however, capitalize names or places.

This is an example of sentence case.
        </p>
      <p className="para" ><h5>
        Lower Case
        </h5>
If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.

this is an example of lower case.
        </p>
      <p className="para"><h5>
        Upper Case
        </h5>
The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.

THIS IS AN EXAMPLE OF UPPER CASE.
        </p>
      <p className="para"><h5>
        Title Case
        </h5>
The title case converter is perfect for those who are a bit unsure on how to title an upcoming essay. It essentially ensures the correct letters are capitalized within the context of a title. Words such as “an” will be left all in lower case and words that are important will be converted such as “Title”.

This Is an Example of Title Case.
        </p>
      <p className="para"><h5>
        Inverse Case
        </h5>
The alternating case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word.
tHIS iS aN eXAMPLE oF iNVERSEE cASE.


        </p>

        
      </div>
    
      
    </>
  );
}
