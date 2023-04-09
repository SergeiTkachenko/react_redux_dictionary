import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://6432d4183e05ff8b372f1364.mockapi.io/words',
});

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (signal, thunkApi) => {
    try {
      const response = await agent.get('/items', { signal });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
