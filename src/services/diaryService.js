import axios from 'axios';

const API_URL = 'http://localhost:8080/api/diary'; // Adjust if your backend URL is different

export const createDiaryEntry = (entry) => {
  return axios.post(API_URL, entry);
};

export const getAllDiaryEntries = () => {
  return axios.get(API_URL);
};
