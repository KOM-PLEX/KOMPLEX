'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { User as UserType } from "@core-types/user-content/user";
import { usePathname } from "next/navigation";

interface AuthContextType {
  user: UserType | null;
  loading: boolean;
  isLoginOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoginOpen: false,
  openLoginModal: () => { },
  closeLoginModal: () => { },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [user, setUser] = useState<UserType | null>(() => {
    try {
      const storedUserJson = typeof window !== 'undefined' ? localStorage.getItem("user") : null;
      return storedUserJson ? JSON.parse(storedUserJson) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = useCallback(() => setIsLoginOpen(true), []);
  const closeLoginModal = useCallback(() => setIsLoginOpen(false), []);

  useEffect(() => {
    // Re-sync on route change in case auth state changed elsewhere
    try {
      const storedUserJson = localStorage.getItem("user");
      setUser(storedUserJson ? JSON.parse(storedUserJson) : null);
    } catch {
      setUser(null);
    }
    // Always close login modal on route change to avoid it sticking
    setIsLoginOpen(false);
  }, [pathname]);

  // Close modal once authenticated
  useEffect(() => {
    if (user) {
      setIsLoginOpen(false);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, loading, isLoginOpen, openLoginModal, closeLoginModal }),
    [user, loading, isLoginOpen, openLoginModal, closeLoginModal]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
