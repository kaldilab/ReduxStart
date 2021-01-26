const userReducer = (state = '홍길동', action) => {
  switch (action.type) {
    case 'USER':
      return action.data;
    default:
      return state;
  }
};

export default userReducer;