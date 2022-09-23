// import {View, Text, ActivityIndicator, Button, Image} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import React, {useEffect} from 'react';
// import {getUserById} from '../redux/slices/User';

// const User = () => {
//   const dispatch = useDispatch();
//   const {email,first_name, last_name, avatar, loading} = useSelector(
//     state => state.user,
//   );

//   useEffect(() => {
//     dispatch(getUserById());
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   }
//   return (
//     <View>
//       <Text>----GET USER BY ID----</Text>
//       <Text>name: {first_name}</Text>
//       <Text>last name: {last_name}</Text>
//       <Text>email: {email}</Text>
//       <Text>avatar: {avatar}</Text>
//       <Image
//         source={{uri: avatar}}
//         style={{width: 50, height: 50}}
//       />
//       {/* <Image
//         source={{uri: 'https://reactjs.org/logo-og.png'}}
//         style={{width: 50, height: 50}}
//       /> */}
//     </View>
//   );
// };

// export default User;
