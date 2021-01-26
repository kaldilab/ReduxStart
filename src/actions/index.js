export const Increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number,
  }
};
export const Decrement = (number) => {
  return {
    type: 'DECREMENT',
    payload: number,
  }
};
export const Auth = () => {
  return {
    type: 'AUTH',
  }
};
export const User = (name) => {
  return {
    type: 'USER',
    data: name,
  }
};
export const Asc = (name) => {
  return {
    type: 'ASC',
  }
};
export const Desc = (name) => {
  return {
    type: 'DESC',
  }
};
export const MemoAdd = (array) => {
  return {
    type: 'MEMO_ADD',
    data: array,
  }
};
export const MemoDelete = (index) => {
  return {
    type: 'MEMO_DELETE',
    payload: index,
  }
};
export const MemoEdit = (index, content) => {
  return {
    type: 'MEMO_EDIT',
    payload: index,
    data: content
  }
};