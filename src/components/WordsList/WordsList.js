import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWords } from 'redux/operations';
import { selectWords } from 'redux/selectors';

export function WordsList() {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <ul>
      {words.map(word => (
        <li key={word.id}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </li>
      ))}
    </ul>
  );
}
