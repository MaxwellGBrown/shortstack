const initialState = {};

export default function appReducer(state = initialState, action) {
  const newState = {...state};
  switch (action.type) {
    default:
      return newState;
  }
}
