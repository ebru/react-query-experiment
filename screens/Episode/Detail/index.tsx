import React from 'react';
import { useQuery } from 'react-query';
import { get } from 'lodash';
import { useRoute } from '@react-navigation/native';
import * as EpisodeApi from '../../../api/episode';
import { Text, View } from '../../../components/Themed';
import { LoadingOverlay } from '../../../components';
import styles from './styles';

const EpisodeListScreen = () => {
  const route = useRoute();

  const { isLoading, isError, data } = useQuery('episodeDetail', () =>
    EpisodeApi.fetchEpisodeDetail(get(route, 'params.id')),
  );

  if (isLoading) {
    return <LoadingOverlay />
  }
  if (isError) {
    return <Text>Error!</Text>
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{data.name}</Text>
      <Text>{data.air_date}</Text>
      <Text style={styles.tag}>{data.episode}</Text>
    </View> 
  );
}

export default EpisodeListScreen
