// src/services/testService.js
import API from "./axiosConfig";

export const submitTestResult = (data) => API.post("/tests/submit", data);
export const getTestHistory = () => API.get("/tests/history");
