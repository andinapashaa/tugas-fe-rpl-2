import axios from "axios";

const BASE_URL = "https://tugas2-fe.labse.id/api";

export async function getAllPosts(page = 1, per_page = 10) {
  return axios.get(`${BASE_URL}/post?page=${page}&per_page=${per_page}`);
}

export async function getUserPosts(
  username: string,
  page = 1,
  per_page = 10,
  is_liked?: boolean,
  search?: string
) {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("per_page", String(per_page));
  if (is_liked !== undefined) params.append("is_liked", String(is_liked));
  if (search) params.append("search", search);

  return axios.get(`${BASE_URL}/user/${username}/posts?${params.toString()}`);
}

export async function deletePost(id: number, token: string) {
  return axios.delete(`${BASE_URL}/post/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updatePost(id: number, text: string, token: string) {
  const formData = new FormData();
  formData.append("text", text);

  return axios.post(`${BASE_URL}/post/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function likePost(id: number, token: string) {
  return axios.post(`${BASE_URL}/post/${id}/like`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
