import {View, Text, ActivityIndicator, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {loginUser, logoutUser, getUserById} from '../redux/slices/Auth';

const Login = () => {
  const dispatch = useDispatch();
  const {token, loading, email} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getUserById());
  }, [token]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View>
      <Text>Login</Text>
      <Button
        title={'Login'}
        onPress={() =>
          dispatch(
            loginUser({email: 'some@some.com', password: 'pass'}),
          )
        }
      />
      <Text>Token: {token}</Text>
      <Text>Logout</Text>
      <Button
        title={'Logout'}
        onPress={() =>
          dispatch(
            logoutUser(),
          )
        }
      />
       <Text>User: {email}</Text>
    </View>
  );
};

export default Login;
