import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://jken0.github.io/v1/">
        JKen0
      </Link>{' '}
      {new Date().getFullYear()}
      {'.\n'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          JKen0
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This Website is powered by React.js, TypeScript, Vite, Node.js, JavaScript, MongoDB, Render, and GitHub Pages.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
