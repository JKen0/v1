import React from 'react';
import {
  Typography,
  Divider,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';

const ProjectKATCEstBody = () => {
  return (
    <>
      <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

      <Typography
        style={{ paddingTop: '5px', paddingBottom: '5px' }}
        variant="h5"
      >
        Introduction/Problem
      </Typography>
      <Typography variant="body1">
        The project addresses a crucial challenge in virtual reality (VR)
        gaming, focusing on the KAT Walk C omni-directional treadmill, which
        aims to mitigate motion sickness by offering a more natural way to move
        within virtual environments. However, a significant issue arises from
        the lack of precise foot position tracking on the treadmill's surface.
        While the sensors embedded in the user's shoes provide rotation data,
        there is no direct information about the position of the feet on the
        treadmill. This limitation hampers the translation of user movements
        into virtual character motions, leading to disorientation and discomfort
        during gameplay.
      </Typography>

      <div
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <img
          src="https://i.ibb.co/JFx7ZSX/kat-gateway-example.png" // Replace "./stock-image.jpg" with the actual path to your image file
          alt="Stock Image"
          style={{
            maxHeight: 400,
            maxWidth: '100%',
            display: 'block',
            margin: 'auto',
          }}
        />
        <Typography variant="body2" color="text.secondary">
          Figure 1: This image shows the available data of the KAT Walk C.
          Notice that only rotation of each foot is returned. No data of
          positional awareness on the treadmill.
        </Typography>
      </div>

      <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

      <Typography
        style={{ paddingTop: '5px', paddingBottom: '5px' }}
        variant="h5"
      >
        Implementation
      </Typography>

      <Typography variant="body1">
        The implementation of the foot position estimation algorithm for the KAT
        Walk C treadmill was intricately designed to account for the curvature
        of the treadmill surface. Given the unique shape and design of the KAT
        Walk C, where the surface is curved and users can move in multiple
        directions, it was essential to devise a method that could accurately
        estimate foot position across this varied terrain. To address this
        challenge, the algorithm made the assumption that there exists a unique
        sensor reading for each area of the surface, corresponding to specific
        combinations of pitch and roll rotations.
      </Typography>

      <div
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <img
          src="https://raw.githubusercontent.com/JKen0/kat-walk-c-estimating-position/main/images/est-position-diagram-example.png" // Replace "./stock-image.jpg" with the actual path to your image file
          alt="Stock Image"
          style={{
            maxHeight: 400,
            maxWidth: '100%',
            display: 'block',
            margin: 'auto',
          }}
        />
        <Typography variant="body2" color="text.secondary">
          Figure 2: This image portrays the incline that the foot experiences
          while moving away from the centre of the KAT Walk C. This incline
          allows us to make the assumption that each area of the surface will
          experience different sensor readings.
        </Typography>
      </div>

      <Typography variant="body1">
        The implementation of the foot position estimation algorithm for the KAT
        Walk C treadmill involved a systematic approach to data processing and
        interpolation. The algorithm was developed in Python, utilizing
        libraries such as NumPy for efficient numerical computations and
        Matplotlib for visualization. Key aspects of the implementation included
        the creation of key points on the treadmill surface, which served as
        reference points for interpolation. These key points were strategically
        positioned to cover the entire surface area, ensuring comprehensive
        coverage for accurate estimations. The algorithm then employed
        Baycentric Interpolation to extrapolate foot position based on the
        rotation data provided by the sensors embedded in the user's shoes.
      </Typography>

      <div
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <img
          src="https://i.ibb.co/tKwn77X/13-key-point-diagram.png" // Replace "./stock-image.jpg" with the actual path to your image file
          alt="Stock Image"
          style={{
            maxHeight: 400,
            maxWidth: '100%',
            display: 'block',
            margin: 'auto',
          }}
        />
        <Typography variant="body2" color="text.secondary">
          Figure 3: This image shows the 13-key points that are used in order to
          estimate the position, the right-most key point can be read as roll
          value 17 and pitch value 12. Each point is seperated evenly by a value
          of 7 and each point is associated to a position on the KAT surface.
        </Typography>
      </div>

      <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

      <Typography
        style={{ paddingTop: '5px', paddingBottom: '5px' }}
        variant="h5"
      >
        Conclusion / Future Work
      </Typography>

      <Typography variant="body1">
        With the successful implementation of the foot position estimation
        algorithm for the KAT Walk C treadmill, the ability to create real-time
        visualizations of foot position estimations introduces a valuable tool
        for identifying irregularities in the estimation process. By visualizing
        the estimated foot positions as the user interacts with the treadmill,
        developers and researchers can quickly identify any discrepancies or
        inconsistencies between the estimated positions and the actual user
        movements. Furthermore, these visualizations serve as a diagnostic tool
        for evaluating the performance of the estimation algorithm under various
        conditions, leading to iterative improvements and refinements. Overall,
        the implementation of real-time visualization capabilities enhances the
        ability to detect and address irregularities in foot position
        estimation, ultimately contributing to the optimization of motion
        tracking and virtual reality experiences on the KAT Walk C treadmill.
      </Typography>

      <div
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <img
          src="https://raw.githubusercontent.com/JKen0/kat-walk-c-estimating-position/main/images/treadmill_incline.jpg" // Replace "./stock-image.jpg" with the actual path to your image file
          alt="Stock Image"
          style={{
            maxHeight: 400,
            maxWidth: '100%',
            display: 'block',
            margin: 'auto',
          }}
        />
        <Typography variant="body2" color="text.secondary">
          Figure 4: This image shows the visualization of where the algorithm
          predicts both the position of the left and right foot.
        </Typography>
      </div>

      <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card variant="outlined">
            <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="Repository"
              style={{ width: '100%', maxHeight: 100, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                GitHub Repoistory
              </Typography>
              <Button
                variant="contained"
                href="https://github.com/JKen0/kat-walk-c-estimating-position"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectKATCEstBody;
