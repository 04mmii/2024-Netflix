import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ab091c1360c493c6c44e6b36968850fd",
        language: "ko-KR",
    },
});

export default instance;