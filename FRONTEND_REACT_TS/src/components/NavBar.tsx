import { useEffect, useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from "react-router-dom";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 5 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        href="/mysite/"
                    >
                        JKen0
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <Link style={{ color: "white", textDecoration: "none" }} to="/">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Home
                                </MenuItem>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="grades">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Grades
                                </MenuItem>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="projects">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Projects
                                </MenuItem>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="spotify">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Spotify
                                </MenuItem>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="games">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Games
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        JKen0
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link style={{ color: "white", textDecoration: "none" }} to="/">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Home
                            </Button>
                        </Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="grades">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Grades
                            </Button>
                        </Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="projects">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Projects
                            </Button>
                        </Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="spotify">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Spotify
                            </Button>
                        </Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="games">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Games
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="../../public/waaaa.webp" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar