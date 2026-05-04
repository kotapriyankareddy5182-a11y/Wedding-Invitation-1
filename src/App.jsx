import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import UserNotRegisteredError from './components/UserNotRegisteredError';
import PageNotFound from './lib/PageNotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<UserNotRegisteredError />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
