import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Home/Dashboard';
import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
        {/* Alternatively, you can display a NotFound component for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;