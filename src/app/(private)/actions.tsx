import { fetchData } from "@/utils/api";
import { DELETE, GET, POST, PUT } from "@/utils/constants";
import { TodoDetails } from "@/utils/types";

const TODO_ENDPOINT: string = "/todos/";

export const createTodo = async (details: TodoDetails, display: () => void) => {
  await fetchData({ endpoint: TODO_ENDPOINT, method: POST, data: details });
  await getAllTodos();
  display();
};

export const fetchTodoDetails = async (
  id: string | undefined,
  setDetails: (todo: TodoDetails) => void,
  display: () => void
) => {
  try {
    const todo = await fetchData({
      endpoint: `${TODO_ENDPOINT}/${id}`,
      method: GET,
    });
    setDetails(todo);
    display();
  } catch (error) {
    console.error("Error fetching todo details:", error);
  }
};

export const updateTodoDetails = async (
  id: string | undefined,
  details: TodoDetails,
  display: () => void
) => {
  await fetchData({
    endpoint: `${TODO_ENDPOINT}/${id}`,
    method: PUT,
    data: details,
  });
  await getAllTodos();
  display();
};

export const removeTodo = async (id: string | undefined) => {
  await fetchData({
    endpoint: `${TODO_ENDPOINT}/${id}`,
    method: DELETE,
  });
  await getAllTodos();
};

export const getAllTodos = async () => {
  try {
    const res = await fetchData({ endpoint: TODO_ENDPOINT, method: GET });
    return res;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return null;
  }
};
