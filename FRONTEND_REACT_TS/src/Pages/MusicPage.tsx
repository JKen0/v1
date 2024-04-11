import { useState, useEffect } from 'react';
import spotifydata from '../TestData/spotifydata.json';
import Container from '@mui/material/Container';

import RecentTracks from '../components/RecentTracks';
import TopArtists from '../components/TopArtists';
import TopSongs from '../components/TopSongs';
import { SpotifyDataInterface, TimeRangeItems } from '../Types/MusicTypes';
import { SelectChangeEvent } from '@mui/material/Select';
import { useLayoutContext } from '../components/Layout';
import axios from 'axios';

const MusicPage = () => {
  const [jsonData, setJsonData] = useState<SpotifyDataInterface>({
    previousSongs: [],
    topSongs: [],
    topArtists: [],
  });
  const [songTimeRange, setSongTimeRange] = useState<TimeRangeItems>('medium_term');
  const [artistTimeRange, setArtistTimeRange] = useState<TimeRangeItems>('medium_term');
  const { toggleLoading, toggleAlert } = useLayoutContext();

  const fetchData = async () => {
    try {
      // Start loading
      toggleLoading(true);
      const response = await axios.get(`https://v1-api-je3y.onrender.com/spotify/getMusicData?songsTimeRange=${songTimeRange}&artistTimeRange=${artistTimeRange}`);
      setJsonData(response.data as SpotifyDataInterface);
    } catch (error) {
      // handle error
      setJsonData(spotifydata as SpotifyDataInterface);
      toggleAlert(true);
    } finally {
      // stop loading
      toggleLoading(false);
    }
  };

  const changeArtistTimeRange = (e: SelectChangeEvent) => {
    const newValue = e.target.value as TimeRangeItems;
    setArtistTimeRange(newValue);
  }

  const changeSongTimeRange = (e: SelectChangeEvent) => {
    const newValue = e.target.value as TimeRangeItems;
    setSongTimeRange(newValue);
  }

  useEffect(() => {
    fetchData();
  }, [songTimeRange, artistTimeRange]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
      <RecentTracks data={jsonData.previousSongs} />
      <TopArtists data={jsonData.topArtists} handleChangeTimeFrame={changeArtistTimeRange} timeRangeValue={artistTimeRange} />
      <TopSongs data={jsonData.topSongs} handleChangeTimeFrame={changeSongTimeRange} timeRangeValue={songTimeRange} />
      <div style={{ height: '40px' }}></div>
    </Container>
  );
};

export default MusicPage;
