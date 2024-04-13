import { useState, useEffect } from 'react';
import { TopArtistsTypes, TimeRangeItems } from '../Types/MusicTypes';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
interface TopArtistsProps {
  data: TopArtistsTypes[];
  handleChangeTimeFrame: (event: SelectChangeEvent) => void;
  timeRangeValue: TimeRangeItems;
}

const numRowsCol = (num: number): number => {
  return num === 0 ? 2 : 1;
};

const TopArtists = ({ data, handleChangeTimeFrame, timeRangeValue }: TopArtistsProps) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h4" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
          Top Artists
        </Typography>
        <Box marginLeft="auto">
          <InputLabel id="demo-simple-select-standard-label">Time Frame</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={timeRangeValue}
            label="Time Frame Top Artists"
            onChange={handleChangeTimeFrame}
          >
            <MenuItem value={"short_term"}>Last 30 days</MenuItem>
            <MenuItem value={"medium_term"}>Last 180 days</MenuItem>
            <MenuItem value={"long_term"}>Last 365 days</MenuItem>
          </Select>
        </Box>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageList
          variant="quilted"
          cols={screenWidth > 600 ? 4 : 2}
        >
          {data.map((item, index) => (
            <ImageListItem
              key={item.name}
              cols={numRowsCol(index)}
              rows={numRowsCol(index)}
            >
              <Card>
                <a
                  href={item.linkSpotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <CardMedia
                    component="img"
                    image={item.artistPic}
                    title={item.name}
                  />
                  <CardContent style={{ padding: '8px' }}>
                    <Typography variant="h6" component="div">
                      {`${index + 1}. ${item.name}`}
                    </Typography>
                  </CardContent>
                </a>
              </Card>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default TopArtists;
