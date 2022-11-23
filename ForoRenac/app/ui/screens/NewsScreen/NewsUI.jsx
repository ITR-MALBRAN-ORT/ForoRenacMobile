import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';

export default function NewsUI({Data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novedades</Text>
      <FlatList data={Data} renderItem={NewsCard} style={{padding: 20}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: '#1E1E1E',
    fontWeight: '600',
  },
});
