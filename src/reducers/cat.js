const cat = (state: string = null, action: Action) => {
  switch (action.type) {
    case 'GET_CAT':
      return action.pic;
    default:
      return state;
  }
};

export default cat;
