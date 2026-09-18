"use client";
import { useEffect } from "react";
import { socket } from "@/lib/socket";
import { getToken } from "@/lib/auth";
export function useSocket() {
  useEffect(() => {
    const token = getToken();
    if (!token) return;
    socket.auth = { token };
    socket.connect();
    return () => { socket.disconnect(); };
  }, []);
  return socket;
}
