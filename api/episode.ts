import axios from '../utils/axios'

export const fetchEpisodeList = async () => {
  console.log('fetched all episodes from backend');
  const { data } = await axios.get('/episode');
  return data;
}

export const fetchEpisodeDetail = async (id: number) => {
  console.log(`fetched episode with id: ${id} from backend`);
  const { data } = await axios.get(`/episode/${id}`);
  return data;
}

