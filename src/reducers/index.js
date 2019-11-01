const reducer = (state, action) => {
  switch (action.type) {
    case 'newMessage':
      return {
        ...state,
        [action.room]: [
          ...state[action.room],
          { user: action.user, text: action.text }
        ]
      };

    default:
      return state;
  }
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'update users':
      return action.totalUsers;
    default:
      return state;
  }
};

export { reducer, usersReducer };
