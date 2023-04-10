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

export const deleteWord = createAsyncThunk(
  'words/deleteWords',
  async (id, thunkApi) => {
    try {
      const response = await agent.delete(`/items/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const checkWord = createAsyncThunk(
  'words/checkWord',
  async (word, thunkApi) => {
    try {
      const response = await agent.put(`/items/${word.id}`, word);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk(
  'words/addWord',
  async (word, thunkApi) => {
    try {
      const response = await agent.post(`/items/`, word);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
