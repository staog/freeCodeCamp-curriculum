const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      let firstArr = [...state.slice(0, action.index)];
      let secondArr = [...state.slice(action.index + 1)];
      return firstArr.concat(secondArr);
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
