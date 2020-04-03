import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import IUser from '../../../Interfaces/IUser';

interface Props {
  user: IUser;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
  },
});

const UserItem = ({user}: Props) => (
  <View style={styles.container}>
    <Text>{`${user.name} (${user.login})`}</Text>
    <Text>{user.email}</Text>
  </View>
);

export default UserItem;
