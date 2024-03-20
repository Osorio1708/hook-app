import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const { id, name, email } = user || { id: "", name: "", email: "" };
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="form-control mt-2"
          type="text"
          name="id"
          placeholder="User id"
          value={id}
          onChange={onInputChange}
        />
        <input
          className="form-control mt-2"
          type="text"
          name="name"
          placeholder="User Name"
          value={name}
          onChange={onInputChange}
        />
        <input
          className="form-control mt-2"
          type="enail"
          name="email"
          placeholder="User Email"
          value={email}
          onChange={onInputChange}
        />
      </form>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          setUser({ id: "", name: "", email: "" });
        }}
      >
        Clear
      </button>
    </>
  );
};
