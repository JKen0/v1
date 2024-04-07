import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        key_contributions: [
            'Improved the overall VR experience by enabling smoother and more natural movement within virtual environments, enhancing user engagement and satisfaction.',
            'Developed an innovative input mechanism for the KAT Walk C omni-directional treadmill, addressing limitations in the original algorithm.',
            'Implementing features that enable users to customize sensitivity and rotation offset, enhancing overall immersion and providing a tailored experience for each user.',
            'I established a flexible framework that facilitates ongoing research to refine motion accuracy, paving the way for continual improvement and innovation in the project\'s capabilities.',
        ],
        tech_stack: [
            'Virtual Reality (VR)',
            'C#',
            'Python',
            'Unity',
            'Neural Networks',
            'WebSocket Communication',
            'Back-end Server',
            'Motion Capture',
        ],
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
        key_contributions: [
            'Developed algorithms for text extraction and interpretation, improving the accuracy and efficiency of position estimation.',
            'Enhanced the project\'s data export capabilities to support diverse file formats and data structures, maximizing flexibility for downstream analysis tasks.',
            'Implemented Baycentric interpolation to accurately estimate the position of the foot on the KAT Walk C treadmill, enhancing the precision of motion tracking.',
            'Developed real-time sensor data fetching code.'

        ],
        tech_stack: [
            'Python',
            'Excel',
            'pytesseract',
            'Motion Capture',

        ],
    },
    {
        id: "chainlink-project",
        projectType: "course",
        title: 'Automated Insurance Policies On Chainlink',
        description: "In the Chainlink project, I leveraged Chainlink to develop data- centric parametrized insurance policies.These policies were designed to dynamically adjust payouts based on real - time rain data, enhancing flexibility and accuracy in insurance coverage.",
        image: 'https://www.shutterstock.com/image-illustration/blockchain-technology-futuristic-hud-background-600nw-1044225994.jpg',
        imageText: 'main image description',
        linkText: 'Continue reading…',
        contributors: "Kenneth Matira",
        key_contributions: [
            'Automated payment processes through smart contracts, ensuring seamless and timely payouts to policyholders based on predefined conditions.',
            'Empowered users with transparent and immutable transaction records, fostering trust and confidence in the insurance system.',
            'Leveraged Chainlink\'s decentralized oracle networks to ensure reliability and trustlessness of data inputs.',
            'Enhanced decentralization for increased security, transparency, and accessibility within the insurance ecosystem.',
        ],
        tech_stack: [
            'C++',
            'Solidity',
            'Node.js',
            'Chainlink Node',
            'React.js',
            'JavaScript',
            'Weather API',
            'REST API',
            'Webhooks',
            'Ethereum',
            'MetaMask',
        ],
    }
];

const sidebar = {
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



const DisplaySelectedProject = ({ currentPage, setCurrentPage, pageIndex }: { pageIndex: number, currentPage: ProjectPagesTypes, setCurrentPage: (e: ProjectPagesTypes) => void }) => {
    return (
        <Container style={{ paddingTop: "10px" }} maxWidth="lg">
            <Button style={{ paddingBottom: "5px" }} variant="outlined" onClick={() => setCurrentPage("all")}>Back</Button>

            <ChoosePostTile tileKey={`main-banner-${projectList[pageIndex].id}`} post={projectList[pageIndex]} />

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
                    pages={sidebar.pages}
                    social={sidebar.social}
                    key_contributions={projectList[pageIndex].key_contributions}
                    tech_stack={projectList[pageIndex].tech_stack}
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
    const [pageIndex, setPageIndex] = useState<number>(-1);
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

        const getIndex = ["katnn-project", "katc-estimate-position-project", "chainlink-project"].indexOf(currentPage);
        setPageIndex(getIndex);

    }, [currentPage]);


    return (
        <>
            {currentPage === "all" && pageIndex === -1 && <ChooseProjectLayout setCurrentPage={setCurrentPage} />}
            {currentPage != "all" && pageIndex != -1 && <DisplaySelectedProject currentPage={currentPage} setCurrentPage={setCurrentPage} pageIndex={pageIndex} />}
        </>
    );
}

export default ProjectsPage;