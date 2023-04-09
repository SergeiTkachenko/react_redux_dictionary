import { createSlice } from '@reduxjs/toolkit';
import { fetchWords } from './operations';

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
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
