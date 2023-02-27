const App = () => {
  const stringText = `# Heading 1 
Sample Paragraph
## Heading 2

**Bold Text**

1. li num
1. li num 

> Block Quote

[Google Link](https://www.google.com)

\` Sample Inline Code \`

\`\`\` JavaScript
// Sample Code Block
const root = ReactDOM.createRoot(document.getElementById("target"));
root.render(<App />);
\`\`\`


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [text, setText] = React.useState(stringText);
  const [preview, setPreview] = React.useState("");
  const [editor, setEditor] = React.useState("");

  // for first time set text

  const textChangeHandler = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  marked.setOptions({
    breaks: true,
  });
  const markdown = marked.parse(text);

  const maxPreview = () => {
    preview ? setPreview("") : setPreview("full-width");
  };

  const maxEditor = () => {
    editor ? setEditor("") : setEditor("full-width");
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Markdown Previewer</h2>
      <div className="row">
        <div className={editor || "col-6"}>
          <div for="editor" className="toolbar">
            <i className="fa fa-free-code-camp"></i>
            Editor
            <i className="fa fa-arrows-alt max" onClick={maxEditor}></i>
          </div>
          <textarea
            id="editor"
            className="form-control shadow rounded"
            style={{ backgroundColor: "#eee9da" }}
            value={text}
            onChange={textChangeHandler}
          ></textarea>
        </div>
        <div className={preview || "col-6"}>
          <div for="preview" className="toolbar">
            <i className="fa fa-free-code-camp"></i>
            Previewer
            <i className="fa fa-arrows-alt max" onClick={maxPreview}></i>
          </div>
          <div
            className="preview shadow"
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("target"));
root.render(<App />);
