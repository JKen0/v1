import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import { Link as Link2 } from 'react-router-dom';
import { useDarkTheme } from './Layout';

interface ProjectSidearInterface {
  pages: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    url: string;
  }>;
  key_contributions: string[];
  tech_stack: string[];
}

export default function ProjectSidebar(props: ProjectSidearInterface) {
  const { pages, social, key_contributions, tech_stack } = props;
  const { isDarkMode } = useDarkTheme();

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{ p: 2, bgcolor: isDarkMode ? '#404040' : '#E5E4E2' }}
      >
        <Typography variant="h6" gutterBottom>
          Tech Stack
        </Typography>
        <ul>
          {tech_stack.map((item, index) => (
            <li key={`tech-stack-${index}`}>{item}</li>
          ))}
        </ul>

        <Divider />

        <Typography variant="h6" gutterBottom>
          Key Contributions
        </Typography>
        <ul>
          {key_contributions.map((item, index) => (
            <li key={`tech-stack-${index}`}>{item}</li>
          ))}
        </ul>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Pages
      </Typography>
      {pages.map((pages) => (
        <Link2
          key={pages.title} // Use a unique key for each Link in the list
          to={pages.url}
          style={{ display: 'block' }}
        >
          {pages.title}
        </Link2>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.url}
          key={network.name}
          sx={{ mb: 0.5 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
