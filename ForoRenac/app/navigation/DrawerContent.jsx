import React, {useEffect} from 'react';
import {View, StyleSheet, Pressable, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import IonICons from 'react-native-vector-icons/Ionicons';

import avatarDefault from '../assets/images/avatar.png';
import DrawerCustomItem from './DrawerCustomItem';
import CustomButtonSecondary from '../ui/components/customButton/customButtonSecondary';
import { colors } from '../ui/styles/Theme';
// Redux
import {useDispatch, useSelector} from 'react-redux';
// import {getUserById} from '../redux/slices/User';

const SIGN_OUT_TEXT = 'salir';

const DrawerContent = props => {
  const dispatch = useDispatch();
  const {email, avatar, loading} = useSelector(
    state => state.auth,
  );

  // useEffect(() => {
  //   dispatch(getUserById());
  // }, []);

  //TODO Get traduction i18n later
  const MATERNITY_BUTTON_TEXT = 'Cambiar maternidad';

  //TODO Get user from Store later
  const user = {
    name: email,
    institution: 'Hospital del sur',
    avatarImage: avatar,
  };

  // TODO Get linksItems from Store later
  const linksItems = [
    {id: '5dsf6', label: 'Casos', navigateTo: 'Landing',  isActive: true},
    {id: '5h', label: 'Chat', navigateTo: 'Chat'},
    {id: 'h354f', label: 'Novedades', navigateTo: 'News'},
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
                color={colors.WHITE}
                size={30}
                style={{color: colors.WHITE}}
                onPress={() => props.navigation.closeDrawer()}
              />
            </View>

            {/* User Info */}
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <TouchableOpacity
                onPress={() => {}}
                style={styles.userInfoContainer}>
                <View style={styles.userInfoContainer}>
                  <Avatar.Image size={44} source={{uri: user.avatarImage}} />
                  <View style={{marginLeft: 10, flexDirection: 'column'}}>
                    <Title style={styles.title}>{user.name}</Title>
                    <Caption style={styles.caption}>{user.institution}</Caption>
                  </View>
                  <IonICons
                    name="arrow-forward-circle-outline"
                    color={colors.PRIMARY}
                    size={30}
                    style={{color: colors.PRIMARY, marginLeft: 15}}
                  />
                </View>
              </TouchableOpacity>
            )}
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
              style={{marginRight: -25, color: colors.PRIMARY}}
            />
          )}
          labelStyle={{color: colors.PRIMARY}}
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
    backgroundColor: colors.WHITE,
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
    color: colors.PRIMARY,
  },
  caption: {
    fontSize: 14,
    marginTop: -10,
    fontFamily: 'Montserrat-Medium',
    color: colors.PRIMARY,
    fontWeight: '500',
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
