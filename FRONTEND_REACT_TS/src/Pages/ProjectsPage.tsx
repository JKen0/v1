import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import FeaturedPost from '../components/FeaturedPost';
import ProjectSidebar from '../components/ProjectSidebar';
import { Typography, Divider, Button } from '@mui/material';
import ChoosePostTile from '../components/ChoosePostTile';
import { ProjectPagesTypes, ProjectListType } from '../Types/ProjectsTypes';

import ProjectKATNNBody from './ProjectBody/ProjectKATNNBody';
import ProjectKATCEstBody from './ProjectBody/ProjectKATCEstBody';
import ProjectChainlinkBody from './ProjectBody/ProjectChainlinkBody';

import { LinkedIn } from '@mui/icons-material';

const projectList: Array<ProjectListType> = [
    {
        id: "katnn-project",
        projectType: "degree-milestone",
        title: 'KATNN: KAT Walk C Alternative Motion Capture Algorithm',
        description: "This report introduces KATNN, an alternative input mechanism for the KAT Walk C omni-directional treadmill, aiming to address limitations in the original algorithm by utilizing modular neural networks. KATNN focuses on enabling multi-directional movement and accurately registering slower motions to reduce motion sickness and disorientation in Virtual Reality (VR) experiences.",
        image: 'https://t4.ftcdn.net/jpg/04/96/88/45/360_F_496884556_Z5W6NoexSlZzBeeLSnNF5pkec5RA3maC.jpg',
        imageText: 'main image description',
        linkText: 'Continue reading…',
        contributors: "Kenneth Matira",
    },
    {
        id: "katc-estimate-position-project",
        projectType: "course",
        title: 'KAT Walk C: Foot Estimation Position Code',
        description: "The estimation of foot position on the KAT Walk C relies on sparse sensor readings to gauge the foot's location relative to the treadmill surface, employing techniques like Baycentric Interpolation for estimation.",
        image: 'https://mmos.com/wp-content/uploads/2021/07/crimson-desert-motion-capture-actors-banner.jpg',
        imageText: 'main image description',
        linkText: 'Continue reading…',
        contributors: "Kenneth Matira",
    },
    {
        id: "chainlink-project",
        projectType: "course",
        title: 'Automated Insurance Policies On Chainlink',
        description: "The estimation of foot position on the KAT Walk C relies on sparse sensor readings to gauge the foot's location relative to the treadmill surface, employing techniques like Baycentric Interpolation for estimation.",
        image: 'https://www.shutterstock.com/image-illustration/blockchain-technology-futuristic-hud-background-600nw-1044225994.jpg',
        imageText: 'main image description',
        linkText: 'Continue reading…',
        contributors: "Kenneth Matira",
    }
];

const sidebar = {
    title: 'About',
    description: "I hold a Master's Degree in Computing and Software from McMaster University, where I used my skills in software and computational for problem-solving. With a passion for coding, I enjoy leveraging my skillset to create innovative solutions and explore new technologies in the ever-evolving field of software engineering.",
    pages: [
        { title: "Home", url: "/" },
        { title: "Grades", url: "grades" },
        { title: "Spotify", url: "spotify" },
        { title: "Games", url: "games" },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/JKen0" },
        { name: 'LinkedIn', icon: LinkedIn, url: "https://www.linkedin.com/in/kennethmatira/" },
    ],
};


const ChooseProjectLayout = ({ setCurrentPage }: { setCurrentPage: (e: ProjectPagesTypes) => void }) => {

    return (
        <Container style={{ paddingTop: "20px" }} maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Degree Milestone Projects
            </Typography>
            {projectList.map((project, index) => {
                if (project.projectType === "degree-milestone") {
                    return (
                        <div key={`degree-project-${project.id}`} id="katnn-project" style={{ cursor: "pointer" }} onClick={() => setCurrentPage(project.id)}>
                            <ChoosePostTile tileKey={`choose-tile-${project.id}`} post={project} />
                        </div>
                    );

                };
            })}
            <div />
            <Divider />

            <Typography style={{ paddingTop: "20px" }} variant="h4" gutterBottom>
                Course Projects
            </Typography>
            {projectList.map((project, index) => {
                if (project.projectType === "course") {
                    return (
                        <div key={`minor-project-${project.id}`} id="katnn-project" style={{ cursor: "pointer" }} onClick={() => setCurrentPage(project.id)}>
                            <ChoosePostTile tileKey={`choose-tile-${project.id}`} post={project} />
                        </div>
                    );
                }
            })}
        </Container>
    );
};

const getProjectBody = (id: ProjectPagesTypes) => {
    switch (id) {
        case 'katnn-project':
            return <ProjectKATNNBody />;
        case 'katc-estimate-position-project':
            return <ProjectKATCEstBody />;
        case 'chainlink-project':
            return <ProjectChainlinkBody />;
    }
};



const DisplaySelectedProject = ({ currentPage, setCurrentPage }: { currentPage: ProjectPagesTypes, setCurrentPage: (e: ProjectPagesTypes) => void }) => {
    return (
        <Container style={{ paddingTop: "20px" }} maxWidth="lg">

            {projectList.map((project, index) => {
                if (project.id === currentPage) {
                    return (
                        <div key={`div-main-banner-${project.id}`}>
                            <ChoosePostTile tileKey={`main-banner-${project.id}`} post={project} />
                        </div>
                    );
                }
            })}

            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        '& .markdown': {
                            py: 3,
                        },
                    }}
                >
                    {getProjectBody(currentPage)}
                </Grid>
                <ProjectSidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    pages={sidebar.pages}
                    social={sidebar.social}
                />
            </Grid>

            <Divider style={{ paddingTop: "20px" }} />

            <Typography style={{ paddingTop: "10px", paddingBottom: "10px" }} variant="h4">
                Other Projects
            </Typography>


            <Grid container spacing={4}>
                {projectList.map((project, index) => {
                    if (project.id != currentPage) {
                        return <FeaturedPost key={`additional-projects-${project.title}`} post={project} setCurrentPage={setCurrentPage} />
                    }
                })}
            </Grid>

        </Container>
    );
};


const ProjectsPage = () => {
    const [currentPage, setCurrentPage] = useState<ProjectPagesTypes>("all");
    const { search } = useLocation();


    // Function to check if the query parameter is valid
    const isValidPageType = (pageType: string): pageType is ProjectPagesTypes => {
        return ["all", "katnn-project", "katc-estimate-position-project", "chainlink-project"].includes(pageType);
    };

    // Set currentPage based on the query parameter
    useEffect(() => {
        const queryParams = new URLSearchParams(search);
        const queryParamValue = queryParams.get('content');

        if (queryParamValue && isValidPageType(queryParamValue)) {
            setCurrentPage(queryParamValue);
        }
    }, []);


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('content', currentPage);
        window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);

    }, [currentPage]);


    return (
        <>
            {currentPage === "all" && <ChooseProjectLayout setCurrentPage={setCurrentPage} />}
            {currentPage != "all" && <DisplaySelectedProject currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </>
    );
}

export default ProjectsPage;