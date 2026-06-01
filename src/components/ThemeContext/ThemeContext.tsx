
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'; 

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// 2. Creamos el contexto con un valor inicial indefinido
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Creamos el Proveedor (Provider)
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Hook personalizado para usar este contexto de forma más simple y segura
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};