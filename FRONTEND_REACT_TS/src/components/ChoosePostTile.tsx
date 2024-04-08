import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { ProjectListType } from '../Types/ProjectsTypes';

export default function ChoosePostTile({
  tileKey,
  post,
}: {
  tileKey: string;
  post: ProjectListType;
}) {
  return (
    <Paper
      key={tileKey}
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none' }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              style={{ textAlign: 'left' }}
              variant="h4"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              style={{ textAlign: 'left' }}
              variant="h6"
              color="inherit"
              paragraph
            >
              {post.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
