import { TodoItem } from "../../src/08-useReducer/TodoItem";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    decription: "Piedra del Alma",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Debe de mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toBe("aling-self-center false");
  });
  test("Debe de mostrar el todo completado", () => {
    render(
      <TodoItem
        todo={{ ...todo, done: true }}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toBe(
      "aling-self-center text-decoration-line-through"
    );
  });
  test("Debe llamar onToggleTodo cuando se hace click en el span", () => {
    render(
      <TodoItem
        todo={{ ...todo, done: true }}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("Debe llamar onDeleteTodo cuando se hace click en el botton", () => {
    render(
      <TodoItem
        todo={{ ...todo, done: true }}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
