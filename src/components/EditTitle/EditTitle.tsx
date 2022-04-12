import React from 'react';
import { TitleEditor } from './EditTitle.style';

const EditTitle = () => {
  return (
    <TitleEditor
      autoFocus
      type="text"
      name="title-editor"
      placeholder="Title of the memo"
    />
  );
};

export default EditTitle;
