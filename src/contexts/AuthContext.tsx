import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole } from './UserRoleContext';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  agentId?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  updateUserRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Mock users for demonstration
const mockUsers: Record<string, User> = {
  'admin@igilife.com': {
    id: '1',
    name: 'Muhammad Zayan',
    email: 'admin@igilife.com',
    role: 'admin',
    department: 'Administration',
    agentId: 'ADM001'
  },
  'agent@igilife.com': {
    id: '2',
    name: 'Sarah Ahmed',
    email: 'agent@igilife.com',
    role: 'agent',
    department: 'Sales',
    agentId: 'AGT001'
  },
  'client@igilife.com': {
    id: '3',
    name: 'Ahmed Ali',
    email: 'client@igilife.com',
    role: 'user',
    department: 'Client'
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication logic
    if (password === 'password123') {
      // Check mock users first
      let foundUser = mockUsers[email.toLowerCase()];
      
      // If not found in mock users, check localStorage for newly registered users
      if (!foundUser) {
        const storedUsers = JSON.parse(localStorage.getItem('mockUsers') || '{}');
        foundUser = storedUsers[email.toLowerCase()];
      }
      
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('user', JSON.stringify(foundUser));
        return true;
      }
    }
    return false;
  };

  const register = async (name: string, email: string, password: string, role: UserRole): Promise<boolean> => {
    // Check if user already exists
    if (mockUsers[email.toLowerCase()]) {
      return false;
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email: email.toLowerCase(),
      role,
      department: role === 'agent' ? 'Sales' : 'Client',
      agentId: role === 'agent' ? `AGT${Date.now().toString().slice(-3)}` : undefined
    };

    // Add to mock users
    mockUsers[email.toLowerCase()] = newUser;

    // Store in localStorage for persistence
    const storedUsers = JSON.parse(localStorage.getItem('mockUsers') || '{}');
    storedUsers[email.toLowerCase()] = newUser;
    localStorage.setItem('mockUsers', JSON.stringify(storedUsers));

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUserRole = (role: UserRole) => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUserRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
