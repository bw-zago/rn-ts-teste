import api from './api';
import IUser from '../Interfaces/IUser';

export const getUser = async (username: string) =>
  await api.get<IUser>(`/users/${username}`);
