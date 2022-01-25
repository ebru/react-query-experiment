import React from 'react';
import { useQuery } from 'react-query';
import * as EpisodeApi from '../../../api/episode';
import { Text, View } from '../../../components/Themed';
import { LoadingOverlay } from '../../../components';
import styles from './styles';

const EpisodeListScreen = () => {
  const { isLoading, isError, data } = useQuery('episodes', () =>
    EpisodeApi.fetchEpisodeDetail(20),
  );

  if (isLoading) {
    return <LoadingOverlay />
  }
  if (isError) {
    return <Text>Error!</Text>
  }

  console.log('data', data);

  return (
    <View style={styles.root}>
      Episode detail
    </View>
  );
}

export default EpisodeListScreen
