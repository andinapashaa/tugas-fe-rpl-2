import axios from "axios";

const BASE_URL = "https://tugas2-fe.labse.id/api/user";

export async function checkUsername(username: string) {
  const formData = new FormData();
  formData.append("username", username);

  return axios.post(`${BASE_URL}/check-username`, formData);
}

export async function register(data: {
  name: string;
  username: string;
  password: string;
}) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("username", data.username);
  formData.append("password", data.password);

  return axios.post(`${BASE_URL}/register`, formData);
}

export async function login(data: {
  username: string;
  password: string;
}) {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);

  return axios.post(`${BASE_URL}/login`, formData);
}

export async function getMe(token: string) {
  return axios.get(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
