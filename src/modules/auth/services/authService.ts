import { LoginCredentials, User } from '@/auth/types';

class AuthService {
  private static instance: AuthService;
  
  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(credentials: LoginCredentials): Promise<User> {
    // Simulación de autenticación - en producción sería una llamada API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.license && credentials.password) {
          resolve({
            id: '1',
            name: 'Enfermero/a Principal',
            role: 'nurse',
            department: 'UCI',
            license: credentials.license,
            email: `${credentials.license}@hospital.com`
          });
        } else {
          reject(new Error('Credenciales inválidas'));
        }
      }, 1500);
    });
  }

  async logout(): Promise<void> {
    // Limpiar tokens, caché, etc.
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }

  async validateSession(): Promise<boolean> {
    // Validar sesión activa
    return new Promise(resolve => {
      setTimeout(() => resolve(false), 1000);
    });
  }
}

export const authService = AuthService.getInstance();