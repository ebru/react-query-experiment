import React from 'react';
import { FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { get } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import * as EpisodeApi from '../../../api/episode';
import { Text, View } from '../../../components/Themed';
import { EpisodeItem, LoadingOverlay } from '../../../components';
import styles from './styles';

const EpisodeListScreen = () => {
  const navigation = useNavigation();

  const { isLoading, isError, data } = useQuery('episodes', () =>
    EpisodeApi.fetchEpisodeList(),
  );

  if (isLoading) {
    return <LoadingOverlay />
  }
  if (isError) {
    return <Text>Error!</Text>
  }

  const handleDetailPress = (id: number) => {
    console.log(`detail id: ${id} is pressed`);
    navigation.navigate('EpisodeDetail', { id });
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={get(data, 'results', [])}
        renderItem={({ item }) => (
          <EpisodeItem onPress={() => handleDetailPress(item.id)}>{item.name}</EpisodeItem>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default EpisodeListScreen
