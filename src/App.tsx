import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
