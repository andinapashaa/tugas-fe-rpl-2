const BASE_URL = "https://tugas2-fe.labse.id/api/likes";

export async function likePost(postId: number, token: string) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Gagal memberi like pada post");
  }

  return await res.json();
}

export async function unlikePost(postId: number, token: string) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Gagal menghapus like dari post");
  }

  return await res.json();
}
