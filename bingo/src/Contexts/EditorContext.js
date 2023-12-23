import React, { createContext, useContext, useState } from 'react';

const EditorContext = createContext();

export const useEditorContext = () => {
  return useContext(EditorContext);
};

export const EditorProvider = ({ children }) => {
  const [editorContent, setEditorContent] = useState('');

  const handleProcedureContentChange = (content) => {
    setEditorContent(content);
  };

  const contextValue = {
    editorContent,
    handleProcedureContentChange,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};
