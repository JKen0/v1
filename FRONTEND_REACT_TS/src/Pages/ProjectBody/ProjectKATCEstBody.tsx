import React from 'react'
import { Typography, Divider, Card, CardMedia, Box } from '@mui/material'

const ProjectKATCEstBody = () => {


    return (
        <>
            <Typography variant="h4" gutterBottom>
                KAT Walk C: Foot Estimation Position Code
            </Typography>

            <Divider style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <Typography style={{ paddingTop: "5px", paddingBottom: "5px" }} variant="h5">
                Introduction/Problem
            </Typography>
            <Typography variant="body1">
                The project addresses a crucial challenge in virtual reality (VR) gaming, focusing on the KAT Walk C omni-directional
                treadmill, which aims to mitigate motion sickness by offering a more natural way to move within virtual environments.
                However, a significant issue arises from the lack of precise foot position tracking on the treadmill's surface.
                While the sensors embedded in the user's shoes provide rotation data, there is no direct information about the
                position of the feet on the treadmill. This limitation hampers the translation of user movements into virtual
                character motions, leading to disorientation and discomfort during gameplay.
            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="../../../public/estimate-position/kat_gateway_example.png" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 400, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
                <Typography variant="body2" color="text.secondary">
                    Your image caption or description
                </Typography>
            </div>

            <Divider style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <Typography style={{ paddingTop: "5px", paddingBottom: "5px" }} variant="h5">
                Implementation
            </Typography>

            <Typography variant="body1">
                The implementation of the foot position estimation algorithm for the KAT Walk C treadmill was intricately designed to account for the curvature of the treadmill
                surface. Given the unique shape and design of the KAT Walk C, where the surface is curved and users can move in multiple directions, it was essential to devise a
                method that could accurately estimate foot position across this varied terrain. To address this challenge, the algorithm made the assumption that there exists a
                unique sensor reading for each area of the surface, corresponding to specific combinations of pitch and roll rotations.
            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="../../../public/estimate-position/treadmill_incline.jpg" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 400, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
                <Typography variant="body2" color="text.secondary">
                    Your image caption or description
                </Typography>
            </div>

            <Typography variant="body1">
                The implementation of the foot position estimation algorithm for the KAT Walk C treadmill involved a systematic approach to data processing and interpolation.
                The algorithm was developed in Python, utilizing libraries such as NumPy for efficient numerical computations and Matplotlib for visualization. Key aspects of the
                implementation included the creation of key points on the treadmill surface, which served as reference points for interpolation. These key points were strategically
                positioned to cover the entire surface area, ensuring comprehensive coverage for accurate estimations. The algorithm then employed Baycentric Interpolation to
                extrapolate foot position based on the rotation data provided by the sensors embedded in the user's shoes.
            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="../../../public/estimate-position/13-key-point-diagram.png" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 400, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
                <Typography variant="body2" color="text.secondary">
                    Your image caption or description
                </Typography>
            </div>


            <Divider style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <Typography style={{ paddingTop: "5px", paddingBottom: "5px" }} variant="h5">
                Conclusion / Future Work
            </Typography>

            <Typography variant="body1">
                With the successful implementation of the foot position estimation algorithm for the KAT Walk C treadmill, the ability to create real-time visualizations of foot
                position estimations introduces a valuable tool for identifying irregularities in the estimation process. By visualizing the estimated foot positions as the user
                interacts with the treadmill, developers and researchers can quickly identify any discrepancies or inconsistencies between the estimated positions and the actual
                user movements. Furthermore, these visualizations serve as a diagnostic tool for evaluating the performance of the estimation algorithm under various
                conditions, leading to iterative improvements and refinements. Overall, the implementation of real-time visualization capabilities enhances the ability to detect
                and address irregularities in foot position estimation, ultimately contributing to the optimization of motion tracking and virtual reality experiences on the KAT
                Walk C treadmill.
            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="../../../public/estimate-position/est-position-diagram-example.png" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 400, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
                <Typography variant="body2" color="text.secondary">
                    Your image caption or description
                </Typography>
            </div>



        </>
    )
}

export default ProjectKATCEstBody;