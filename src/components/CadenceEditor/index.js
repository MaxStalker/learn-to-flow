import React, { useEffect, useRef, useState } from "react";
import { EditorContainer } from "./styles";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

const CADENCE_LANGUAGE_ID = "cadence";

const Editor = (props) => {
  const { code = "// Welcome, to Cadence" } = props;
  const [editor, setEditor] = useState();
  const containerRef = useRef(null);

  const createMonaco = () => {
    destroyMonaco();

    const newEditor = monaco.editor.create(containerRef.current, {
      theme: "vs-light",
      language: CADENCE_LANGUAGE_ID,
      minimap: {
        enabled: false,
      },
    });

    // Set initial code in the model
    const initialModel = monaco.editor.createModel(code, CADENCE_LANGUAGE_ID);
    newEditor.setModel(initialModel);

    // Save editor
    setEditor(newEditor);
  };

  const destroyMonaco = () => {
    if (editor) {
      editor.dispose();
      const model = editor.getModel();
      if (model) {
        model.dispose();
      }
    }
  };

  useEffect(() => {
    createMonaco();
    return destroyMonaco;
  }, []);
  return <EditorContainer ref={containerRef}></EditorContainer>;
};

export default Editor;
