import './App.css';
import AuthProvider from './provider/AuthProvider';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;