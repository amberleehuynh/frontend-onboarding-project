export interface Item {
  uuid: string;
  name: string;
  description: string;
  price: number;
}

export interface User {
  uuid: string;
  username: string;
  password: string;
}

export interface Order {
  uuid: string;
  item: Item;
  user: User;
  createdAt: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItems = async (apiUrl: string): Promise<Item[]> => {
  const response = await fetch(`${apiUrl}/items`);
  const data = response.json();
  return data;
};

export const createItem = async (apiUrl: string, name: string, description: string, price: number): Promise<Item> => {
  const response = await fetch(`${apiUrl}/item`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      price,
    }),
  });
  const data = response.json();
  return data;
};

// Home Page - delete an item
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deleteItem = async (apiUrl: string, itemId: string) => {
  const response = await fetch(`${apiUrl}/items/${itemId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();
  return data;
};

// Home Page - buy an item
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const orderItem = async (apiUrl: string, userId: string, itemId: string): Promise<Order> => {
  const response = await fetch(`${apiUrl}/items/${userId}${itemId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      itemId,
    }),
  });
  const data = response.json();
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getOrders = async (apiUrl: string, userId: string): Promise<Order[]> => {
  const response = await fetch(`${apiUrl}/orders/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
    }),
  });
  // const response = await fetch(`${apiUrl}/orders/${userId}`);
  const data = response.json();
  return data;
  // return [];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createAccount = async (apiUrl: string, username: string, password: string): Promise<User> => {
  const response = await fetch(`${apiUrl}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = response.json();
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginUser = async (apiUrl: string, username: string, password: string): Promise<User> => {
  const response = await fetch(`${apiUrl}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = response.json();
  return data;
};
