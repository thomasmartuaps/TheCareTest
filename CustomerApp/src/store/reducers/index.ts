type BaseAction = {
  type: "BASE_TYPE";
  payload: {};
};

const appState = {
  count: 1,
};

export default function reducer(state = appState, action: BaseAction) {
  const { type, payload } = action;
  switch (type) {
    case "BASE_TYPE":
      return { ...state };
    default:
      return state;
  }
}
