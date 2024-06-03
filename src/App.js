import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

function App() {
  const [code, setCode] = React.useState(
    `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, 
document.getElementById("root"));`
  );
  return (
    <div
      style={{
        justifyContent: "center",
        width: "50%", 
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center",   }}>
        react-simple-code-editor
      </h1>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12, 
          width: "50%",
          margin: "auto",
        }}
      />
    </div>
  );
}

export default App;

//  import React from "react";
// import CodeEditor from "./components/CodeEditor";

// const App = () => {
//   const initialCode = `import React from "react";
// import ReactDOM from "react-dom";

// function App() {
//   return (
//     <h1>Hello world</h1>
//   );
// }

// ReactDOM.render(<App />,
// document.getElementById("root"));`;

//   return (
//     <div>
//       <h1 style={{ textAlign:'center'}}>react-simple-code-editor</h1>
//       <CodeEditor initialCode={initialCode} language="jsx" />
//     </div>
//   );
// };

// export default App;
