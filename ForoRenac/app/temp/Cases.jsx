import { View, Text, ActivityIndicator , Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import { getCases } from '../redux/slices/Cases';

const Cases = () => {
  const dispatch = useDispatch();
  const { cases, loading } = useSelector((state) => state.cases)

  useEffect(() => {
    dispatch(getCases());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Button title={'Reload Cases'} onPress={() => dispatch(getCases())} />
      {cases.map((c) => {
        return (
          <View  key={c.id}>
            <View>
              <View >
                <Text>
                  {c.first_name} {c.last_name}
                </Text>
              </View>
              <View >
                <Text>{c.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Cases