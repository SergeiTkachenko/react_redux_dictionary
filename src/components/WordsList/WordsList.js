import { Button, Checkbox, FormControlLabel } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWord, fetchWords, checkWord } from 'redux/operations';
import { selectWords } from 'redux/selectors';

export function WordsList() {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  const sortedWords = words
    .slice()
    .sort((a, b) => a.ukrWord.localeCompare(b.ukrWord));

  return (
    <ul>
      {sortedWords.map((word, index) => (
        <li key={word.id}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={e =>
                  dispatch(checkWord({ ...word, isChecked: e.target.checked }))
                }
                checked={word.isChecked}
              />
            }
          />
          <span>&#8470; {index + 1} </span>
          <span>{word.ukrWord} &#129046; </span>
          <span>{word.engWord}</span>
          <Button type="button" onClick={() => dispatch(deleteWord(word.id))}>
            Delete &#10007;
          </Button>
        </li>
      ))}
    </ul>
  );
}
