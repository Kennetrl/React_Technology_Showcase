import { useTheme } from '../ThemeContext/ThemeContext';

export const ThemeToggle = () => { // <--- Cambiado a ThemeToggle para mantener consistencia
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 
      ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'}`}
    >
      <div className={`p-8 rounded-2xl shadow-xl max-w-sm text-center border transition-all
        ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}`}
      >
        <h1 className="text-2xl font-bold mb-4">Práctica de Context API</h1>
        <p className="mb-6 text-sm opacity-80">
          El tema actual es: <span className="font-mono font-bold uppercase">{theme}</span>
        </p>
        
        <button
          onClick={toggleTheme}
          className={`px-6 py-2.5 rounded-lg font-semibold shadow-md transition-transform active:scale-95
            ${theme === 'light' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'}`}
        >
          Cambiar a Modo {theme === 'light' ? 'Oscuro ' : 'Claro '}
        </button>
      </div>
    </div>
  );
};