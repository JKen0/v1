import {
  Typography,
  Divider,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';

const ProjectKATNNBody = () => {
  return (
    <>
      <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/SbUXoQ0-G9Q"
            title="KATNN Results Video"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>

        <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

        <Typography
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
          variant="h5"
        >
          Introduction/Problem
        </Typography>
        <Typography variant="body1">
          The problem addressed in this project revolves around motion sickness
          and sensory conflict in virtual reality (VR) experiences, where users
          may feel disoriented due to their virtual character moving while their
          body remains stationary. The KAT Walk C treadmill aims to alleviate
          these issues by translating human motion into virtual movement, but
          its original algorithm has limitations in effectively registering all
          user movements, leading to discrepancies between user actions and the
          virtual character's movements.
          <br />
          <br />
          To address these limitations, the project introduces KATNN, an
          alternative input mechanism for the KAT Walk C. KATNN aims to enable
          users to move in additional axes, such as left and right, and register
          slower movements accurately. However, one of the main challenges faced
          in this project is the sparse sensor data provided by the KAT Walk C,
          which complicates the development of effective input mechanisms.
        </Typography>

        <div
          style={{
            textAlign: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          <img
            src="https://i.ibb.co/xHhXBbj/treadmill-and-shoes.png" // Replace "./stock-image.jpg" with the actual path to your image file
            alt="Stock Image"
            style={{
              maxHeight: 400,
              maxWidth: '100%',
              display: 'block',
              margin: 'auto',
            }}
          />
          <Typography variant="body2" color="text.secondary">
            Figure 1: This image represents the KAT Walk C treadmill onn the
            left, you can seee the KAT Walk surface, the straps which you wrap
            around your waist. On the right image, is the KAT Walk C shoes along
            with the sensors on them.
          </Typography>
        </div>

        <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

        <Typography
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
          variant="h5"
        >
          Virtual Game (Using Unity Game Engine)
        </Typography>

        <Typography variant="body1">
          The virtual game created for this project utilizes the KAT SDK, which
          serves as the input system for moving the user within the virtual
          reality world. This SDK algorithm translates the user's movements on
          the KAT Walk C treadmill into corresponding movements within the
          virtual environment. Additionally, the game features real-time display
          of sensor readings on the screen, providing users with immediate
          feedback on their movements. One notable feature of the game is its
          menu system, which allows users to switch between different input
          systems. This flexibility enables users to experiment with various
          input mechanisms and find the one that best suits their preferences
          and needs.
          <br />
          <br />
          Furthermore, the game includes functionality to fix rotation
          alignment, ensuring that users move in the correct direction relative
          to their intended movements on the treadmill. Another important aspect
          of the game is the ability to adjust movement sensitivity. This
          feature allows users to fine-tune the responsiveness of their
          movements within the virtual environment, providing a customizable
          experience tailored to individual preferences. Additionally, the game
          includes a recording function that allows users to capture sensor data
          and save it in a CSV file. This capability is invaluable for data
          collection and analysis, enabling researchers to gather insights into
          user behavior and performance.
        </Typography>

        <div
          style={{
            textAlign: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/JKen0/vr-kat-project-unity/main/images/menu_screen.png"
            alt="Stock Image"
            style={{
              maxHeight: 400,
              maxWidth: '100%',
              display: 'block',
              margin: 'auto',
            }}
          />
          <Typography variant="body2" color="text.secondary">
            Figure 2: This image represents the user interface of the game, you
            can see all the menu options, the sensor data on the top left, and
            start sensor recording button in the bottom right.
          </Typography>
        </div>

        <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

        <Typography
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
          variant="h5"
        >
          Working With Data
        </Typography>

        <Typography variant="body1">
          The data collection process involved utilizing multiple tools,
          including the research game's ability to export sensor data to CSV
          format and video ecording software like Open Broadcaster Software
          (OBS) to capture the game interface. A webcam feed was also employed
          to visually monitor the user's executed motion. The collected data
          underwent several processing steps, including data trimming to remove
          irrelevant segments and data labeling to assign unique class labels
          based on motion type and speed. These labels were crucial for
          subsequent analysis and model training.
          <br />
          <br />
          To augment the dataset and increase its size without additional data
          collection, two techniques were employed: double speed and half-speed
          manipulation. Double speed involved skipping every other data point to
          simulate the user performing the motion at twice the original speed,
          while half-speed entailed adding synthetic data points between
          adjacent original data points to simulate motion at half the original
          speed. These augmentation techniques expanded the dataset's diversity
          and facilitated more robust model training.
        </Typography>

        <div
          style={{
            textAlign: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          <img
            src="https://i.ibb.co/3BcMvLN/video-recording-example.png" // Replace "./stock-image.jpg" with the actual path to your image file
            alt="Stock Image"
            style={{
              maxHeight: 400,
              maxWidth: '100%',
              display: 'block',
              margin: 'auto',
            }}
          />
          <Typography variant="body2" color="text.secondary">
            Figure 3: This image represents an example frame of sensor
            recordings. You can see that the red button contains the iteration
            number, and the webcam allows the research to see what the body was
            doing at different iterations and see what the rotation values were.
          </Typography>
        </div>

        <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

        <Typography
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
          variant="h5"
        >
          Implementation
        </Typography>

        <div
          style={{
            textAlign: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/JKen0/vr-kat-project-python/main/images/logic_diagram.png" // Replace "./stock-image.jpg" with the actual path to your image file
            alt="Stock Image"
            style={{
              maxHeight: 400,
              maxWidth: '100%',
              display: 'block',
              margin: 'auto',
            }}
          />
          <Typography variant="body2" color="text.secondary">
            Figure 4: This image represents the different innputs and layers of
            our KATNN algorithm, the first layer (top) represents the type of
            motion the user is performing. Each layer is represented
            horizantally as ovals (3 total) and each oval represents a seperate
            neural network. Rectangles represent the inputs to the corresponding
            neural network.
          </Typography>
        </div>

        <Typography variant="body1">
          The KATNN algorithm introduces three layers of neural networks to
          address the limitations of the original KAT C algorithm and enhance
          motion recognition accuracy.
          <br />
          <br />
          Layer 1, referred to as "Motion," focuses on predicting the specific
          movement the user is executing, including walking forward, left
          sidesteps, right sidesteps, or standing still. Input data for this
          layer includes SADSR values from all four sensors, which provide
          information about foot rotation and direction of movement. The neural
          network within this layer effectively distinguishes between different
          motions based on these inputs.
          <br />
          <br />
          Layer 2, known as "Motion Type," determines the scale of the motion,
          categorizing it as small or large steps. Input data for this layer is
          derived from the motion predicted in Layer 1, considering the maximum
          pitch or roll values depending on the type of motion. The neural
          networks in this layer accurately differentiate between small and
          large steps based on sensor readings.
          <br />
          <br />
          Layer 3, the "Motion Speed" layer, predicts the speed of the ongoing
          motion as average or fast. Additional class "slow" is introduced for
          large steps to provide more options for users. Input data for this
          layer includes SADSR values and TNSAT or TNSBT values, which estimate
          the number of cycles and reflect motion speed. The neural networks in
          this layer effectively classify motion speed based on these inputs.
          <br />
          <br />
          Together, these three layers of neural networks optimize the accuracy
          of motion prediction in the KATNN algorithm, enhancing user experience
          and immersion in motion capture applications.
        </Typography>

        <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />

        <Typography
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
          variant="h5"
        >
          Conclusion / Future Work
        </Typography>

        <Typography variant="body1">
          With the successful implementation of KATNN, there is now potential to
          expand its capabilities further, possibly by integrating additional
          features or functionalities to enhance the overall user experience.
          This may include a "loading environment" where users align their
          headset and hips with a designated arrow before walking forward. This
          approach offers a more intuitive and precise calibration method
          compared to trial-and-error menu adjustments.
          <br />
          <br />
          Improvements to the KATNN algorithm could involve minimizing
          discrepancies when users turn their bodies by incorporating body yaw
          rotation data. Furthermore, future enhancements might include
          developing a more universally applicable model that considers
          individual user parameters such as height, potentially through the
          implementation of a calibration tool.
          <br />
          <br />
          Finally, a new approach to prediction could be a potential avenue.
          Alternative methods such as LSTM models could be used where your
          inputs could be a sequence of sensor data and your output would be an
          accurate prediction of the velocity of the user, rather than
          classifying slow or fast.
        </Typography>

        <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />
        <Grid container>
          <Grid item xs={4}>
            <Card variant="outlined">
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="Repository"
                style={{ width: '100%', maxHeight: 100, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  KATNN Repo (Python)
                </Typography>
                <Button
                  variant="contained"
                  href="https://github.com/JKen0/vr-kat-project-python"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="Repository"
                style={{ width: '100%', maxHeight: 100, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Unity Game Repo
                </Typography>
                <Button
                  variant="contained"
                  href="https://github.com/JKen0/vr-kat-project-unity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <img
                src="https://t4.ftcdn.net/jpg/03/73/85/33/360_F_373853375_guE8wO6NTApwTNTC0aMxdPOSKmg9sK8O.jpg"
                alt="Paper"
                style={{ width: '100%', maxHeight: 100, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Research Paper
                </Typography>
                <Button
                  variant="contained"
                  href="https://macsphere.mcmaster.ca/bitstream/11375/29390/1/Matira_Kenneth_2023December_MEng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Paper
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default ProjectKATNNBody;
