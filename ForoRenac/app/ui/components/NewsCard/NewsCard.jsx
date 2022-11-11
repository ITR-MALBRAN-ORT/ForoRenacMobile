import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../styles/Theme';

export default function NewsCard({item}) {
  return (
    <View style={styles.container}>
      {item.Imagen !== null && <Image source={{uri: item.Imagen}} style={styles.image} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.Titulo}</Text>
        <Text>{item.Contenido}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 300,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  textContainer: {
    padding: 10,
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.PRIMARY
  }
});
