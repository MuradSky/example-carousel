const key_token = 'api_token';

export const getKey = (key: string): any => {
	const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null;
};

export const setKey = (key: string, data: string) => {
	if (typeof data === 'object') return localStorage.setItem(key_token, JSON.stringify(data));
  localStorage.setItem(key, data);
};

export const removeKey = (key: string) => {
  localStorage.removeItem(key);
};

export const setUserStorage = (user: string) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserStorage = (): any => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};

export const removeUser = () => {
  localStorage.removeItem('user');
};

export const setIsLogged = () => {
  localStorage.setItem('isLogged', 'true')
}

export const getIsLogged = () => {
  return JSON.parse(localStorage.getItem('isLogged') || 'false');
}

export const removeUserLogged = () => {
  localStorage.removeItem('isLogged')
}
