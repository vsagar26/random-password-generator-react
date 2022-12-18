import React, { useState } from "react";
import "./password.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './character.js'

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordlength, setPasswordLength] = useState(20);
  const [includeuppercase, setIncludeUppercase] = useState(false);
  const [includelowercase, setIncludeLowercase] = useState(false);
  const [includenumbers, setIncludeNumbers] = useState(false);
  const [includesymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (e) =>{
    let passwordCharacters = "";

    if (includeuppercase){
      passwordCharacters = passwordCharacters + upperCaseLetters 
    }

    if (includelowercase){
      passwordCharacters = passwordCharacters + lowerCaseLetters 
    }

    if (includenumbers){
      passwordCharacters = passwordCharacters + numbers 
    }

    if (includesymbols){
      passwordCharacters = passwordCharacters + specialCharacters 
    }

    setPassword(createPassword(passwordCharacters))
  }

  const createPassword = (passwordCharacters) => {

    let password = ""

    const passwordCharacterLength = passwordCharacters.length

    for(let i = 0; i< passwordlength; i++){
      const characterIndex = Math.round(Math.random()*passwordCharacterLength);
      password = password + passwordCharacters.charAt(characterIndex)
    }

    return password
  }

  const copyToClipboard = () =>{
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
    console.log(password)
    alert("Password Copied")
    
  }

  const handleCopyPassword = () =>{
    copyToClipboard()
  }

  return (
    <div className="main">
      <div className="container">
        <h2 className="main-heading">Random Password Generator</h2>
        <div className="password">
          <h3>{password}</h3>
        </div>
        <span className="icon material-symbols-outlined" onClick={handleCopyPassword}>content_copy</span>
        <div className="specs">
          <label htmlFor="" className="input">
            Password Length
          </label>
          <input
            type="number"
            min={8}
            max={20}
            className="input"
            defaultValue={passwordlength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="specs">
          <label htmlFor="" className="label">
            Include Uppercase Letters
          </label>
          <input type="checkbox" className="input" checked={includeuppercase} 
          onChange={(e)=>setIncludeUppercase(e.target.checked)}/>
        </div>
        <div className="specs">
          <label htmlFor="" className="label">
            Include Lowercase Letters
          </label>
          <input type="checkbox" className="input" checked={includelowercase} 
          onChange={(e)=>setIncludeLowercase(e.target.checked)}/>
        </div>
        <div className="specs">
          <label htmlFor="" className="label">
            Include Numbers
          </label>
          <input type="checkbox" className="input" checked={includenumbers} 
          onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
        </div>
        <div className="specs">
          <label htmlFor="" className="label">
            Include Symbols
          </label>
          <input type="checkbox" className="input" checked={includesymbols} 
          onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
        </div>
        <button type="submit" className="button" onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default Password;
