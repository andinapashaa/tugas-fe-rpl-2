"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/api/auth/[...nextauth]/auth"; 

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });

      // Simpan token ke cookie
      document.cookie = `token=${res.data.token}; path=/`;

      router.push("/dashboard");
    } catch (err) {
      setError("Login gagal. Cek username atau password.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4 mt-4">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
