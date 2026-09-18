"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { setToken } from "@/lib/auth";
import type { AuthResponse } from "@/types/user";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", username: "", email: "", password: "" });
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false); const router = useRouter();
  const submit = async (event: React.FormEvent) => { event.preventDefault(); setError(""); setLoading(true); try { const { data } = await api.post<AuthResponse>("/auth/register", form); setToken(data.token); router.replace("/home"); } catch { setError("Could not create the account. Check the details and try again."); } finally { setLoading(false); } };
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 text-center text-5xl font-bold">
          𝕏
        </div>

        <h1 className="mb-6 text-3xl font-bold">
          Create your account
        </h1>

        <form onSubmit={submit} className="space-y-4">
          <input
            placeholder="Name"
            value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="h-14 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-[#1d9bf0]"
          />

          <input
            placeholder="Username"
            value={form.username} onChange={(event) => setForm({ ...form, username: event.target.value })}
            className="h-14 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-[#1d9bf0]"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="h-14 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-[#1d9bf0]"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })}
            className="h-14 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-[#1d9bf0]"
          />

          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
          <button disabled={loading} className="h-12 w-full rounded-full bg-black font-bold text-white hover:bg-gray-800 disabled:opacity-50">
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#1d9bf0] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
