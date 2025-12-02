export interface User {
  id: string;
  name: string;
  role: 'nurse' | 'admin' | 'doctor';
  department: string;
  license: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  license: string;
  password: string;
}