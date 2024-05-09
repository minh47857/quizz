import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
}

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id)
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
}

const getAllUser = () => {
  return axios.get("/api/v1/participant/all");
}

const deleteUser = (userId) => {
  return axios.delete("/api/v1/participant", {data: {id: userId}});
}

const LoginUser = (email, password, delay = 3000) => {
  return axios.post("api/v1/login", { email, password, delay });
}

const RegisterUser = (email, password, username) => {
  return axios.post("api/v1/register", {email, password, username});
}

const getQuizzByParticipant = () => {
  return axios.get("api/v1/quiz-by-participant");
}

const getQuestionByQuizId = (id) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${id}`);
}

const submitAnswer = (payload) => {
  return axios.post("api/v1/quiz-submit", payload);
}

const postCreateNewQuiz = (name, description, difficulty, quizImage) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);
  return axios.post("api/v1/quiz", data);
}

const getAdminQuizzes = () => {
  return axios.get("api/v1/quiz/all");
}

export  {
  postCreateNewUser, getAllUser, putUpdateUser, deleteUser, 
  LoginUser, RegisterUser, getQuizzByParticipant, getQuestionByQuizId ,
  submitAnswer, postCreateNewQuiz, getAdminQuizzes
};
