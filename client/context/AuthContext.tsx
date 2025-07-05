"use client";

import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { loginUser, logoutUser, registerUser, verifyAuth } from "@/services/auth.service";
import { User, LoginData, AuthContextType,SignupFormData } from "@/types/auth"


export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    setLoading(false);
    return;
  }

  (async () => {
    try {
      const data = await verifyAuth();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  })();
}, []);


  const login = async (userData: LoginData) => {
    const data = await loginUser(userData);
    setUser(data.user);
    return data;
  };

  const register = async (userData: SignupFormData) => {
    const data = await registerUser(userData);
    setUser(data.user);
    return data;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  const value: AuthContextType = { user, loading, login, logout,register };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
};


export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
