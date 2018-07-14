// @flow

export const toggleTodo = (id: number) => ({
  type: 'COMPLETE',
  id,
});

export const addTodo = (text: string) => ({
  type: 'ADD',
  text,
});

export const storeEdit = (id: number, text: string) => ({
  type: 'EDIT',
  id,
  text,
});

export const toggleEdit = (id: number) => ({
  type: 'EDIT_MODE',
  id,
});

export const toggleFilter = () => ({
  type: 'TOGGLE_FILTER',
});

export const generateRamdomTodo = () => ({
  type: 'RANDOM',
});

export const fetchCatFunction = pic => ({
  pic,
  type: 'GET_CAT',
});
