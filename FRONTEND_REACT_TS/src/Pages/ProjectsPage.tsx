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
import axios from 'axios';
import { useLayoutContext } from '../components/Layout';
import projectsdata from '../TestData/projectsdata.json';
import { getApiUrl } from '../utils';

const sidebar = {
  pages: [
    { title: 'Home', url: '/' },
    { title: 'Grades', url: 'grades' },
    { title: 'Spotify', url: 'spotify' },
    { title: 'Games', url: 'games' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/JKen0' },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
      url: 'https://www.linkedin.com/in/kennethmatira/',
    },
  ],
};

const ChooseProjectLayout = ({ projectList, setCurrentPage, }: { projectList: Array<ProjectListType>; setCurrentPage: (e: ProjectPagesTypes) => void; }) => {
  return (
    <Container style={{ paddingTop: '20px' }} maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Degree Milestone Projects
      </Typography>
      {projectList.map((project) => {
        if (project.projectType === 'degree-milestone') {
          return (
            <div
              key={`degree-project-${project.id}`}
              id="katnn-project"
              style={{ cursor: 'pointer' }}
              onClick={() => setCurrentPage(project.id)}
            >
              <ChoosePostTile
                tileKey={`choose-tile-${project.id}`}
                post={project}
              />
            </div>
          );
        }
      })}
      <div />
      <Divider />

      <Typography style={{ paddingTop: '20px' }} variant="h4" gutterBottom>
        Course Projects
      </Typography>
      {projectList.map((project) => {
        if (project.projectType === 'course') {
          return (
            <div
              key={`minor-project-${project.id}`}
              id="katnn-project"
              style={{ cursor: 'pointer' }}
              onClick={() => setCurrentPage(project.id)}
            >
              <ChoosePostTile
                tileKey={`choose-tile-${project.id}`}
                post={project}
              />
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

const DisplaySelectedProject = ({
  currentPage,
  setCurrentPage,
  pageIndex,
  projectList
}: {
  pageIndex: number;
  currentPage: ProjectPagesTypes;
  setCurrentPage: (e: ProjectPagesTypes) => void;
    projectList: Array<ProjectListType>;
}) => {
  return (
    <Container style={{ paddingTop: '10px' }} maxWidth="lg">
      <Button
        style={{ paddingBottom: '5px' }}
        variant="outlined"
        onClick={() => setCurrentPage('all')}
      >
        Back
      </Button>

      <ChoosePostTile
        tileKey={`main-banner-${projectList[pageIndex].id}`}
        post={projectList[pageIndex]}
      />

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

      <Divider style={{ paddingTop: '20px' }} />

      <Typography
        style={{ paddingTop: '10px', paddingBottom: '10px' }}
        variant="h4"
      >
        Other Projects
      </Typography>

      <Grid container spacing={4}>
        {projectList.map((project) => {
          if (project.id != currentPage) {
            return (
              <FeaturedPost
                key={`additional-projects-${project.title}`}
                post={project}
                setCurrentPage={setCurrentPage}
              />
            );
          }
        })}
      </Grid>
    </Container>
  );
};

const ProjectsPage = () => {
  const [jsonData, setJsonData] = useState<Array<ProjectListType>>([]);
  const [currentPage, setCurrentPage] = useState<ProjectPagesTypes>('all');
  const [pageIndex, setPageIndex] = useState<number>(-1);
  const { search } = useLocation();
  const { toggleLoading, toggleAlert } = useLayoutContext();

  // Function to check if the query parameter is valid
  const isValidPageType = (pageType: string): pageType is ProjectPagesTypes => {
    return [
      'all',
      'katnn-project',
      'katc-estimate-position-project',
      'chainlink-project',
    ].includes(pageType);
  };

  // Set currentPage based on the query parameter
  useEffect(() => {
    const fetchData = async () => {
      try {
        toggleLoading(true); // Start loading
        const response = await axios.get(`${getApiUrl()}/academics/getAllProjects`);
        setJsonData(response.data);
      } catch (error) {
        // handle error
        setJsonData(projectsdata as Array<ProjectListType>);
        toggleAlert(true);
      } finally {
        toggleLoading(false); // Stop loading (whether request succeeded or failed)
      }
    };

    fetchData();

    const queryParams = new URLSearchParams(search);
    const queryParamValue = queryParams.get('content');

    if (queryParamValue && isValidPageType(queryParamValue)) {
      setCurrentPage(queryParamValue);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('content', currentPage);
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${queryParams}`,
    );

    const getIndex = [
      'katnn-project',
      'katc-estimate-position-project',
      'chainlink-project',
    ].indexOf(currentPage);
    setPageIndex(getIndex);
  }, [currentPage]);

  return (
    <>
      {currentPage === 'all' && pageIndex === -1 && (
        <ChooseProjectLayout setCurrentPage={setCurrentPage} projectList={jsonData} />
      )}
      {currentPage != 'all' && pageIndex != -1 && (
        <DisplaySelectedProject
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageIndex={pageIndex}
          projectList={jsonData}
        />
      )}
    </>
  );
};

export default ProjectsPage;
