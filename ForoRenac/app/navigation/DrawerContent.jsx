import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme, Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import IonICons from 'react-native-vector-icons/Ionicons';

import avatarDefault from '../assets/images/avatar.png';
import DrawerCustomItem from './DrawerCustomItem';
import CustomButtonSecondary from '../components/customButton/customButtonSecondary';

const SIGN_OUT_TEXT = 'salir';

const DrawerContent = props => {
  const paperTheme = useTheme();


  //TODO Get traduction i18n later
  const MATERNITY_BUTTON_TEXT  = 'Cambiar maternidad'
  
  //TODO Get user from Store later
  const user = {
    name: 'Mónica Clements',
    institution: 'Hospital del sur',
    avatarImage: avatarDefault,
  };

  // TODO Get linksItems from Store later
  const linksItems = [
    {id: '5dsf6', label: 'Casos', navigateTo: 'Landing'},
    {id: '5h', label: 'Notificaciones', navigateTo: 'Landing', isActive: true},
    {id: 'h354f', label: 'Novedades', navigateTo: 'Landing'},
  ];

  signOut = () => {
    //TODO logout user
    console.log('me fui');
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            {/* Button Section*/}
            <View style={{marginLeft: -10, marginVertical: 10}}>
              <IonICons
                name="close"
                color={'white'}
                size={30}
                style={{color: 'white'}}
                onPress={() => props.navigation.closeDrawer()}
              />
            </View>

            {/* User Info */}
            <View style={styles.userInfoContainer}>
              <Avatar.Image size={44} source={user.avatarImage} />
              <View style={{marginLeft: 10, flexDirection: 'column'}}>
                <Title style={styles.title}>{user.name}</Title>
                <Caption style={styles.caption}>{user.institution}</Caption>
              </View>
            </View>

            {/* Button Section*/}
            <View style={[styles.row, {marginLeft: -10}]}>
              <CustomButtonSecondary
                text={MATERNITY_BUTTON_TEXT}
                onPress={() => {}}
              />
            </View>
          </View>

          {/* Items List Links */}
          <Drawer.Section style={styles.drawerSection}>
            {linksItems.map(item => (
              <DrawerCustomItem
                key={item.id}
                isActive={item.isActive}
                label={item.label.toUpperCase()}
                onPress={() => props.navigation.navigate(item.navigateTo)}
              />
            ))}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      {/* Bottom Section - SignOut Section */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <IonICons
              name="exit-outline"
              color={color}
              size={size}
              style={{marginRight: -25, color: 'white'}}
            />
          )}
          labelStyle={{color: 'white'}}
          label={SIGN_OUT_TEXT.toUpperCase()}
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C4670',
  },
  userInfoContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#E8E8E8',
  },
  caption: {
    fontSize: 14,
    marginTop: -10,
    fontFamily: 'Montserrat',
    color: '#278AB0',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 9,
  },
  bottomDrawerSection: {
    marginBottom: 0,
  },
});
