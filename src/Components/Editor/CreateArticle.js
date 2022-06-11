import {useState} from "react";
import { Editor, EditorState } from "draft-js";

const CreateArticle = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const changeEditorstate = (editorState) => {
    setEditorState({ editorState });
  };

  return <Editor editorState={editorState} onChange={changeEditorstate} />;
};

export default CreateArticle;
