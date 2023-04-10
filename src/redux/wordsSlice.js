import { createSlice } from '@reduxjs/toolkit';
import { deleteWord, fetchWords, checkWord, addWord } from './operations';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWords.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWords.fulfilled, (_, action) => {
        return {
          isLoading: false,
          items: action.payload,
          error: null,
        };
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteWord.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(checkWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(checkWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(checkWord.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addWord.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
