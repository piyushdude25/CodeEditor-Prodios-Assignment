import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min"; // Import JSX syntax highlighting
import "prismjs/themes/prism.css"; // Import PrismJS CSS theme
import "./codeStyling.css";

const CodeEditor = ({ initialCode = "", language = "jsx" }) => {
  const [code, setCode] = useState(initialCode);
  const codeRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    Prism.highlightElement(codeRef.current);
  }, [code]);

  const handleTextAreaChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div
      style={{
        position: "relative",
        fontFamily: "monospace",
        fontSize: "14px",
        width: "auto",
        justifyContent: "center",
        margin: "auto",
        marginLeft: "30%", 
      }}
    >
      <pre
        style={{
          width: "100%",
          position: "relative",
          zIndex: 1,
          fontFamily: "monospace",
          fontSize: "14px",
          margin: 0,
          padding: 0,
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>

      <textarea
        ref={textareaRef}
        value={code}
        onChange={handleTextAreaChange}
        style={{
          position: "absolute",
          zIndex: 2,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          fontFamily: "monospace",
          fontSize: "14px",
          border: "none",  
          outline: "none",  
          opacity: 0.1,
          margin: 0,
          padding: 0,
          marginTop: "1px",
          resize: "none",
          overflow: "hidden",
          lineHeight: "20.8px",
        }}
      />
    </div>
  );
};

export default CodeEditor;
