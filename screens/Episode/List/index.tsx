import React from 'react';
import { Text, View } from '../../../components/Themed';
import styles from './styles';

const EpisodeListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Episodes</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

export default EpisodeListScreen
