import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTlmNTgyNjRiYmRlYmVmN2RlMmE2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjE5OTY0NywiZXhwIjoxNjQ2NDU4ODQ3fQ.nyhY9pI-WekCameHMClkAbtE26aWcB7IxVTeQqnJne4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});