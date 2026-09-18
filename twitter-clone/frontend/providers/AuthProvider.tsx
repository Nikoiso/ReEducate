"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import api from "@/lib/api";
import { removeToken } from "@/lib/auth";
import { User } from "@/types/user";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }

      const { data } = await api.get("/auth/me");

      setUser(data);
    } catch {
      removeToken();
      setUser(null);
    }
  };

  useEffect(() => {
    const timer = window.setTimeout(() => { void refreshUser().finally(() => setLoading(false)); }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const logout = () => {
    removeToken();
    setUser(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );
  }

  return context;
}
