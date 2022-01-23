import axios from '../utils/axios'

export const fetchEpisodeList = async () => {
  const { data } = await axios.get('/episode');
  return data;
}
