// src/services/interviewService.js
import API from "./axiosConfig";

export const addInterview = (data) => API.post("/interviews/add", data);
export const getInterviews = () => API.get("/interviews/all");
