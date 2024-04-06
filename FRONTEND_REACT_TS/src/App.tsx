import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import GradesPage from './Pages/GradesPage';
import MusicPage from './Pages/MusicPage';
import ProjectsPage from './Pages/ProjectsPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const App = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router basename='/mysite'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/spotify" element={<MusicPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
