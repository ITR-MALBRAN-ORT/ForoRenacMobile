import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../styles/Theme';

export default function NewsCard({item}) {
  return (
    <>
    <View style={styles.container}>
      {item.Imagen !== null && <Image source={{uri: item.Imagen}} style={styles.image} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.Titulo}</Text>
        <Text>{item.Contenido}</Text>
      </View>
    </View>
    <View style={{height:10}} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    padding: 10,
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.PRIMARY
  }
});
