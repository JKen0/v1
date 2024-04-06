import React from 'react'
import { Container, Box, Typography } from '@mui/material'

import ProjectsDrawer from '../components/ProjectsDrawer'

const ProjectsPage = () => {
    return (
        <Container sx={{ display: 'flex' }}>
            <ProjectsDrawer />
        </Container>
    )
}

export default ProjectsPage