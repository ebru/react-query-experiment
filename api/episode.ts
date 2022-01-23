import axios from '../utils/axios'

export const getEpisodeList = async () => {
  return axios.get('/episode')
}
