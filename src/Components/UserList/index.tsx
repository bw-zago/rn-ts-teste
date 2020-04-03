import React from 'react';

import IUser from '../../Interfaces/IUser';
import UserItem from './UserItem';
import {View} from 'react-native';

interface Props {
  users: IUser[];
}

const UserList = ({users}: Props) => (
  <>
    {users.map(user => (
      <UserItem user={user} key={user.id} />
    ))}
  </>
);

export default UserList;
