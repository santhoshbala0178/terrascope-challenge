import React, { useState } from 'react';
import { TitleEditor } from './EditTitle.style';
import { EditTitleType } from './EditTitle.type';

const EditTitle = ({ title }: EditTitleType) => {
  const [titleVal, setTitleVal] = useState(title);

  return (
    <TitleEditor
      autoFocus
      type="text"
      name="title-editor"
      placeholder="Title of the memo"
      value={titleVal}
      onChange={(e) => setTitleVal(e.target.value)}
    />
  );
};

export default EditTitle;
