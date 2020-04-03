import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TextInput, TouchableOpacity} from 'react-native';
import Counter from './Components/Counter';
import UserList from './Components/UserList';
import IUser from './Interfaces/IUser';
import {getUser} from './api/myApi';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');

  const getNewUser = async () => {
    try {
      setLoading(true);
      console.log('[newUser1]');
      const newUser = await getUser(user);
      console.log('[newUser2]', newUser);
      setUsers([...users, newUser.data]);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops!', 'Usuario não existe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
      }}>
      <TextInput
        value={user}
        onChangeText={setUser}
        autoCapitalize="none"
        style={{
          width: '100%',
          marginBottom: 5,
          borderBottomColor: '#000',
          borderBottomWidth: 1,
        }}
      />
      <TouchableOpacity
        onPress={getNewUser}
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#777',
        }}>
        <Text style={{color: '#FFF'}}>Procurar</Text>
      </TouchableOpacity>
      <UserList users={users} />
    </View>
  );
};

export default App;
