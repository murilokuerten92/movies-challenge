import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Home/Dashboard';
import NotFound from '../pages/NotFound';
import { MoviesList } from '../pages/Home/MoviesList';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="movies-list" element={<MoviesList />} />
        </Route>
        <Route path="*" element={<NotFound />} />      </Routes>
    </Router>
  );
};

export default AppRoutes;