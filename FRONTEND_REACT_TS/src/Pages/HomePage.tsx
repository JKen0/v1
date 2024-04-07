import React, { useState } from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';

const HomePage = () => {


  return (
    <Container maxWidth="lg">
      <Grid container>
        {/* Left Panel */}
        <Grid item xs={6}>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
              //backgroundColor: (theme) => theme.palette.primary.main,
              color: 'common.white',
              height: `calc(100vh - 69px)`, // Height calculation
            }}
          >
            <Typography variant="h2" style={{ marginTop: "10%", paddingBottom: "1%" }}>
              Yo
            </Typography>
            <Typography variant="h5">
              Senior FullStack Engineer
            </Typography>
            <Typography variant="subtitle1" style={{ paddingTop: "2%" }}>
              I build pixel-perfect, engaging, and accessible digital experiences.
            </Typography>
          </Paper>
        </Grid>
        {/* Right Panel */}
        <Grid item xs={6}>
          <Paper
            sx={{
              padding: 2,
              height: `calc(100vh - 69px)`,
              overflowY: 'overlay',
            }}
          >
            {/* Experience */}
            <Typography variant="h5">Experience</Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            {/* Education */}
            <Typography variant="h5">Education</Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            {/* Projects */}
            <Typography variant="h5">Projects</Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paper>
        </Grid>
      </Grid>
    </Container>

  );
};

export default HomePage;