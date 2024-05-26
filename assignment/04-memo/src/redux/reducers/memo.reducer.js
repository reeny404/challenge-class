export const ADD_MEMO = "ADD_MEMO";
export const DELETE_MEMO = "DELETE_MEMO";
export const UPDATE_MEMO = "UPDATE_MEMO";

const memoReducer = (prevState, action) => {
  switch (action.type) {
    case UPDATE_MEMO:
      return [
        ...prevState.filter((memo) => memo.id !== action.payload.id),
        { ...action.payload },
      ];
    case ADD_MEMO:
      return [...prevState, action.payload];
    case DELETE_MEMO:
      return [...prevState.filter((memo) => memo.id !== action.payload.id)];
    default:
      return prevState;
  }
};
export default memoReducer;
