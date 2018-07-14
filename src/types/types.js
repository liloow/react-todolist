export type Todo = {
  +id: Id,
  +text: Text,
  +done: ?string,
  +beingEdited: boolean,
  +doneAt: string,
};

export type Action = {
  type: string,
  id: number,
  text: string,
};
