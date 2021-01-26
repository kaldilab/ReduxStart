const fruitReducer = (state = 'asc', action) => {
  switch (action.type) {
    case 'ASC':
      return 'asc';
    case 'DESC':
      return 'desc';
    default:
      return state;
  }
};

export default fruitReducer;