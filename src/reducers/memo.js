const memoReducer = (state = [
  {
    id: 1,
    memoSubject: '첫 메모',
    memoContent: '첫 번째 메모이다.'
  }
], action) => {
  switch (action.type) {
    case 'MEMO_ADD':
      return [
        ...state,
        action.data
      ];
    case 'MEMO_DELETE':
      return state.filter((item, index) => index !== action.payload);
    case 'MEMO_EDIT':
      state.find((item, index) => index === action.payload).memoContent = action.data
      return [
        ...state
      ];
    default:
      return state;
  }
};

export default memoReducer;