export interface User {
  id: string;
  name: string;
  email: string;
  // Add more fields as needed
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: LoginData) => Promise<any>;
  register: (userData: SignupFormData) => Promise<any>;
  logout: () => Promise<void>;
}
