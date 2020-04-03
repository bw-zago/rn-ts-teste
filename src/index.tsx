import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Counter from './Components/Counter';
import UserList from './Components/UserList';
import IUser from './Interfaces/IUser';
import {getUser} from './api/myApi';
import LoadingState from './Components/IF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    width: '100%',
    marginBottom: 5,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },

  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },

  buttonTitle: {color: '#FFF'},
});

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');

  const getNewUser = async () => {
    try {
      setLoading(true);
      const newUser = await getUser(user);
      setUsers([...users, newUser.data]);
      setUser('');
    } catch (error) {
      console.log(error);
      Alert.alert('Ops!', 'Usuario não existe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LoadingState
        loading={loading}
        loader={<ActivityIndicator size="small" color="#000" />}>
        <Text style={styles.title}>Perfil Github</Text>
        <TextInput
          value={user}
          onChangeText={setUser}
          autoCapitalize="none"
          style={styles.input}
          placeholder="Digite o perfil do usuário"
        />
        <TouchableOpacity onPress={getNewUser} style={styles.button}>
          <Text style={styles.buttonTitle}>Adicionar</Text>
        </TouchableOpacity>
        <UserList users={users} />
      </LoadingState>
    </View>
  );
};

export default App;
