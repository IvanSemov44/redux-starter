let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded:":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolver: false,
        },
      ];

    case "bugRevoved":
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}