import { useState } from 'react';


const Home = () => {
    const [userInput, setUserInput] = useState('');
    const onUserChangedText = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
      };
    return (
      <div className="root">
        <div className="container">
          <div className="header">
            <div className="header-title">
              <h1>sup, insert your headline here</h1>
            </div>
            <div className="header-subtitle">
              <h2>insert your subtitle here</h2>
            </div>
          </div>
          {/* Add this code here*/}
          <textarea
  className="prompt-box"
  placeholder="start typing here"
  value={userInput}
  onChange={onUserChangedText}
/>;
          <div className="prompt-container">
            <textarea placeholder="start typing here" className="prompt-box" />
          </div>
        </div>
        <div className="badge-container grow">
          <a
            href="https://buildspace.so/builds/ai-writer"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge">
              <Image src={buildspaceLogo} alt="buildspace logo" />
              <p>build with buildspace</p>
            </div>
          </a>
        </div>
      </div>
    );
  };