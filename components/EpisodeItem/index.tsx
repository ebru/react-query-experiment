import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const EpisodeItem = ({ children, onPress }: { children: any, onPress: any }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.root}>
        <Text>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default EpisodeItem;
