import { useDispatch } from 'react-redux';
import { addWord } from 'redux/operations';

export function WordForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const ukrWord = e.currentTarget.ukrWord.value;
    const engWord = e.currentTarget.engWord.value;

    dispatch(
      addWord({
        ukrWord,
        engWord,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UKR WORD
        <input type="text" name="ukrWord"></input>
      </label>
      <label>
        ENG WORD
        <input type="text" name="engWord"></input>
      </label>
      <button type="submit">&#10133; add word</button>
    </form>
  );
}
