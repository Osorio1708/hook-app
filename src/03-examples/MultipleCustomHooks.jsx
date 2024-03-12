import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { data, isLoading } = useFetch("https://pokeapi.co/api/v2/pokemon/1");

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />

      {isLoading && <h2>Cargando...</h2>}

      <h2> {data?.name} </h2>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
