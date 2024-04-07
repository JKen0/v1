import { Outlet, Link, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

type ContextType = { isDarkMode: boolean };

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [isDarkMode, setDarkMode] = useState<boolean>(true);

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


  useEffect(() => {
    const goto = searchParams.get('goto');

    if (goto) {
      const otherParams = new URLSearchParams(location.search);
      otherParams.delete('goto'); // Remove goto parameter
      const queryString = otherParams.toString();

      navigate(`${goto}?${queryString}`);
    }

  }, []);



  useEffect(() => {
    document.title = `${getWebsiteTitle(location.pathname)}`;
  }, [location]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} >
      <CssBaseline />
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Outlet context={{ isDarkMode }} />
      <Footer
        title="Kenneth Matira"
        description="This Website is powered by React.js, TypeScript, Vite, Node.js, and GitHub Pages."
      />
    </ThemeProvider>
  )
}

export function useDarkTheme() {
  return useOutletContext<ContextType>();
}

export default Layout;
