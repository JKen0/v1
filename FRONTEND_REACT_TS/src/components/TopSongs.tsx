import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { TableHead, TableCell, Box, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

import { TopSongsTypes, TimeRangeItems } from '../Types/MusicTypes';
import { useLayoutContext } from './Layout';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

interface TopSongsProps {
  data: TopSongsTypes[];
  handleChangeTimeFrame: (event: SelectChangeEvent) => void;
  timeRangeValue: TimeRangeItems;
}

const TopSongs = ({ data, handleChangeTimeFrame, timeRangeValue }: TopSongsProps) => {
  const { isDarkMode } = useLayoutContext();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h4" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
          Top Tracks
        </Typography>
        <Box marginLeft="auto">
          <InputLabel id="demo-simple-select-standard-label">Time Frame</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={timeRangeValue}
            label="Top Tracks Time Frame"
            onChange={handleChangeTimeFrame}
          >
            <MenuItem value={"short_term"}>Last 30 days</MenuItem>
            <MenuItem value={"medium_term"}>Last 180 days</MenuItem>
            <MenuItem value={"long_term"}>Last 365 days</MenuItem>
          </Select>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size={'small'}>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '0.5%' }}>#</TableCell>
              <TableCell style={{ width: '1%' }}></TableCell>
              <TableCell style={{ width: '10%' }}>Name</TableCell>
              <TableCell style={{ width: '10%' }}>Artists</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return (
                <TableRow
                  key={`${index}-${row.name}`}
                  style={{
                    height: index < 3 ? '60px' : '25px',
                    backgroundColor:
                      index === 0
                        // TOP 1 SONG
                        ? (isDarkMode ? '#B59410' : '#FFD700')
                        // TOP 2 SONG
                        : index === 1
                          ? (isDarkMode ? '#71706e' : '#C0C0C0')
                          // TOP 3 SONG
                          : index === 2
                            ? (isDarkMode ? '#905923' : '#CD7F32')
                            : 'inherit', // Set different background color for first 3 rows
                  }}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}.
                  </TableCell>
                  <TableCell>
                    <Box sx={{ width: 32, height: 32 }}>
                      <a
                        href={row.linkSpotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <img
                          src={row.artistPic}
                          alt="Image"
                          style={{
                            width: `${index < 3 ? 38 : 32}px`,
                            height: `${index < 3 ? 38 : 32}px`,
                          }}
                        />
                      </a>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <a
                      href={row.linkSpotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {row.name}
                    </a>
                  </TableCell>
                  <TableCell>{row.artists}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TopSongs;
