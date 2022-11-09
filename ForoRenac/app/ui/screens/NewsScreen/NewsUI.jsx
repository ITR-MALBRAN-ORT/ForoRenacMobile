import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function NewsUI({Data}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Novedades</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 24,
    color: '#1E1E1E',
    fontWeight: '600',
  }
})