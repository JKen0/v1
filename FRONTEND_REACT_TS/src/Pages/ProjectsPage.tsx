import { useState, MouseEvent } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import ProjectSidebar from '../components/ProjectSidebar';
import { Typography, Divider, Button } from '@mui/material';
import ChoosePostTile from '../components/ChoosePostTile';
import { ProjectPagesTypes } from '../Types/ProjectsTypes';


const mainFeaturedPost = {
    title: 'KATNN: KAT Walk C Alternative Motion Capture Algorithm',
    description: "This report introduces KATNN, an alternative input mechanism for the KAT Walk C omni-directional treadmill, aiming to address limitations in the original algorithm by utilizing modular neural networks. KATNN focuses on enabling multi-directional movement and accurately registering slower motions to reduce motion sickness and disorientation in Virtual Reality (VR) experiences.",
    image: 'https://t4.ftcdn.net/jpg/04/96/88/45/360_F_496884556_Z5W6NoexSlZzBeeLSnNF5pkec5RA3maC.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const mainFeaturedPost2 = {
    title: 'KAT Walk C: Foot Estimation Position Code',
    description: "The estimation of foot position on the KAT Walk C relies on sparse sensor readings to gauge the foot's location relative to the treadmill surface, employing techniques like Baycentric Interpolation for estimation.",
    image: 'https://mmos.com/wp-content/uploads/2021/07/crimson-desert-motion-capture-actors-banner.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const mainFeaturedPost3 = {
    title: 'Automated insurance policies on Chainlink',
    description: "The estimation of foot position on the KAT Walk C relies on sparse sensor readings to gauge the foot's location relative to the treadmill surface, employing techniques like Baycentric Interpolation for estimation.",
    image: 'https://www.shutterstock.com/image-illustration/blockchain-technology-futuristic-hud-background-600nw-1044225994.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};


const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];


const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'X', icon: XIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};


const ChooseProjectLayout = ({ setCurrentPage }: { setCurrentPage: (e: any) => void }) => {

    return (
        <Container style={{ paddingTop: "20px" }} maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Degree Milestone Projects
            </Typography>
            <div id="katnn-project" style={{ cursor: "pointer" }} onClick={setCurrentPage}>
                <ChoosePostTile post={mainFeaturedPost} />
            </div>

            <Divider />

            <Typography style={{ paddingTop: "20px" }} variant="h4" gutterBottom>
                Course Projects
            </Typography>
            <div id="katc-estimate-position-project" style={{ cursor: "pointer" }} onClick={setCurrentPage}>
                <ChoosePostTile post={mainFeaturedPost2} />
            </div>
            <div id="chainlink-project" style={{ cursor: "pointer" }} onClick={setCurrentPage}>
                <ChoosePostTile post={mainFeaturedPost3} />
            </div>
        </Container>
    );
};



const DisplaySelectedProject = () => {
    return (
        <Container style={{ paddingTop: "20px" }} maxWidth="lg">
            <MainFeaturedPost post={mainFeaturedPost} />
            <Typography variant="h4" gutterBottom>
                BOO
            </Typography>
            <Divider />
            <Typography variant="body1">
                BOO
            </Typography>

            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
        </Container>
    );
};


const ProjectsPage = () => {
    const [currentPage, setCurrentPage] = useState<ProjectPagesTypes>("all");

    const handleProjectChange = (e: MouseEvent<HTMLDivElement>) => {
        // Get the id of the clicked div and assert its type
        const divId = e.currentTarget.id as ProjectPagesTypes;
        setCurrentPage(divId);
    };

    console.log(currentPage);

    return (
        <>
            {currentPage === "all" && <ChooseProjectLayout setCurrentPage={handleProjectChange} />}
            {currentPage != "all" && <DisplaySelectedProject />}
        </>
    );
}

export default ProjectsPage;