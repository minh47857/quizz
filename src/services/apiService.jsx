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
  return axios.put("api/v1/participant", data);s
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

export  { postCreateNewUser, getAllUser, putUpdateUser, deleteUser, LoginUser, RegisterUser };
