import React from 'react';
import { FlatList } from 'react-native'; 
import { useQuery } from 'react-query';
import { get } from 'lodash';
import * as EpisodeApi from '../../../api/episode';
import { Text, View } from '../../../components/Themed';
import styles from './styles';

const EpisodeListScreen = () => {
  const { isLoading, isError, data } = useQuery('episodes', () =>
    EpisodeApi.fetchEpisodeList(),
  );

  if (isLoading) {
    return <Text>Loading...</Text>
  }
  if (isError) {
    return <Text>Error!</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={get(data, 'results', [])}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default EpisodeListScreen
