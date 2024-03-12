import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "username",
    email: "tu-email@email.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

//   useEffect(() => {
//     console.log("useEffect");
//   }, []);

//   useEffect(() => {
//     console.log("useEffect - formState changed");
//   }, [formState]);

//   useEffect(() => {
//     console.log("useEffect - email changed");
//   }, [email]);

  return (
    <>
      <h1> Formulario Simple</h1>
      <h1 />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="tu-email@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "admin" && <Message />}
    </>
  );
};
