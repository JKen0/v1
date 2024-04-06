import React from 'react'
import { Container, Box, Typography } from '@mui/material'

import ProjectsDrawer from '../components/ProjectsDrawer'

const ProjectsPage = () => {
    return (
        <Container maxWidth="xl">
            <ProjectsDrawer />
        </Container>
    )
}

export default ProjectsPage