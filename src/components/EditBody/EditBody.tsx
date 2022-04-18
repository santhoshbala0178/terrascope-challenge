import React, { useCallback, useState } from 'react';
import { BodyEditContainer, BodyEditor, LengthCounter } from './EditBody.style';
import { EditBodyType } from './EditBody.type';

const CHAR_LIMIT = 140;

const EditBody = ({ body }: EditBodyType) => {
  const [bodyVal, setBodyVal] = useState(body.slice(0, CHAR_LIMIT));

  const setTrimmedBodyVal = useCallback(
    (val) => setBodyVal(val.slice(0, CHAR_LIMIT)),
    [setBodyVal],
  );

  return (
    <BodyEditContainer>
      <BodyEditor
        autoFocus
        name="body-editor"
        placeholder="Write your memo.."
        onChange={(e) => setTrimmedBodyVal(e.target.value)}
        value={bodyVal}
      />
      {CHAR_LIMIT - bodyVal.length < 15 && (
        <LengthCounter>
          {bodyVal.length}/{CHAR_LIMIT}
        </LengthCounter>
      )}
    </BodyEditContainer>
  );
};

export default EditBody;
