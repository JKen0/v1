import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import GradesPage from './Pages/GradesPage';
import MusicPage from './Pages/MusicPage';
import ProjectsPage from './Pages/ProjectsPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import LoginPage from './Pages/LoginPage';
import CONFIG from '../gitprofile.config';

const App = () => {
  return (
    <Router basename="/v1">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage config={CONFIG} />} />
          <Route path="/grades" element={<GradesPage />} />
          <Route path="/spotify" element={<MusicPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
