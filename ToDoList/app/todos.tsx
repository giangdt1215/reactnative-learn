const randomId = () => Math.random().toString();

const createItem = (title: string) => ({id: randomId(), title});

const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

export const actionCreators = {
  add: (title: string) => ({type: types.ADD, payload: createItem(title)}),
  remove: (id: string) => ({type: types.REMOVE, payload: id}),
};

export function init(initialState: StateProps): StateProps {
  return initialState;
}

export const initialState: StateProps = {
  items: [
    createItem('Click to remove'),
    createItem('Learn React Native'),
    createItem('Write Code'),
    createItem('Ship App'),
  ],
};

type ToDoItem = {
  id: string;
  title: string;
};

export type StateProps = {
  items: Array<ToDoItem>;
};

export type ActionProps = {
  type: string;
  payload: string | ToDoItem;
};

export function reducer(state: StateProps, action: ActionProps) {
  switch (action.type) {
    case types.ADD:
      return {...state, items: [...state.items, action.payload as ToDoItem]};
    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter(
          (item: ToDoItem) => item.id != action.payload as string
        ),
      };
    default:
      return state;
  }
}
