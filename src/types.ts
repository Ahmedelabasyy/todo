export type todo = {
  id: number | string;
  title: string;
  completed: boolean;
  userId: number;
}[];

export type singleTodo = {
  id: number | string;
  title: string;
  completed: boolean;
  userId: number;
};

export type todoProps = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
  };
  deleteTodo: (id: number) => void;
  updateTodo: (id: number) => void;
};

export type todoForm = {
  id?: number | null;
  title?: string;
  userId: number | null;
  completed: boolean;
};
