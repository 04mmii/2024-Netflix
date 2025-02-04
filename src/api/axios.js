import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "ko-KR",
  },
});

export default instance;
