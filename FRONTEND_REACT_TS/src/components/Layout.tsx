import {
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import WarningAlert from './WarningAlert';

const getWebsiteTitle = (pathname: string) => {
  if (pathname === '/') {
    return 'Home';
  } else if (pathname === '/grades') {
    return 'Grades';
  } else if (pathname === '/spotify') {
    return 'Spotify';
  } else if (pathname === '/projects') {
    return 'Projects';
  } else {
    return 'Not Found';
  }
};

type ContextType = {
  isDarkMode: boolean,
  toggleLoading: (value: boolean) => void,
  toggleAlert: (value: boolean) => void
};

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleLoading = (value: boolean) => {
    setLoading(value);
  };

  useEffect(() => {
    const goto = searchParams.get('goto');

    if (goto) {
      const otherParams = new URLSearchParams(location.search);
      otherParams.delete('goto'); // Remove goto parameter
      const queryString = otherParams.toString();

      navigate(`${goto}?${queryString}`);
    }
  }, []);

  const toggleAlert = (value: boolean) => {
    setShowAlert(value);
  };

  useEffect(() => {
    document.title = `${getWebsiteTitle(location.pathname)}`;
    toggleAlert(false);
  }, [location]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {showAlert && <WarningAlert onClose={toggleAlert} />}
      {isLoading ?
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '75vh',
          }}
        >
          <CircularProgress size={75} />
        </Box>
        :
        <Outlet context={{ isDarkMode, toggleLoading, toggleAlert } satisfies ContextType} />
      }
      <Footer
        title="JKen0"
        description="This Website is powered by React.js, TypeScript, Vite, Node.js, JavaScript, MongoDB, Render, and GitHub Pages."
      />
    </ThemeProvider>
  );
};

export function useLayoutContext() {
  return useOutletContext<ContextType>();
}

export default Layout;
