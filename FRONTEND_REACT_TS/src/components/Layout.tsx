import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import NavBar from "./NavBar";

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

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

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
    <div>

      <NavBar />
      <Outlet />

    </div>
  )
}

export default Layout