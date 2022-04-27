import cliente from './client';

export const getApiResult = () => {
  const url = `/api/users/authenticate`;
  return client.get(url);
};