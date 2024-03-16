export const TodoItem = ({ todo, onDeleteTodo }) => {
  const { id, description } = todo;
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="aling-self-center">{description}</span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
          borrar
        </button>
      </li>
    </>
  );
};
